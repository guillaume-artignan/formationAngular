import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

function monValidateur1(control : FormControl) : {[s:string] : string} {
    if (!control.value.match(/^123/)){
        return {"erreur123":"Ne commence pas par 123"};
    }
}

function monValidateur2(control : FormControl) : {[s:string] : string}  {
  if (control.value.match(/[!@#$%^&*(),.?":{}|<>]/g)){
      return {"speciaux":"Contient des caractères spéciaux"};
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './exemple-formulaire.component.html',
  styleUrls: ['./exemple-formulaire.component.css']
})
export class ExempleFormulaireComponent implements OnInit {

  monFormulaire : FormGroup;
  champNom : AbstractControl;
  champPrenom : AbstractControl;

  constructor(fb : FormBuilder) {
    var typique = Validators.compose([Validators.required, monValidateur1,monValidateur2]) 
    this.monFormulaire = fb.group({
      "nomDeFamille" : ["",typique],
      "prénom" : ["",Validators.compose([ monValidateur1,monValidateur2])]
    })

    this.champNom = this.monFormulaire.controls["nomDeFamille"]; 
    this.champPrenom = this.monFormulaire.controls["prénom"]; 
  }

  cles(obj){
    return Object.keys(obj);
  }

  ngOnInit() {
  }

  valider(values){
    
    console.log(values);
  }

}
