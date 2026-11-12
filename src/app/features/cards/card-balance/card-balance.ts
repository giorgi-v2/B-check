import { Component, input } from '@angular/core';
import { CardAccount } from '../../../data';
import { Box } from '../../../components/box/box';

@Component({
  imports: [Box],
  selector: 'app-card-balance',
  styleUrl: './card-balance.scss',
  templateUrl: './card-balance.html',
})
export class CardBalance {}
