import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  prenda = [
              {
                nombre: 'Polo Punto',
                category: 'remeras',
                main: 'assets/ropa/remeras/polo_punto/7.jpg',
                muestras: [
                  'assets/ropa/remeras/polo_punto/1.jpg',
                  'assets/ropa/remeras/polo_punto/2.jpg',
                  'assets/ropa/remeras/polo_punto/3.jpg',
                  'assets/ropa/remeras/polo_punto/4.jpg',
                  'assets/ropa/remeras/polo_punto/5.jpg',
                  'assets/ropa/remeras/polo_punto/6.jpg',
                  'assets/ropa/remeras/polo_punto/8.jpg',
                ],

                color: ['blanco', 'crema'],
                fit: 'regular',
                material: ['punto'],
                season: ['verano', 'primavera', 'otoño'],
                style: ['clean', 'minimal', 'elevado'],

                description:
                  'Polo de punto regular fit con estética limpia y minimalista. Aporta un look más adulto y prolijo sin verse formal. Muy buena para el día a día porque no llama demasiado la atención y combina fácilmente con lino, jeans oscuros y joggers limpios.',

                tags: [
                  'polo',
                  'clean',
                  'minimal',
                  'daily',
                  'premium'
                ],
              },
              {
                nombre: 'Pantalon Lino',
                category: 'pantalones',
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
                  'assets/ropa/pantalones/pantalon-lino/10.jpg',
                ],
                color: ['negro'],
                fit: 'relaxed',
                material: ['lino'],
                season: ['verano', 'primavera'],
                style: ['clean', 'elevado', 'minimal'],

                description:
                  'Pantalón relaxed fit 100% lino con caída fluida y estética minimalista. Muy versátil para verano y outfits más limpios. Combina especialmente bien con polos, tank tops, camisas abiertas y zapatillas claras o retro runners.',

                tags: [
                  'lino',
                  'verano',
                  'clean',
                  'minimal',
                  'relaxed'
                ]
              }
  ];

  visibility: string = "";
  modalImage: string = "";
  modalName: string = "";
  currentPrendaIndex = 0;
  currentImageIndex = 0;

  public enableModal(prendaIndex: number, prenda: any){
    this.visibility = "show-modal";
    this.currentPrendaIndex = prendaIndex;
    this.modalImage = prenda.main;
    this.modalName = prenda.nombre
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
