import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card, CurrencyCode } from '../../../data';
import { Cards } from '../cards';

@Component({
  imports: [FormsModule],
  selector: 'app-card-add',
  styleUrl: './card-add.scss',
  templateUrl: './card-add.html',
})
export class CardAdd {
  protected cardName = signal('');
  protected cardNumber = signal('');
  protected cardCvv = signal('');
  protected cardExpirationDate = signal('');
  protected cardBalance = signal(0);
  protected cardCurrency = signal<CurrencyCode>('GEL');
  protected cardProvider = signal<Card['provider']>('BOG');
  protected cardType = signal<Card['type']>('visa');

  protected submitCard(): void {
    if (
      !this.cardName() ||
      !this.cardNumber() ||
      !this.cardCvv() ||
      !this.cardExpirationDate() ||
      typeof this.cardBalance() !== 'number' ||
      this.cardBalance() < 0 ||
      !this.cardCurrency()
    ) {
      alert('Please fill the blank space');
      return;
    }
    let newId = Date.now();
    for (const card of this.cardsService.cards()) {
      if (card.id >= newId) {
        newId = card.id + 1;
      }
    }

    const newCard: Card = {
      id: newId,
      name: this.cardName(),
      provider: this.cardProvider(),
      type: this.cardType(),
      cardNumber: this.cardNumber(),
      cardHolder: 'Alex Dune',
      expirationDate: new Date(this.cardExpirationDate()),
      cvv: this.cardCvv(),
      accounts: [
        {
          id: 1,
          amount: this.cardBalance(),
          currency: this.cardCurrency(),
        },
      ],
    };
    const cardAdded = this.cardsService.addCard(newCard);

    if (!cardAdded) {
      alert('you are able to add maximum 5 cards');
      return;
    }
  }

  private readonly cardsService = inject(Cards);
}
