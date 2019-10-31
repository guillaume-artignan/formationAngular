import { AppComponent } from './app.component';
import { ScientifiquesComponent } from './scientifiques/scientifiques.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { ExempleNgContentComponent } from './exemple-ng-content/exemple-ng-content.component';
import { BasicRequestComponent } from './basic-request/basic-request.component';
import { RechercheYoutubeComponent } from './recherche-youtube/recherche-youtube.component';
import { TestDirectiveComponent } from './test-directive/test-directive.component';


export const ROUTES = [{path : "", component: CalculatriceComponent, nom: "Accueil"},
                   {path : "calculatrice", component: CalculatriceComponent, nom: "Ma Calculatrice"},
                   {path : "scientifiques", component: ScientifiquesComponent, nom: "Les Scientifiques" },
                   {path : "basic", component: BasicRequestComponent, nom: "Exemple de Requête" },
                   {path : "ngcontent", component: ExempleNgContentComponent, nom: "Ng Content" },
                   {path : "scientifiques/:nom", component: ScientifiquesComponent },
                   {path : "articles", component: AppComponent, nom: "Les Articles" },
                   {path : "youtube", component: RechercheYoutubeComponent, nom: "Recherche Youtube" },
                   {path : "directives", component: TestDirectiveComponent, nom: "Exemple Directives" },
                   {path : "**", redirectTo : ""}];