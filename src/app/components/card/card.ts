import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgStyle],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  imagenes: string[] = ['assets/ropa/remeras/zara_polo_punto_blanco_regular.png',
                        'assets/ropa/pantalones/zara_pantalon_lino_negro_relaxed.png'
  ];
}
