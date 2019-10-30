import { Injectable } from '@angular/core';
import Personne from '../scientifiques/personne.model';
import { Article } from '../article/article.model';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
  
  articles : Article[] = [];
  
  donneScientifiques() : Promise<Personne[]> {
    return this.http.get<Personne[]>("http://92.222.69.104/personnes/all")
      .toPromise();
  }
  
  donneArticles() : Promise<any> {
    return this.http.get<any>("http://92.222.69.104/article/all").toPromise();
  }
  
  ajouteArticle(a : Article) : Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
   
    return this.http.post(
          "http://92.222.69.104/article/",
          JSON.stringify(a),
          httpOptions
        ).toPromise();
  }
  
  supprimeArticle(a : Article) : Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
   
    return this.http.post(
          "http://92.222.69.104/article/delete",
          JSON.stringify(a),
          httpOptions
        ).toPromise();
  }
  
  
}
