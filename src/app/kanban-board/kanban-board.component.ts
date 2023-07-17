import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { Column } from '../interfaces/column.interface';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})

export class KanbanBoardComponent {
  @Input() tasks: Task[] = [];
  todoTasks: Task[] = []; 
  inProgressTasks: Task[] = []; 
  doneTasks: Task[] = [];
  columns: Column[] = [
    { title: 'To Do', tasks: this.todoTasks },
    { title: 'In Progress', tasks: this.inProgressTasks },
    { title: 'Done', tasks: this.doneTasks }
  ];
  newTask: Task = { title: '', description: '', functionality: '', column: '' };
  isFormOpen: boolean = false;
  draggingTask: Task | null = null;
  ngOnInit() {

    this.filterTasks();
  }

  filterTasks() {
    this.tasks.forEach((task) => {
      if (task.column === 'To Do') {
        this.todoTasks.push(task);
      } else if (task.column === 'In Progress') {
        this.inProgressTasks.push(task);
      } else if (task.column === 'Done') {
        this.doneTasks.push(task);
      }
    });

  }

  onDragStart(event: DragEvent, task: Task) {
    this.draggingTask = task;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, column: string) {
    event.preventDefault();
    if (this.draggingTask !== null) {
      const previousColumn = this.columns.find(col => col.tasks.includes(this.draggingTask as Task));
      if (previousColumn) {
        const draggingTaskIndex = previousColumn.tasks.indexOf(this.draggingTask);
        if (draggingTaskIndex !== -1) {
          previousColumn.tasks.splice(draggingTaskIndex, 1);
          const columnIndex = this.columns.findIndex(col => col.title === column);
          if (columnIndex !== -1) {
            this.columns[columnIndex].tasks.push(this.draggingTask);
            this.draggingTask.column = column;
          }
        }
        this.draggingTask = null;
      }
    }
  }

  openForm(columnTitle: string) {
    this.newTask.column = columnTitle;
    this.newTask = { title: '', description: '', functionality: '', column: columnTitle };
  }

  addTask(columnTitle: string) {
    const columnIndex = this.columns.findIndex((column) => column.title === columnTitle);

    if (this.newTask.title && this.newTask.description && this.newTask.functionality && columnIndex !== -1) {
      const newTask: Task = {
        ...this.newTask,
        column: columnTitle
      };
      console.log(newTask.column);
      this.columns[columnIndex].tasks.push(newTask);
      this.newTask = { title: '', description: '', functionality: '', column: '' };
    }
  }

  onTaskDeleted(task: Task) {
      this.columns.forEach((column) => {
        const index = column.tasks.indexOf(task);

        if (index !== -1) {
          column.tasks.splice(index, 1);
        }
      }
    );
  }

  getUniqueFunctionalities(tasks: Task[]): string[] {
    const uniqueFunctionalities: string[] = [];
  
    tasks.forEach(task => {
      if (task.functionality && !uniqueFunctionalities.includes(task.functionality)) {
        uniqueFunctionalities.push(task.functionality);
      }
    });
  
    return uniqueFunctionalities;
  }
  
}

