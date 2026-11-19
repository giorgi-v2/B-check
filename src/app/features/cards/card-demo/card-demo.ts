import { Component, inject } from '@angular/core';
import { Cards } from '../cards';
import { CardAdd } from '../card-add/card-add';
import { CardBox } from '../card-box/card-box';
import { CardAccountBox } from '../card-account-box/card-account-box';

@Component({
  imports: [CardAdd, CardBox, CardAccountBox],
  providers: [Cards],
  selector: 'app-card-demo',
  styleUrl: './card-demo.scss',
  templateUrl: './card-demo.html',
})
export class CardDemo {
  private readonly cardsService = inject(Cards);

  protected readonly cards = this.cardsService.cards;
  protected readonly cardsCount = this.cardsService.cardCount;
}
