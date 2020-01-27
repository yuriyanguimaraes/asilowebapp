import { Routes } from "@angular/router"

//Import components
import { NoticiasComponent } from "./web-app/noticias/noticias.component"

export const ROUTES: Routes = [

    // Rotas WebApp
    { path: 'noticias', component: NoticiasComponent }

    // Rotas administrativas - children routes
    //{path: 'admin', component:, children: [
    //    {},
    //    {}
    //]}

]