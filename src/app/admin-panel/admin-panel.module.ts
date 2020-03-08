//Import Modules
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"
import { SharedModule } from "./../shared/shared.module"
import { NgxPaginationModule } from "ngx-pagination"

//Import Components
import { HeaderComponent } from "./../web-components/admin-panel/header/header.component"
import { SidenavComponent } from "./../web-components/admin-panel/sidenav/sidenav.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { PortalTransparenciaComponent } from './portal-transparencia/portal-transparencia.component'

//Import Routes
import { AdminPanelRoutes } from "./admin-panel.routing";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxPaginationModule,
        RouterModule.forChild(AdminPanelRoutes)
    ],
    declarations: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent,
        PortalTransparenciaComponent
    ],
    exports: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent,
        PortalTransparenciaComponent
    ]
})
export class AdminPanelModule { }