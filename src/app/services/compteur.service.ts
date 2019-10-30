import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {

  compteur : number = 0;
  
  
  constructor() { }
  
  ajouter(nb : number = 1) : void {
	  this.compteur+=nb;
  }
  
  donne() : number {
	  return this.compteur;
  }
}
