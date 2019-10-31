import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-root',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  routes = AppModule.routes;

  constructor() { }

  ngOnInit() {
  }

  filtre(routes){
    return routes.filter((d)=>{ return d.nom;})
  }

}
