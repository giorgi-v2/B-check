import { Component, computed, inject, input, signal } from '@angular/core';
import { Card, Transaction } from '../../../data';
import { TransactionsTable } from '../../transactions/transactions-table/transactions-table';
import { CardBalance } from '../../cards/card-balance/card-balance';
import { CardSelect } from '../../cards/card-select/card-select';
import { Cards } from '../../cards/cards';
import { Transactions } from '../transactions';
import { Router, RouteReuseStrategy, RouterLink } from '@angular/router';

@Component({
  imports: [TransactionsTable, CardBalance, CardSelect, RouterLink],
  selector: 'app-transactions-page',
  styleUrl: './transactions-page.scss',
  templateUrl: './transactions-page.html',
})
export class TransactionsPage {
  protected readonly transactions = inject(Transactions).transactions;
  protected readonly cards = inject(Cards).cards;

  readonly cardId = input<string>();
  private readonly router = inject(Router);

  protected readonly filterSelectedCardId = computed<number | 'all'>(() => {
    const id = this.cardId();
    return this.cards().find((card) => String(card.id) === id)?.id ?? 'all';
  });

  protected changeCardFilter(id: number | 'all') {
    void this.router.navigate(['/transactions'], {
      queryParams: { cardId: id === 'all' ? null : id },
      queryParamsHandling: 'merge',
    });
  }
  protected sortedTransactions = computed(() => {
    const id = this.filterSelectedCardId();

    return this.transactions()
      .filter((transaction) => id === 'all' || transaction.cardId === id)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  });
}
