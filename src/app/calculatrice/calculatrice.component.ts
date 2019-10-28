import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {

  resultat : string = "";

  constructor() { }

  ngOnInit() {
  }

  select(evt){
    if (this.resultat=="Erreur"){
      this.resultat="";  
    }
    this.resultat += evt.target.innerText;
  }

  egal(){
    try{
      this.resultat = eval(this.resultat);
    }catch (e){
      this.resultat = "Erreur";
    }
    
  }

  changement(evt){
    console.log(evt);
  }

  nettoyer(){
    this.resultat = "";
  }

}
