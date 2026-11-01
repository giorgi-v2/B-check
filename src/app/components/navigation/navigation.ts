import { Component, EventEmitter, input, Input, InputSignal, output, Output } from '@angular/core';
import { RouteCode } from '../../route';

@Component({
  imports: [],
  selector: 'app-navigation',
  styleUrl: './navigation.scss',
  templateUrl: './navigation.html',
})
export class Navigation {
  public currentRoute = input<RouteCode>('dashboard');
  public onCurrentRouteChange = output<RouteCode>();
}
