//Import Modules
import { Routes } from "@angular/router"


//Import Components
import { DashboardComponent } from "./dashboard/dashboard.component"
import { FaqAdmninComponent } from "./faq-admnin/faq-admnin.component"
import { PortalTransparenciaComponent } from "./portal-transparencia/portal-transparencia.component"
import { SobreComponent } from "./sobre/sobre.component"
import { NoticiasComponent } from "./noticias/noticias.component"
import { ContatoAdminComponent } from "./contato/contato.component"
import { CreateFaqComponent } from "./faq-admnin/create-faq/create-faq.component"

export const AdminPanelRoutes: Routes = [
    {
        path: 'admin', children: [
            { path: '', component: DashboardComponent },
            { path: 'faq', children:[
                { path: '', component: FaqAdmninComponent },
                { path: 'create', component: CreateFaqComponent }
            ]},
            { path: 'dashboard', component: DashboardComponent },
            { path: 'transparencia', component: PortalTransparenciaComponent},
            { path: 'sobre', component: SobreComponent },
            { path: 'noticias', component: NoticiasComponent },
            { path: 'contato', component: ContatoAdminComponent },
            { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }
        ]
    }
]