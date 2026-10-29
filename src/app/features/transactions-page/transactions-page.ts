import { Component } from '@angular/core';

interface Transaction {
  id: number;
  place?: string;
  type: 'income' | 'outcome';
  category?: 'products' | 'health' | 'transport' | 'salary' | 'transfer';
  amount: number;
  currency: 'USD' | 'EUR' | 'GEL';
  date: Date;
  status: 'completed' | 'pending' | 'failed';
  cardName: string;
  cardNumberLast4Digets: string;
}

@Component({
  imports: [],
  selector: 'app-transactions-page',
  styleUrl: './transactions-page.scss',
  templateUrl: './transactions-page.html',
})
export class TransactionsPage {
  protected transactions: Transaction[] = [
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
    },
  ];
  protected formatDate(date: Date) {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }
}
