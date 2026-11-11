import { Component, input } from '@angular/core';
import { TransactionsTable } from '../transactions/transactions-table/transactions-table';
import { Transaction } from '../../data';

@Component({
  imports: [TransactionsTable],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.scss',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  public transactions = input.required<Transaction[]>();
}
