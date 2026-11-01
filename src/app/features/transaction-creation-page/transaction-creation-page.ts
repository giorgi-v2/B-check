import { Component, input, output, signal } from '@angular/core';
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
  protected transaction = signal<Partial<Transaction>>({
    id: 0,
    place: '',
    type: undefined,
    category: undefined,
    amount: 0,
    currency: undefined,
    date: undefined,
    status: undefined,
    cardName: '',
    cardNumberLast4Digets: '',
    cardId: undefined,
  });
}
