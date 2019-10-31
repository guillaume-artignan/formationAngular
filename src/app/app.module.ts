import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ScientifiquesComponent } from './scientifiques/scientifiques.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { ExempleNgContentComponent } from './exemple-ng-content/exemple-ng-content.component';
import { ComposantAComponent } from './composant-a/composant-a.component';
import { ExempleFormulaireComponent } from './exemple-formulaire/exemple-formulaire.component';
import { ComposantBComponent } from './composant-b/composant-b.component';
import { CompteurService, DataService } from './services';
import { BasicRequestComponent } from './basic-request/basic-request.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterComponent } from './router/router.component';
import { RechercheYoutubeComponent } from './recherche-youtube/recherche-youtube.component';
import { VideoComponent } from './video/video.component';
import { RepeatDirective } from './repeat.directive';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
import { ToggleDirective } from './toggle.directive';
import {ROUTES} from './routes';




@NgModule({
  //Contient des composants
  declarations: [
    AppComponent,
    ArticleComponent,
    ScientifiquesComponent,
    CalculatriceComponent,
    ExempleNgContentComponent,
    ComposantAComponent,
    ExempleFormulaireComponent,
    ComposantBComponent,
    BasicRequestComponent,
    RouterComponent,
    RechercheYoutubeComponent,
    VideoComponent,
    RepeatDirective,
    TestDirectiveComponent,
    ToggleDirective
  ],
  //Contient des Modules
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  	HttpClientModule
  ],
  //Contient les services
  providers: [CompteurService, DataService],
  //La classe de démarrage
  bootstrap: [RouterComponent]
})
export class AppModule { 

  

}
