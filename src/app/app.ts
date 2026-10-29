import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { DashboardPage } from './features/dashboard-page/dashboard-page';
import { MyCardsPage } from './features/my-cards-page/my-cards-page';
import { TransactionsPage } from './features/transactions-page/transactions-page';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, DashboardPage, MyCardsPage, TransactionsPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('b-check-project');

  protected currentRoute: 'dashboard' | 'my-cards' | 'transactions' = 'dashboard';

  protected handleCurrentRouteChange(route: 'dashboard' | 'my-cards' | 'transactions') {
    this.currentRoute = route;
  }
}
