import { Component, computed, input, signal } from '@angular/core';
import { Card } from '../../data';
import { CardBox } from '../cards/card-box/card-box';
import { CardAccountBox } from '../cards/card-account-box/card-account-box';
import { CardAdd } from '../cards/card-add/card-add';

@Component({
  imports: [CardBox, CardAccountBox, CardAdd],
  selector: 'app-my-cards-page',
  styleUrl: './my-cards-page.scss',
  templateUrl: './my-cards-page.html',
})
export class MyCardsPage {
  public cards = input.required<Card[]>();
  protected showCardForm = signal(false);

  protected selectedCardId = signal<number | undefined>(undefined);
  protected selectedCard = computed(
    () => this.cards().find((card) => card.id === this.selectedCardId()) ?? this.cards()[0],
  );
}
