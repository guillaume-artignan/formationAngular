import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { DataService } from './services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'en3s';

  titreArticle : string;
  edition : boolean = false;
  articleSelected : Article;
  interval;

  articles : Article[];
		
	constructor (private data : DataService){
   this.updateModel();
   this.interval = setInterval(() => {
     this.updateModel();
    },1000)
  }
  
  updateModel(){
    this.data.donneArticles().then((donnees)=>{
      var result : Article[] = new Array<Article>();
      donnees.forEach((d)=> {
          var a : Article = new Article(d.title,d.link,d.vote);
          a.uuid = d.uuid;
          result.push(a)})

      this.articles = result;
    })
  }
		

    ajouterArticle(champ){
      var a:Article = new Article(this.titreArticle,champ.value);
      this.data.ajouteArticle(a).then(()=>{
        this.updateModel();
      });
      

    }

    modifierArticle(){
      this.edition = false;
      this.articleSelected.setTitle(this.titreArticle);
      this.titreArticle = "";
    }

    supprime(evt){
      this.data.supprimeArticle(evt).then(()=>{
        this.updateModel();
      });

    }

    selectionArticle(evt){
      this.titreArticle = evt.titre;
      this.edition = true;
      this.articleSelected = evt;
    }
    
}
