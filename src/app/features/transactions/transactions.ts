import { inject, Injectable, signal } from '@angular/core';
import { Card, Transaction } from '../../data';
import { Cards } from '../cards/cards';

@Injectable({ providedIn: 'root' })
export class Transactions {
  private readonly transactionList = signal<Transaction[]>([]);
  readonly transactions = this.transactionList.asReadonly();
  private readonly cardsService = inject(Cards);

  restore(transactions: Transaction[]) {
    this.transactionList.set(transactions);
  }

  add(transaction: Transaction) {
    this.transactionList.update((transactions) => [...transactions, transaction]);
  }

  createTransaction(transaction: Transaction): boolean {
    if (this.transactions().length > 0) {
      const newId = Math.max(...this.transactions().map((x) => x.id)) + 1;
      transaction.id = newId;
    } else {
      transaction.id = 1;
    }
    const card = this.cardsService.cards().find((x) => x.id === transaction.cardId);
    if (!card) {
      alert('we cant create a transaction');
      return false;
    }
    const cardAccount = card.accounts.find((x) => x.currency === transaction.currency);
    if (!cardAccount) {
      alert('your card does not support this currency');
      return false;
    }
    if (transaction.type === 'outcome' && transaction.amount > cardAccount.amount) {
      alert('There is not enough balance on account');
      return false;
    }
    this.add(transaction);
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
    return true;
  }
}
