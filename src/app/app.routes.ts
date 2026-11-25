import { Routes } from '@angular/router';
import { DashboardPage } from './features/dashboard-page/dashboard-page';
import { MyCardsPage } from './features/my-cards-page/my-cards-page';
import { TransactionLayout } from './features/transactions/transaction-layout/transaction-layout';
import { TransactionsPage } from './features/transactions/transactions-page/transactions-page';
import { hasCardGuard } from './features/transactions/has-cards.guard';
import { NotFoundPage } from './features/not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardPage },
  { path: 'my-cards', component: MyCardsPage },
  { path: 'my-cards/:id', component: MyCardsPage },

  {
    path: 'transactions',
    component: TransactionLayout,
    children: [
      { path: '', pathMatch: 'full', component: TransactionsPage },
      {
        path: 'new',
        canActivate: [hasCardGuard],
        loadComponent: () =>
          import('./features/transactions/transaction-creation-page/transaction-creation-page').then(
            (module) => module.TransactionCreationPage,
          ),
      },
    ],
  },
  { path: '**', component: NotFoundPage },
];
