import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { DashboardPage } from './features/dashboard-page/dashboard-page';
import { MyCardsPage } from './features/my-cards-page/my-cards-page';
import { TransactionsPage } from './features/transactions-page/transactions-page';
import { RouteCode } from './route';
import { Card, Transaction } from './data';
import { TransactionCreationPage } from './features/transaction-creation-page/transaction-creation-page';

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

  protected transactions = signal<Transaction[]>([
    {
      id: 1,
      type: 'income',
      category: 'transfer',
      amount: 200,
      currency: 'USD',
      date: new Date(2026, 9, 12, 8, 45, 20),
      status: 'completed',
      cardName: 'Alex',
      cardNumberLast4Digets: '0090',
      cardId: 1,
    },
    {
      id: 22,
      place: 'Spar',
      type: 'outcome',
      category: 'products',
      amount: 41.87,
      currency: 'GEL',
      date: new Date(2026, 10, 5, 17, 34, 2),
      status: 'completed',
      cardName: 'Alex',
      cardNumberLast4Digets: '0090',
      cardId: 2,
    },
    {
      id: 15,
      place: 'Bolt',
      type: 'outcome',
      category: 'transport',
      amount: 30,
      currency: 'EUR',
      date: new Date(2026, 10, 20, 5, 23, 9),
      status: 'completed',
      cardName: 'Alex',
      cardNumberLast4Digets: '0090',
      cardId: 3,
    },
  ]);

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

  protected handleCurrentRouteChange(route: RouteCode) {
    this.currentRoute.set(route);
  }
}
