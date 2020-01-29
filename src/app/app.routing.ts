import {ModuleWithProviders} from '@angular/core'
import { Routes, RouterModule } from "@angular/router"

import {FAQComponent} from './faq/faq.component'

const ROUTES: Routes = [

    {path: 'faq', component: FAQComponent}

    // Rotas WebApp

    //Rotas administrativas - children routes
    //{path: 'admin', component:, children: [
    //    {},
    //    {}
    //]}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);