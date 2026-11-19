import { Component, effect, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { DashboardPage } from './features/dashboard-page/dashboard-page';
import { MyCardsPage } from './features/my-cards-page/my-cards-page';
import { TransactionsPage } from './features/transactions/transactions-page/transactions-page';
import { RouteCode } from './route';
import { Card, Transaction } from './data';
import { TransactionCreationPage } from './features/transactions/transaction-creation-page/transaction-creation-page';
import { TransactionsTable } from './features/transactions/transactions-table/transactions-table';
import { Box } from './components/box/box';
import { Cards } from './features/cards/cards';

const localStorageKey = 'data';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    DashboardPage,
    MyCardsPage,
    TransactionsPage,
    TransactionCreationPage,
    TransactionsTable,
    Box,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  [x: string]: any;
  protected readonly title = signal('b-check-project');

  protected currentRoute: WritableSignal<RouteCode> = signal('dashboard');

  protected transactions = signal<Transaction[]>([]);

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
      this.transactions.set(parseToData.transactions);
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
    if (this.transactions().length > 0) {
      const newId = Math.max(...this.transactions().map((x) => x.id)) + 1;
      transaction.id = newId;
    } else {
      transaction.id = 1;
    }
    const card = this.cards().find((x) => x.id === transaction.cardId);
    if (!card) {
      alert('we cant create a transaction');
      return;
    }
    const cardAccount = card.accounts.find((x) => x.currency === transaction.currency);
    if (!cardAccount) {
      alert('your card does not support this currency');
      return;
    }
    if (transaction.type === 'outcome' && transaction.amount > cardAccount.amount) {
      alert('There is not enough balance on account');
      return;
    }
    this.transactions.update((transactions) => [...transactions, transaction]);
    let newBalance = cardAccount.amount;

    if (transaction.type === 'income') {
      newBalance += transaction.amount;
    } else {
      newBalance -= transaction.amount;
    }

    const updatedCard: Card = {
      ...card,
      accounts: card.accounts.map((account) => {
        if (account.currency === transaction.currency) {
          return { ...account, amount: newBalance };
        }

        return account;
      }),
    };

    this.cardsService.updateCard(updatedCard);
    this.handleCurrentRouteChange('transactions');
  }

  protected handleCurrentRouteChange(route: RouteCode) {
    this.currentRoute.set(route);
  }
}
