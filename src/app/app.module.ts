import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ScientifiquesComponent } from './scientifiques/scientifiques.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';

@NgModule({
  //Contient des composants
  declarations: [
    AppComponent,
    ArticleComponent,
    ScientifiquesComponent,
    CalculatriceComponent
  ],
  //Contient des Modules
  imports: [
    BrowserModule, 
    FormsModule
  ],
  //Contient les services
  providers: [],
  //La classe de démarrage
  bootstrap: [AppComponent]
})
export class AppModule { }
