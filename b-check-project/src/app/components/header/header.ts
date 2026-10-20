import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation';

@Component({
  imports: [Navigation],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
