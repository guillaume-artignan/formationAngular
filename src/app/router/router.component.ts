import { Component, OnInit } from '@angular/core';
import {ROUTES} from '../routes';

@Component({
  selector: 'app-root',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  routes = ROUTES;

  constructor() { }

  ngOnInit() {
  }

  filtre(routes){
    return routes.filter((d)=>{ return d.nom;})
  }

}
