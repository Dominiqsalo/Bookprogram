import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService) { }


  isLoggedIn() {
    const token = this.auth.getToken();
    return token !== null && token !== 'undefined';
  }

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {
    console.log("Token vid start:", this.auth.getToken());
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }
  toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}
