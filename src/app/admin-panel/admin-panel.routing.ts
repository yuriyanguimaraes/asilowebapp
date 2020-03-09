//Import Modules
import { Routes } from "@angular/router"

//Import Components
import { DashboardComponent } from "./dashboard/dashboard.component"
import { PortalTransparenciaComponent } from "./portal-transparencia/portal-transparencia.component"
import { SobreComponent } from "./sobre/sobre.component"
import { NoticiasComponent } from "./noticias/noticias.component"

export const AdminPanelRoutes: Routes = [
    {
        path: 'admin', children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'transparencia', component: PortalTransparenciaComponent },
            { path: 'sobre', component: SobreComponent },
            { path: 'noticias', component: NoticiasComponent },
            { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }
        ]
    }
]