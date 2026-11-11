import { Component, input, output, signal } from '@angular/core';
import { Transaction } from '../../../data';
import { TransactionsTable } from '../../transactions/transactions-table/transactions-table';

@Component({
  imports: [TransactionsTable],
  selector: 'app-transactions-page',
  styleUrl: './transactions-page.scss',
  templateUrl: './transactions-page.html',
})
export class TransactionsPage {
  public transactions = input.required<Transaction[]>();

  public onAddTransaction = output();
}
