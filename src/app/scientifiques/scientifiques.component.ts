import { Component, OnInit } from '@angular/core';
import Personne from './personne.model';




@Component({
  selector: 'app-root',
  templateUrl: './scientifiques.component.html',
  styleUrls: ['./scientifiques.component.css']
})
export class ScientifiquesComponent implements OnInit {

  titre : string = "Mes scientifiques";
  personne : Personne = new Personne("Einstein","Albert","Relativité","Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sequi optio, dolores iure iusto ducimus enim, animi ipsum, quod nesciunt eveniet. Corporis exercitationem quas expedita ipsam earum facilis repellendus.");
  

  constructor() { }

  ngOnInit() {
  }

  clickSur(evt){
    console.log(evt);
  }

}
