import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgStyle, NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  prenda = [
              {
                nombre: 'Polo Punto',
                main: 'assets/ropa/remeras/polo_punto/7.jpg',
                muestras: [
                  'assets/ropa/remeras/polo_punto/1.jpg',
                  'assets/ropa/remeras/polo_punto/2.jpg',
                  'assets/ropa/remeras/polo_punto/3.jpg',
                  'assets/ropa/remeras/polo_punto/4.jpg',
                  'assets/ropa/remeras/polo_punto/5.jpg',
                  'assets/ropa/remeras/polo_punto/6.jpg',
                  'assets/ropa/remeras/polo_punto/8.jpg',
                  'assets/ropa/remeras/polo_punto/9.jpg',
                  'assets/ropa/remeras/polo_punto/10.jpg'
                ]
              },
              {
                nombre: 'Pantalon Lino',
                main: 'assets/ropa/pantalones/pantalon-lino/7.jpg',
                muestras: [
                  'assets/ropa/pantalones/pantalon-lino/1.jpg',
                  'assets/ropa/pantalones/pantalon-lino/2.jpg',
                  'assets/ropa/pantalones/pantalon-lino/3.jpg',
                  'assets/ropa/pantalones/pantalon-lino/4.jpg',
                  'assets/ropa/pantalones/pantalon-lino/5.jpg',
                  'assets/ropa/pantalones/pantalon-lino/6.jpg',
                  'assets/ropa/pantalones/pantalon-lino/8.jpg',
                  'assets/ropa/pantalones/pantalon-lino/9.jpg',
                  'assets/ropa/pantalones/pantalon-lino/10.jpg'
                ]
              }
  ];

  visibility: string = "";
  modalImage: string = "";
  currentPrendaIndex = 0;
  currentImageIndex = 0;

  public enableModal(prendaIndex: number, prenda: any){
    this.visibility = "show-modal";
    this.currentPrendaIndex = prendaIndex;
    this.modalImage = prenda.main;
  }

  public modalDisable(){
    this.visibility = "";
  }

  public previousImage(){
    const muestras = this.prenda[this.currentPrendaIndex].muestras

    this.currentImageIndex = (this.currentImageIndex - 1 + this.prenda.length) % muestras.length;
    this.modalImage = muestras[this.currentImageIndex]
  }

  public nextImage(){
    const muestras = this.prenda[this.currentPrendaIndex].muestras

    this.currentImageIndex = (this.currentImageIndex + 1) % muestras.length;
    this.modalImage = muestras[this.currentImageIndex]
  }
}
