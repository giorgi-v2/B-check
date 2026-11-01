import { Component, computed, input, output } from '@angular/core';
import { Card } from '../../data';

@Component({
  imports: [],
  selector: 'app-card-box',
  styleUrl: './card-box.scss',
  templateUrl: './card-box.html',
})
export class CardBox {
  public card = input.required<Card>();
  public selected = input<boolean>(false);
  public onClick = output();

  protected cardType = computed(() => {
    switch (this.card().type) {
      case 'visa':
        return 'VISA';
      case 'mastercard':
        return 'Mastercard';
    }
  });
  protected cardIcon = computed(() => {
    switch (this.card().type) {
      case 'visa':
        return 'fa-brands fa-cc-visa';
      case 'mastercard':
        return 'fa-brands fa-cc-mastercard';
    }
  });
}
