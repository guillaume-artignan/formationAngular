import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'en3s-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  votes : number = 0;
  titre : string = "Angular";
  domaine : string= "Angular.io"

  votePour(evt){
    evt.preventDefault();
    this.votes++;
  }

  voteContre(evt){
    evt.preventDefault();
    this.votes--;
  }

  constructor() { }

  ngOnInit() {
  }

}
