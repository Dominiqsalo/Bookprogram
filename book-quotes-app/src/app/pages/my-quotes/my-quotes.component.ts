import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-quotes.component.html',
  styleUrl: './my-quotes.component.css'
})
export class MyQuotes {
  quotes: string[] = [
    "Be yourself; everyone else is already taken.",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "In the end, we only regret the chances we didn’t take.",
    "Be the change that you wish to see in the world."
  ];
}
