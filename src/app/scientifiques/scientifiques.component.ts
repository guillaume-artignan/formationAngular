import { Component, OnInit } from '@angular/core';
import Personne from './personne.model';
import {CompteurService, DataService} from '../services';




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
			  private data : DataService) {
				  
    data.donneScientifiques().then(
      (donnees)=>{this.donneesChargees(donnees);}
    );

  }

  donneesChargees(data:Personne[]){
    this.personnes = data;
    this.personne = this.personnes[0];                               
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
