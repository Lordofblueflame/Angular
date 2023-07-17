import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loginAction = new EventEmitter<{ username: string, password: string }>();

  username: string = '';
  password: string = '';

  onLogin() {
    
    if (this.username === 'John Doe' && this.password === '123456') {
      const loginData = {
        username: this.username,
        password: this.password
      };
      console.log("Zalogowano");
      this.loginAction.emit(loginData);    
    } else {
      
      console.log('Nieprawidłowe dane logowania');
    }
  }
}
