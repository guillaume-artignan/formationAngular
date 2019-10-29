import { Component, OnInit, Input } from '@angular/core';
import { Article } from "./article.model";

@Component({
  selector: 'en3s-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input("monArticle")
  article : Article;

  votePour(evt){
    evt.preventDefault();
    this.article.voteUp();
  }

  voteContre(evt){
    evt.preventDefault();
    this.article.voteDown();
  }

  constructor() { }

  ngOnInit() {
  }

}
