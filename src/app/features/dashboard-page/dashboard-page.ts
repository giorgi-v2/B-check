import { Component, computed, input } from '@angular/core';
import { TransactionsTable } from '../transactions/transactions-table/transactions-table';
import { Transaction } from '../../data';
import { CardBalance } from '../cards/card-balance/card-balance';
import { Box } from '../../components/box/box';

@Component({
  imports: [TransactionsTable, CardBalance, Box],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.scss',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  public transactions = input.required<Transaction[]>();

  protected last4Transactions = computed(() => {
    return this.transactions()
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .filter((x, i) => i < 4);
  });
}
