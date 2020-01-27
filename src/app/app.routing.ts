import { Routes } from "@angular/router"

//Import components
import { NoticiasComponent } from "./web-app/noticias/noticias.component"
import { HomeComponent } from "./web-app/home/home.component"

export const ROUTES: Routes = [

    // Rotas WebApp
    { path: 'noticias', component: NoticiasComponent },
    { path: '', component: HomeComponent }

    // Rotas administrativas - children routes
    //{path: 'admin', component:, children: [
    //    {},
    //    {}
    //]}

]