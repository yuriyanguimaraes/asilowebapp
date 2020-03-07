//Import Modules
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"

//Import Components
import { HeaderComponent } from "./../web-components/admin-panel/header/header.component"
import { SidenavComponent } from "./../web-components/admin-panel/sidenav/sidenav.component"
import { DashboardComponent } from "./dashboard/dashboard.component"

//Import Routes
import { AdminPanelRoutes } from "./admin-panel.routing"

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminPanelRoutes)
    ],
    declarations: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent
    ],
    exports: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent
    ]
})
export class AdminPanelModule { }