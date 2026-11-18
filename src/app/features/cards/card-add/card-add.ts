import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyCode } from '../../../data';

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

  protected submitCard(): void {
    if (
      !this.cardName() ||
      !this.cardNumber() ||
      !this.cardCvv() ||
      !this.cardExpirationDate() ||
      !this.cardBalance() ||
      !this.cardCurrency()
    ) {
      alert('Please fill the blank space');
    }
    console.log(this.cardName());
    console.log(this.cardBalance());
    console.log(this.cardCurrency());
  }
  private readonly cardsService = inject(Cards);
}
