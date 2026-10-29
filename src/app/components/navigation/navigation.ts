import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navigation',
  styleUrl: './navigation.scss',
  templateUrl: './navigation.html',
})
export class Navigation {
  @Input()
  public currentRoute: 'dashboard' | 'my-cards' | 'transactions' = 'dashboard';
  @Output()
  public onCurrentRouteChange = new EventEmitter<'dashboard' | 'my-cards' | 'transactions'>();
}
