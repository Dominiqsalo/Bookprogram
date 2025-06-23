import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: res => {
        this.authService.saveToken(res.token);
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 50); 
      
      },
      error: () => this.error = 'Felaktiga inloggningsuppgifter.'
    });
  }
}
