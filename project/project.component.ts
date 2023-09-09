import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { TaskServiceComponent } from '../task-service/task-service.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  tasks: Task[] = [];

  constructor(private taskService: TaskServiceComponent) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  saveTasksToSessionStorage(): void {
    this.taskService.saveTasksToSessionStorage();
  }
}
