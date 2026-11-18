import { computed, Injectable, Service, signal } from '@angular/core';
import { Card } from '../../data';
import { combineLatest } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Cards {
  private readonly cardList = signal<Card[]>([]);
  readonly cards = this.cardList.asReadonly();
  readonly cardCount = computed(() => this.cardList.length);

  addCard(card: Card) {
    this.cardList.update((cards) => [...cards, card]);
  }
}
