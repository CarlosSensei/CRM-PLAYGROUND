import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  login(): void {

    console.log('Login successful');

    this.router.navigate(['/home']);
  }
}