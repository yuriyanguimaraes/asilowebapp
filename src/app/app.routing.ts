import { Routes, RouterModule } from "@angular/router"
import { ContatoComponent } from "./contato/contato.component"
import { ModuleWithProviders } from "@angular/core";
import { HomeTestComponent } from "./home-test/home-test.component";

export const ROUTES: Routes = [

    // Rotas WebApp

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