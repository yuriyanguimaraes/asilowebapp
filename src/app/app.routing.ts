import { Routes } from "@angular/router"

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

]