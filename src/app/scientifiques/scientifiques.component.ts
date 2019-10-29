import { Component, OnInit } from '@angular/core';
import Personne from './personne.model';




@Component({
  selector: 'app-root',
  templateUrl: './scientifiques.component.html',
  styleUrls: ['./scientifiques.component.css']
})
export class ScientifiquesComponent implements OnInit {

  titre : string = "Mes scientifiques";
  
  personnes : Personne[] = new Array<Personne>(
                            new Personne("Einstein","Albert","Relativité","Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sequi optio, dolores iure iusto ducimus enim, animi ipsum, quod nesciunt eveniet. Corporis exercitationem quas expedita ipsam earum facilis repellendus."),
                            new Personne("Faraday","Michael","Champs Electro-magnetique","Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sequi optio, dolores iure iusto ducimus enim, animi ipsum, quod nesciunt eveniet. Corporis exercitationem quas expedita ipsam earum facilis repellendus."),
                            new Personne("Curie","Pierre","Radiactivité","Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sequi optio, dolores iure iusto ducimus enim, animi ipsum, quod nesciunt eveniet. Corporis exercitationem quas expedita ipsam earum facilis repellendus."),
                            new Personne("Curie","Marie","Radiactivité","Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sequi optio, dolores iure iusto ducimus enim, animi ipsum, quod nesciunt eveniet. Corporis exercitationem quas expedita ipsam earum facilis repellendus."),
                            );

	personne : Personne = this.personnes[0];
							
  constructor() {

  }
                       
  ngOnInit() {
  }

  clickSur(evt){
    console.log(evt);
  }

  selectionne(p){
    this.personne = p;
  }

}
