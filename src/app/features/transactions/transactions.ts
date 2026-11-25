import { inject, Injectable, signal } from '@angular/core';
import { Transaction } from '../../data';

@Injectable({ providedIn: 'root' })
export class Transactions {
  private readonly transactionList = signal<Transaction[]>([]);
  readonly transactions = this.transactionList.asReadonly();

  restore(transactions: Transaction[]) {
    this.transactionList.set(transactions);
  }

  add(transaction: Transaction) {
    this.transactionList.update((transactions) => [...transactions, transaction]);
  }
}
