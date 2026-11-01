import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { DashboardPage } from './features/dashboard-page/dashboard-page';
import { MyCardsPage } from './features/my-cards-page/my-cards-page';
import { TransactionsPage } from './features/transactions-page/transactions-page';
import { RouteCode } from './route';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, DashboardPage, MyCardsPage, TransactionsPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('b-check-project');

  protected currentRoute: WritableSignal<RouteCode> = signal('dashboard');

  protected handleCurrentRouteChange(route: RouteCode) {
    this.currentRoute.set(route);
  }
}
