import { Routes } from '@angular/router';
import { DashboardPage } from './features/dashboard-page/dashboard-page';
import { MyCardsPage } from './features/my-cards-page/my-cards-page';
import { TransactionLayout } from './features/transactions/transaction-layout/transaction-layout';
import { TransactionsPage } from './features/transactions/transactions-page/transactions-page';
import { TransactionCreationPage } from './features/transactions/transaction-creation-page/transaction-creation-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardPage },
  { path: 'my-cards', component: MyCardsPage },

  {
    path: 'transactions',
    component: TransactionLayout,
    children: [
      { path: '', pathMatch: 'full', component: TransactionsPage },
      { path: 'new', component: TransactionCreationPage },
    ],
  },
];
