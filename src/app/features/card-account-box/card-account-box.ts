import { Component, input } from '@angular/core';
import { CardAccount } from '../../data';

@Component({
  imports: [],
  selector: 'app-card-account-box',
  styleUrl: './card-account-box.scss',
  templateUrl: './card-account-box.html',
})
export class CardAccountBox {
  public account = input.required<CardAccount>();

  protected readonly currencies = {
    GEL: { symbol: '₾', icon: 'fa-lari-sign' },
    USD: { symbol: '$', icon: 'fa-dollar-sign' },
    EUR: { symbol: '€', icon: 'fa-euro-sign' },
  };
}
