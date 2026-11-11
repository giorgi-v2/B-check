import { Component, input } from '@angular/core';
import { Transaction } from '../../../data';

@Component({
  imports: [],
  selector: 'app-transactions-table',
  styleUrl: './transactions-table.scss',
  templateUrl: './transactions-table.html',
})
export class TransactionsTable {
  public transactions = input.required<Transaction[]>();

  protected formatDate(date: Date) {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }
}
