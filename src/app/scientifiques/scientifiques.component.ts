import { Component, OnInit } from '@angular/core';
import Personne from './personne.model';
import {CompteurService, DataService} from '../services';
import {ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './scientifiques.component.html',
  styleUrls: ['./scientifiques.component.css'],
  providers: [CompteurService]
})
export class ScientifiquesComponent implements OnInit {

  titre : string = "Mes scientifiques";
  
  personnes : Personne[] = [];

  personne : Personne = new Personne("","","","");
							
  constructor(private compteur : CompteurService, 
			  private data : DataService, private route : ActivatedRoute) {
          
    
    data.donneScientifiques().then(
      (donnees)=>{this.donneesChargees(donnees);}
    );

  }

  donneesChargees(data:Personne[]){
    var nom = this.route.snapshot.params.nom;
    this.personnes = data;
    this.personne = this.personnes[0];
    this.personnes.forEach((personne)=>{
      if (personne.nom==nom){
        this.personne = personne;
      }
    })


                                   
  }
                       
  ngOnInit() {
  }

  clickSur(evt){
    this.compteur.ajouter();
	
  }

  selectionne(p){
    this.personne = p;
  }

}
