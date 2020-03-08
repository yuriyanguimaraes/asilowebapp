//Import Modules
import { Routes } from "@angular/router"

//Import Components
import { DashboardComponent } from "./dashboard/dashboard.component"
import { PortalTransparenciaComponent } from "./portal-transparencia/portal-transparencia.component"

export const AdminPanelRoutes: Routes = [
    {
        path: 'admin', children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'transparencia', component: PortalTransparenciaComponent },
            { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }
        ]
    }
]