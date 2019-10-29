import { Component } from '@angular/core';
import { Article } from './article/article.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'en3s';

  titreArticle : string;


  articles : Article[] = [
        new Article("Angular","http://angular.io"),
        new Article("Google","http://google.fr")];

    ajouterArticle(champ){
      var a:Article = new Article(this.titreArticle,champ.value);
      this.articles.push(a);

    }
}
