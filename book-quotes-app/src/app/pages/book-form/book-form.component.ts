import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService, Book } from '../../services/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookForm implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    genre: '',
    publishedDate: new Date().toISOString().substring(0, 10)
  };

  isEditMode = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.bookService.getBook(+id).subscribe(book => {
        this.book = book;
        this.book.publishedDate = book.publishedDate.substring(0, 10);
      });
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.bookService.createBook(this.book).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
