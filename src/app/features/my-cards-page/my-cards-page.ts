import { Component, computed, inject, input, signal } from '@angular/core';
import { Card } from '../../data';
import { CardBox } from '../cards/card-box/card-box';
import { CardAccountBox } from '../cards/card-account-box/card-account-box';
import { CardAdd } from '../cards/card-add/card-add';
import { CardDemo } from '../cards/card-demo/card-demo';
import { Cards } from '../cards/cards';

@Component({
  imports: [CardBox, CardAccountBox, CardAdd, CardDemo],
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
  private readonly cardsService = inject(Cards);

  protected removeSelectedCard() {
    const card = this.selectedCard();
    if (!card) {
      return;
    }
    this.cardsService.removeCard(card.id);
    this.selectedCardId.set(undefined);
  }
}
