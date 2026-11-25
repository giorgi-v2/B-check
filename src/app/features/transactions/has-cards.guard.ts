import { CanActivateFn, Router } from '@angular/router';
import { Cards } from '../cards/cards';
import { inject } from '@angular/core';

export const hasCardGuard: CanActivateFn = () => {
  const cards = inject(Cards);
  const router = inject(Router);

  return cards.cardCount() > 0 ? true : router.createUrlTree(['/my-cards']);
};
