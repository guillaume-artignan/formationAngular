import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './basic-request.component.html',
  styleUrls: ['./basic-request.component.css']
})
export class BasicRequestComponent implements OnInit {

  data;
  
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  donneesChargees(donnees){
    this.data = donnees;
  }
  
  vaChercher(){
    this.data="LOADING";
    this.http.get("http://92.222.69.104/personnes/all")
      .subscribe((reponse)=>{
        this.donneesChargees(reponse);
      });
  }

}
