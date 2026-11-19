import { computed, inject, Injectable, InjectionToken, Service, signal } from '@angular/core';
import { Card } from '../../data';

@Injectable({ providedIn: 'root' })
export class Cards {
  private readonly cardList = signal<Card[]>([]);
  readonly cards = this.cardList.asReadonly();
  readonly cardCount = computed(() => this.cardList().length);
  private readonly maxCards = inject(MAX_CARDS);
  removeCard(id: number) {
    this.cardList.update((cards) => cards.filter((card) => card.id !== id));
  }

  addCard(card: Card) {
    if (this.cardCount() >= this.maxCards || !card.name || !card.cardNumber) {
      return false;
    }
    for (const account of card.accounts) {
      if (!Number.isFinite(account.amount) || account.amount < 0) {
        return false;
      }
    }
    this.cardList.update((cards) => [...cards, card]);
    return true;
  }
  localCards(cards: Card[]) {
    this.cardList.set(cards);
  }
  updateCard(updatedCard: Card) {
    const existingCard = this.cards().find((card) => card.id === updatedCard.id);
    if (!existingCard || !updatedCard.name) {
      return;
    }

    for (const account of updatedCard.accounts) {
      if (!Number.isFinite(account.amount) || account.amount < 0) {
        return;
      }
    }
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
