import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Navigation } from '../navigation/navigation';

@Component({
  imports: [Navigation],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  @Input()
  public currentRoute: 'dashboard' | 'my-cards' | 'transactions' = 'dashboard';
  @Output()
  public onCurrentRouteChange = new EventEmitter<'dashboard' | 'my-cards' | 'transactions'>();
}
