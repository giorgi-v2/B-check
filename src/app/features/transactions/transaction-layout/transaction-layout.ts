import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-transaction-layout',
  styleUrl: './transaction-layout.scss',
  templateUrl: './transaction-layout.html',
})
export class TransactionLayout {}
