import { Routes, RouterModule } from "@angular/router"
import { ContatoComponent } from "./contato/contato.component"
import { ModuleWithProviders } from "@angular/core";
import { HomeTestComponent } from "./home-test/home-test.component";

//Import components
import { NoticiasComponent } from "./web-app/noticias/noticias.component"
import { NoticiaComponent } from "./web-app/noticia/noticia.component"
import { SobreComponent } from "./web-app/sobre/sobre.component"

export const ROUTES: Routes = [

    // Rotas WebApp
    { path: 'noticias', component: NoticiasComponent },
    { path: 'noticia/:title', component: NoticiaComponent },
    { path: 'sobre', component: SobreComponent }

    // Rotas administrativas - children routes
    //{path: 'admin', component:, children: [
    //    {},
    //    {}
    //]}

    // CONTATO ROUTES
    { path: '', component: HomeTestComponent }, //somente pora teste
    { path: 'home', component: HomeTestComponent }, //somente para teste
    { path: 'contato', component: ContatoComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);