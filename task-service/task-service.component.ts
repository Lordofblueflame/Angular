import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Component({
  selector: 'app-task-service',
  templateUrl: './task-service.component.html',
  styleUrls: ['./task-service.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class TaskServiceComponent {
  private _tasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([
    { title: 'Task 1', description: 'Description 1', functionality: 'Functionality 1', column: 'To Do' },
    { title: 'Task 2', description: 'Description 2', functionality: 'Functionality 2', column: 'In Progress' },
    { title: 'Task 3', description: 'Description 3', functionality: 'Functionality 3', column: 'Done' }
  ]);
  get tasks(): Observable<Task[]> {
    return this._tasks.asObservable();
  }

  addTask(task: Task) {
    const currentTasks = this._tasks.value;
    this._tasks.next([...currentTasks, task]);
  }

  removeTask(task: Task) {
    const currentTasks = this._tasks.value;
    this._tasks.next(currentTasks.filter(t => t !== task));
  }

  updateTaskStatus(task: Task, column: string) {
    const currentTasks = this._tasks.value;
    const updatedTasks = currentTasks.map(t => 
      t === task ? {...t, column} : t
    );
    this._tasks.next(updatedTasks);
  }

  addFunctionality(functionality: string) {
    const currentTasks = this._tasks.value;
    const newTask: Task = {
      title: `Task for ${functionality}`,
      description: `Description for ${functionality}`,
      functionality: functionality,
      column: 'To Do'
    };
    this._tasks.next([...currentTasks, newTask]);
  }

  updateFunctionality(oldFunctionality: string, newFunctionality: string) {
    const currentTasks = this._tasks.value;
    if(newFunctionality == '' || newFunctionality == null ) {
    return;
    }
    const updatedTasks = currentTasks.map(t => 
      t.functionality === oldFunctionality ? {...t, functionality: newFunctionality} : t
    );
    this._tasks.next(updatedTasks);
  }

  deleteFunctionality(functionality: string) {
    const currentTasks = this._tasks.value;
    const filteredTasks = currentTasks.filter(t => t.functionality !== functionality);
    this._tasks.next(filteredTasks);
  }

  getTasks(): Task[] {
    return [...this._tasks.value];
  }

  saveTasksToSessionStorage(): void {
    sessionStorage.setItem('userTasks', JSON.stringify(this._tasks.value));
  }
  
}
