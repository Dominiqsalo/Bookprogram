import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  message = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) { }

  register() {
    this.auth.register(this.username, this.password).subscribe({
      next: () => {
        this.message = 'Registrering lyckades!';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: err => {
        this.error = err.error || 'Registrering misslyckades.';
      }
    });
  }
}
