import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService, Book } from '../../services/book';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class Home implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.loadBooks();
    }
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: (res) => this.books = res,
      error: (err) => console.error('Fel vid hämtning av böcker:', err)
    });
  }

  deleteBook(id: number) {
    if (confirm("Är du säker på att du vill radera boken?")) {
      this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
    }
  }
}
