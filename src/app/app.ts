import { Component, effect, Signal, signal, WritableSignal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { DashboardPage } from './features/dashboard-page/dashboard-page';
import { MyCardsPage } from './features/my-cards-page/my-cards-page';
import { TransactionsPage } from './features/transactions-page/transactions-page';
import { RouteCode } from './route';
import { Card, Transaction } from './data';
import { TransactionCreationPage } from './features/transaction-creation-page/transaction-creation-page';

const localStorageKey = 'data';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, DashboardPage, MyCardsPage, TransactionsPage, TransactionCreationPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  [x: string]: any;
  protected readonly title = signal('b-check-project');

  protected currentRoute: WritableSignal<RouteCode> = signal('dashboard');

  protected transactions = signal<Transaction[]>([]);

  protected cards = signal<Card[]>([
    {
      name: 'everyday debit',
      id: 1,
      provider: 'BOG',
      type: 'visa',
      cardNumber: '**** **** **** 0102',
      cardHolder: 'Alex Dune',
      expirationDate: new Date(2039, 7),
      cvv: '***',
      accounts: [
        {
          id: 1,
          amount: 201,
          currency: 'GEL',
        },
        {
          id: 1,
          amount: 98,
          currency: 'USD',
        },
      ],
    },
    {
      name: 'Travel card',
      id: 2,
      provider: 'TBC',
      type: 'mastercard',
      cardNumber: '**** **** **** 4765',
      cardHolder: 'Alex Dune',
      expirationDate: new Date(2039, 7),
      cvv: '***',
      accounts: [
        {
          id: 1,
          amount: 201,
          currency: 'GEL',
        },
        {
          id: 1,
          amount: 98,
          currency: 'USD',
        },
      ],
    },
    {
      name: 'Savings card',
      id: 3,
      provider: 'Credo',
      type: 'visa',
      cardNumber: '**** **** **** 0342',
      cardHolder: 'Alex Dune',
      expirationDate: new Date(2039, 7),
      cvv: '***',
      accounts: [
        {
          id: 1,
          amount: 201,
          currency: 'GEL',
        },
        {
          id: 1,
          amount: 98,
          currency: 'USD',
        },
      ],
    },
  ]);

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
      this.cards.set(parseToData.cards);
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
    switch (transaction.type) {
      case 'income':
        cardAccount.amount += transaction.amount;
        break;
      case 'outcome':
        cardAccount.amount -= transaction.amount;
        break;
    }
    this.cards.update((cards) => [...cards.filter((x) => x.id !== transaction.cardId), card]);
    this.handleCurrentRouteChange('transactions');
  }

  protected handleCurrentRouteChange(route: RouteCode) {
    this.currentRoute.set(route);
  }
}
