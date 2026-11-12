import { Component, input, model } from '@angular/core';
import { Card } from '../../../data';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-card-select',
  styleUrl: './card-select.scss',
  templateUrl: './card-select.html',
})
export class CardSelect {
  public cards = input.required<Card[]>();

  public selectedCardId = model.required<number | 'all'>();
}
