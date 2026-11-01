import { Component, computed, input } from '@angular/core';
import { Card } from '../../data';

@Component({
  imports: [],
  selector: 'app-card-box',
  styleUrl: './card-box.scss',
  templateUrl: './card-box.html',
})
export class CardBox {
  public card = input.required<Card>();

  protected cardType = computed(() => {
    switch (this.card().type) {
      case 'visa':
        return 'VISA';
      case 'mastercard':
        return 'Mastercard';
    }
  });
}
