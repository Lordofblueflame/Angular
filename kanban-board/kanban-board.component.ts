import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { Column } from '../interfaces/column.interface';
import { TaskServiceComponent } from '../task-service/task-service.component';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})

export class KanbanBoardComponent {
  tasks: Task[] = [];
  columns: Column[] = [
    { title: 'To Do', tasks: [] },
    { title: 'In Progress', tasks: [] },
    { title: 'Done', tasks: [] }
  ];
  newTask: Task = { title: '', description: '', functionality: '', column: '' };
  draggingTask: Task | null = null;

  constructor(private taskService: TaskServiceComponent) {}

  ngOnInit() {
    this.taskService.tasks.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.filterTasks();
    });
  }

  filterTasks() {
    this.columns.forEach(col => {
      col.tasks = this.tasks.filter(task => task.column === col.title);
    });
  }

  addTask(columnTitle: string) {
    if (this.newTask.title && this.newTask.description && this.newTask.functionality) {
      const newTask: Task = {
        ...this.newTask,
        column: columnTitle
      };
      this.taskService.addTask(newTask);
    }
  }

  onTaskDeleted(task: Task) {
    this.taskService.removeTask(task);
  }

  todoTasks: Task[] = []; 
  inProgressTasks: Task[] = []; 
  doneTasks: Task[] = [];

  isFormOpen: boolean = false;

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
      if (this.draggingTask !== null) {
        this.taskService.updateTaskStatus(this.draggingTask, column);
      }
    }
  }

  openForm(columnTitle: string) {
    this.newTask.column = columnTitle;
    this.newTask = { title: '', description: '', functionality: '', column: columnTitle };
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

