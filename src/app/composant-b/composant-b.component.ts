import { Component, OnInit } from '@angular/core';
import { CompteurService } from '../services/compteur.service';

@Component({
  selector: 'ComposantB',
  templateUrl: './composant-b.component.html',
  styleUrls: ['./composant-b.component.css'],
  providers : []
})
export class ComposantBComponent implements OnInit {

  constructor(private compteur : CompteurService) { }

  ngOnInit() {
  }
  
  ajoute(){
	  this.compteur.ajouter();
  }

}
