import { Component, OnInit, Input, Output, HostBinding } from '@angular/core';
import { Article } from "./article.model";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'en3s-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') val = "col-md-6 article";

  @Input("monArticle")
  article : Article;

  @Output()
  tooBad : EventEmitter<Article> = new EventEmitter<Article>();

  @Output()
  selected : EventEmitter<Article> = new EventEmitter<Article>();


  votePour(evt){
    evt.preventDefault();
    this.article.voteUp();

  }

  voteContre(evt){
    evt.preventDefault();
    this.article.voteDown();
    if (this.article.getVote()<=-10){
      this.tooBad.emit(this.article);
    }
  }

  titreClique(){
    this.selected.emit(this.article);

  }
  constructor() { }

  ngOnInit() {
  }

}
