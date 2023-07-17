import { Component } from '@angular/core';
import { Task } from './interfaces/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  username: string = '';
  tasks: Task[] = [
    { title: 'Task 1', description: 'Description 1', functionality: 'Functionality 1', column: 'To Do' },
    { title: 'Task 2', description: 'Description 2', functionality: 'Functionality 2', column: 'In Progress' },
    { title: 'Task 3', description: 'Description 3', functionality: 'Functionality 3', column: 'Done' }
  ];

  saveTasksToSessionStorage() {
    sessionStorage.setItem('userTasks', JSON.stringify(this.tasks));
  }

  onLogin(loginData: { username: string, password: string }) {
    if (loginData.username === 'John Doe' && loginData.password === '123456') {
      this.isLoggedIn = true;
      this.username = loginData.username;
    } else {
      console.log('Nieprawidłowe dane logowania');
    }
  }
}
