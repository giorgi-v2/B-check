import { Component, EventEmitter, input, Input, InputSignal, output, Output } from '@angular/core';
import { Navigation } from '../navigation/navigation';
import { RouteCode } from '../../route';

@Component({
  imports: [Navigation],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  public currentRoute: InputSignal<RouteCode> = input<RouteCode>('dashboard');
  public onCurrentRouteChange = output<RouteCode>();
}
