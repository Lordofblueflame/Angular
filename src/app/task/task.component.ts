import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { MatDialog } from '@angular/material/dialog';
import { TaskformComponent } from '../taskform/taskform.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task = {
    title: '',
    description: '',
    functionality: '',
    column: ''
  };
  @Output() taskUpdated: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() taskDeleted: EventEmitter<Task> = new EventEmitter<Task>(); // Dodane zdarzenie taskDeleted

  constructor(private dialog: MatDialog) {}

  openTaskForm() {
    const dialogRef = this.dialog.open(TaskformComponent, {
      width: '500px',
      data: this.task
    });

    dialogRef.componentInstance.dataUpdated.subscribe((updatedTask: Task) => {
      this.task = updatedTask;
      this.taskUpdated.emit(this.task);
    });
  }

  deleteTask() {
    this.taskDeleted.emit(this.task); // Emitowanie zadania, które ma zostać usunięte
  }
}
