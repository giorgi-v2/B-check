import { Component, input, signal } from '@angular/core';
import { Transaction } from '../../data';

@Component({
  imports: [],
  selector: 'app-transactions-page',
  styleUrl: './transactions-page.scss',
  templateUrl: './transactions-page.html',
})
export class TransactionsPage {
  public transactions = input.required<Transaction[]>();

  protected formatDate(date: Date) {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }
}
