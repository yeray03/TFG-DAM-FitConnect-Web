import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- IMPORTANTE
import { Router, RouterModule } from '@angular/router'; // <-- IMPORTANTE

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // <-- IMPORTANTE
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  onSubmit() {
    // Credenciales hardcodeadas para probar
    if (this.loginData.email === 'admin@fitconnect.com' && this.loginData.password === '123456') {
      this.router.navigate(['/admin/dashboard']);
    } else {
      alert('Credenciales incorrectas (pruebe: admin@fitconnect.com / 123456)');
    }
  }
}