import { Routes } from "@angular/router"

//Import components
import { AppComponent } from "./app.component"
import { NoticiasComponent } from "./web-app/noticias/noticias.component"

export const ROUTES: Routes = [

    // Rotas WebApp
    { path: 'home', component: AppComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'noticias', component: NoticiasComponent }

    // Rotas administrativas - children routes
    //{path: 'admin', component:, children: [
    //    {},
    //    {}
    //]}

]