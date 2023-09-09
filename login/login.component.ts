import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loginAction = new EventEmitter<{ username: string, password: string }>();

  username: string = '';
  password: string = '';

  constructor(private router: Router) {} 

  onLogin() {
    if (this.username === 'John Doe' && this.password === '123456') {
      const loginData = {
        username: this.username,
        password: this.password
      };
      console.log("Zalogowano");
      this.loginAction.emit(loginData);

      this.router.navigate(['/project']); 

    } else {
      console.log('Nieprawidłowe dane logowania');
    }
  }
}
