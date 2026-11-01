import { Component, computed, input, signal } from '@angular/core';
import { Card } from '../../data';
import { CardBox } from '../card-box/card-box';
import { CardAccountBox } from '../card-account-box/card-account-box';

@Component({
  imports: [CardBox, CardAccountBox],
  selector: 'app-my-cards-page',
  styleUrl: './my-cards-page.scss',
  templateUrl: './my-cards-page.html',
})
export class MyCardsPage {
  public cards = input.required<Card[]>();

  protected selectedCardId = signal<number | undefined>(undefined);
  protected selectedCard = computed(
    () => this.cards().find((card) => card.id === this.selectedCardId()) ?? this.cards()[0],
  );
}
