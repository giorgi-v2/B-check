import { Component, input } from '@angular/core';
import { Card } from '../../data';
import { CardBox } from '../card-box/card-box';

@Component({
  imports: [CardBox],
  selector: 'app-my-cards-page',
  styleUrl: './my-cards-page.scss',
  templateUrl: './my-cards-page.html',
})
export class MyCardsPage {
  public cards = input.required<Card[]>();
}
