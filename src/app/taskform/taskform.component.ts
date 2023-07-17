import { Component, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../interfaces/task.interface';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  dataUpdated: EventEmitter<Task> = new EventEmitter<Task>();
  task!: Task;

  constructor(
    public dialogRef: MatDialogRef<TaskformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {
    this.task = { ...data }; // Stworzenie kopii obiektu task
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.task);
    this.dataUpdated.emit(this.task); // Przekazanie zaktualizowanego taska do komponentu nadrzędnego
    this.dialogRef.close();
  }
}
