import { Component, computed, inject, input } from '@angular/core';
import { TransactionsTable } from '../transactions/transactions-table/transactions-table';
import { Transaction } from '../../data';
import { CardBalance } from '../cards/card-balance/card-balance';
import { Box } from '../../components/box/box';
import { Transactions } from '../transactions/transactions';

@Component({
  imports: [TransactionsTable, CardBalance, Box],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.scss',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  protected readonly transactions = inject(Transactions).transactions;

  protected last4Transactions = computed(() => {
    return this.transactions()
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .filter((x, i) => i < 4);
  });
}
