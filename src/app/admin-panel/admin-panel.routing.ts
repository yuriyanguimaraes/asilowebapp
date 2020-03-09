//Import Modules
import { Routes } from "@angular/router"

//Import Components
import { DashboardComponent } from "./dashboard/dashboard.component"
import { FaqAdmninComponent } from "./faq-admnin/faq-admnin.component"

export const AdminPanelRoutes: Routes = [
    {
        path: 'admin', children: [
            { path: '', component: DashboardComponent },
            { path: 'faq', component: FaqAdmninComponent }
        ]
    }
]