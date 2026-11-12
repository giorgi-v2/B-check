import { Component, computed, input, output, signal } from '@angular/core';
import { Card, Transaction } from '../../../data';
import { TransactionsTable } from '../../transactions/transactions-table/transactions-table';
import { CardBalance } from '../../cards/card-balance/card-balance';
import { CardSelect } from '../../cards/card-select/card-select';

@Component({
  imports: [TransactionsTable, CardBalance, CardSelect],
  selector: 'app-transactions-page',
  styleUrl: './transactions-page.scss',
  templateUrl: './transactions-page.html',
})
export class TransactionsPage {
  public transactions = input.required<Transaction[]>();
  public cards = input.required<Card[]>();

  public onAddTransaction = output();

  protected filterSelectedCardId = signal<number | null>(null);

  protected sortedTransactions = computed(() => {
    const filterSelectedCardId = this.filterSelectedCardId();
    return this.transactions()
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .filter((x) => filterSelectedCardId === null || x.cardId === +filterSelectedCardId);
  });
}
