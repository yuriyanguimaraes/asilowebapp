//Import Modules
import { Routes } from "@angular/router"

//Import Components
import { DashboardComponent } from "./dashboard/dashboard.component"
import { NoticiasComponent } from "./noticias/noticias.component"

export const AdminPanelRoutes: Routes = [
    {
        path: 'admin', children: [
            { path: '', component: DashboardComponent },
            { path: 'noticias', component: NoticiasComponent}
        ]
    }
]