import { Routes, RouterModule } from "@angular/router"
import { AppComponent } from "./app.component"
import { ContatoComponent } from "./contato/contato.component"
import { ModuleWithProviders } from "@angular/core";

export const ROUTES: Routes = [

    // Rotas WebApp

    // Rotas administrativas - children routes
    //{path: 'admin', component:, children: [
    //    {},
    //    {}
    //]}

    // CONTATO ROUTES
    { path: '', component: AppComponent},
    { path: 'contato', component: ContatoComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);