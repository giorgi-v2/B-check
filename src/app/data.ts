import { Data } from '@angular/router';
export type CurrencyCode = 'USD' | 'EUR' | 'GEL';

export interface Transaction {
  id: number;
  place?: string;
  type: 'income' | 'outcome';
  category?: 'products' | 'health' | 'transport' | 'salary' | 'transfer';
  amount: number;
  currency: CurrencyCode;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
  cardName: string;
  cardNumberLast4Digets: string;
  cardId: number;
}

export interface Card {
  name: string;
  id: number;
  provider: string;
  type: 'visa' | 'mastercard';
  cardNumber: string;
  cardHolder: string;
  expirationDate: Date;
  cvv: string;
  accounts: CardAccount[];
}

export interface CardAccount {
  id: number;
  amount: number;
  currency: CurrencyCode;
}
