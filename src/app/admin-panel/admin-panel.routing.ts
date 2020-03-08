//Import Modules
import { Routes } from "@angular/router"

//Import Components
import { DashboardComponent } from "./dashboard/dashboard.component"
import { ContatoAdminComponent } from "./contato/contato.component"

export const AdminPanelRoutes: Routes = [
    {
        path: 'admin', children: [
            { path: '', component: DashboardComponent },
            { path: 'contato', component: ContatoAdminComponent}
        ]
    }
]