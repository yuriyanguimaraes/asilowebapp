//Import Modules
import { Routes } from "@angular/router"


//Import Components
import { DashboardComponent } from "./dashboard/dashboard.component"
import { FaqAdmninComponent } from "./faq-admnin/faq-admnin.component"
import { PortalTransparenciaComponent } from "./portal-transparencia/portal-transparencia.component"
import { SobreComponent } from "./sobre/sobre.component"
import { NoticiasComponent } from "./noticias/noticias.component"
import { ContatoAdminComponent } from "./contato/contato.component"
import { NovoTransparenciaComponent } from "./portal-transparencia/novo-transparencia/novo-transparencia.component"

export const AdminPanelRoutes: Routes = [
    {
        path: 'admin', children: [
            { path: '', component: DashboardComponent },
            { path: 'faq', component: FaqAdmninComponent },
            { path: 'dashboard', component: DashboardComponent },
            {
                path: 'transparencia', children: [
                    { path: '', component: PortalTransparenciaComponent },
                    { path: 'novo', component: NovoTransparenciaComponent }
                ]
            },
            { path: 'sobre', component: SobreComponent },
            { path: 'noticias', component: NoticiasComponent },
            { path: 'contato', component: ContatoAdminComponent },
            { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }
        ]
    }
]