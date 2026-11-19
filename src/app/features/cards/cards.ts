import { computed, inject, Injectable, InjectionToken, Service, signal } from '@angular/core';
import { Card } from '../../data';

@Injectable({ providedIn: 'root' })
export class Cards {
  private readonly cardList = signal<Card[]>([]);
  readonly cards = this.cardList.asReadonly();
  readonly cardCount = computed(() => this.cardList().length);
  private readonly maxCards = inject(MAX_CARDS);

  addCard(card: Card) {
    if (this.cardCount() >= this.maxCards) {
      return false;
    }
    this.cardList.update((cards) => [...cards, card]);
    return true;
  }
  localCards(cards: Card[]) {
    this.cardList.set(cards);
  }
  updateCard(updatedCard: Card) {
    this.cardList.update((cards) =>
      cards.map((card) => {
        if (card.id === updatedCard.id) {
          return updatedCard;
        }
        return card;
      }),
    );
  }
}

export const MAX_CARDS = new InjectionToken<number>('MAX_CARDS');
