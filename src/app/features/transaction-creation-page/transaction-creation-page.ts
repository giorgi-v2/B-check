import { Component, computed, effect, input, output, signal } from '@angular/core';
import { Card, Transaction } from '../../data';
import { FormsModule } from '@angular/forms';
import { CardBox } from '../card-box/card-box';

@Component({
  imports: [FormsModule, CardBox],
  selector: 'app-transaction-creation-page',
  styleUrl: './transaction-creation-page.scss',
  templateUrl: './transaction-creation-page.html',
})
export class TransactionCreationPage {
  public cards = input.required<Card[]>();

  public onTransactionCreate = output<Transaction>();

  protected place = signal<Transaction['place']>(undefined);
  protected type = signal<Transaction['type']>('outcome');
  protected category = signal<Transaction['category']>(undefined);
  protected amount = signal<Transaction['amount']>(0);
  protected currency = signal<Transaction['currency']>('GEL');
  protected date = signal<Transaction['date']>(new Date());
  protected cardId = signal<Transaction['cardId'] | undefined>(undefined);

  protected createTransaction() {
    const selectedCard = this.cards().find((x) => x.id === this.cardId());
    if (!selectedCard) {
      alert('please choose a card');
      return;
    }
    this.onTransactionCreate.emit({
      id: 0,
      type: this.type(),
      place: this.place(),
      category: this.category(),
      amount: this.amount(),
      currency: this.currency(),
      date: this.date(),
      cardId: this.cardId() ?? 0,
      cardName: selectedCard.name,
      cardNumberLast4Digets: selectedCard?.cardNumber,
      status: 'completed',
    });
  }
}
