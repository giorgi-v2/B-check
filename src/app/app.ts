import { Component, effect, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { DashboardPage } from './features/dashboard-page/dashboard-page';
import { MyCardsPage } from './features/my-cards-page/my-cards-page';
import { TransactionsPage } from './features/transactions/transactions-page/transactions-page';
import { RouteCode } from './route';
import { Card, Transaction } from './data';
import { TransactionsTable } from './features/transactions/transactions-table/transactions-table';
import { Box } from './components/box/box';
import { Cards } from './features/cards/cards';
import { Transactions } from './features/transactions/transactions';
import { readonly } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

const localStorageKey = 'data';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  [x: string]: any;
  protected readonly title = signal('b-check-project');

  protected currentRoute: WritableSignal<RouteCode> = signal('dashboard');

  private readonly transactionService = inject(Transactions);
  protected readonly transactions = this.transactionService.transactions;

  private readonly cardsService = inject(Cards);
  protected readonly cards = this.cardsService.cards;
  protected dataSaverEffect = effect(() => {
    const transactions = this.transactions();
    const cards = this.cards();
    const data = {
      transactions,
      cards,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  });

  public constructor() {
    const data = localStorage.getItem(localStorageKey);
    if (!data) {
      return;
    }
    const parseToData = JSON.parse(data) as { transactions: Transaction[]; cards: Card[] };
    if (parseToData.transactions) {
      parseToData.transactions.forEach((element) => {
        element.date = new Date(element.date);
      });
      this.transactionService.restore(parseToData.transactions);
    }
    if (parseToData.cards) {
      this.cardsService.localCards(
        parseToData.cards.map((card) => ({
          ...card,
          expirationDate: new Date(card.expirationDate),
        })),
      );
    }
  }

  protected createTransaction(transaction: Transaction) {
    if (this.transactionService.createTransaction(transaction)) {
      this.handleCurrentRouteChange('transactions');
    }
  }

  protected handleCurrentRouteChange(route: RouteCode) {
    this.currentRoute.set(route);
  }
}
