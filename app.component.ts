import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  username: string = '';

  onLogin(loginData: { username: string, password: string }) {
    if (loginData.username === 'John Doe' && loginData.password === '123456') {
      this.isLoggedIn = true;
      this.username = loginData.username;
    } else {
      console.log('Nieprawidłowe dane logowania');
    }
  }
}
