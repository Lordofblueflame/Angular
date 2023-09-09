import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Component({
  selector: 'app-kanban-table',
  templateUrl: './kanban-table.component.html',
  styleUrls: ['./kanban-table.component.css']
})
export class KanbanTableComponent {
  @Input() columnTitle: string = 'To Do';
  @Input() tasks: Task[] = [];

}
