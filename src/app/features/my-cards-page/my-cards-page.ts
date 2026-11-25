import { Component, computed, inject, input, signal } from '@angular/core';
import { Card } from '../../data';
import { CardBox } from '../cards/card-box/card-box';
import { CardAccountBox } from '../cards/card-account-box/card-account-box';
import { CardAdd } from '../cards/card-add/card-add';
import { CardDemo } from '../cards/card-demo/card-demo';
import { Cards } from '../cards/cards';
import { Router } from '@angular/router';

@Component({
  imports: [CardBox, CardAccountBox, CardAdd, CardDemo],
  selector: 'app-my-cards-page',
  styleUrl: './my-cards-page.scss',
  templateUrl: './my-cards-page.html',
})
export class MyCardsPage {
  protected readonly cards = inject(Cards).cards;
  protected showCardForm = signal(false);

  readonly id = input<string>();
  private readonly router = inject(Router);

  protected selectedCard = computed(() => {
    const id = this.id();

    if (id === undefined) {
      return this.cards()[0];
    }

    return this.cards().find((card) => String(card.id) === id);
  });
  protected openCard(id: number) {
    void this.router.navigate(['/my-cards', id]);
  }
  private readonly cardsService = inject(Cards);

  protected removeSelectedCard() {
    const card = this.selectedCard();
    if (!card) {
      return;
    }
    this.cardsService.removeCard(card.id);
    if (this.id() !== undefined) {
      void this.router.navigate(['/my-cards'], { replaceUrl: true });
    }
  }
}
