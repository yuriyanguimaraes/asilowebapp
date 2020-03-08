//Import Modules
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"
import { SharedModule } from "./../shared/shared.module"
import { NgxPaginationModule } from "ngx-pagination"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { BsDropdownModule, TooltipModule, ModalModule } from "ngx-bootstrap"

//Import Components
import { HeaderComponent } from "./../web-components/admin-panel/header/header.component"
import { SidenavComponent } from "./../web-components/admin-panel/sidenav/sidenav.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { PortalTransparenciaComponent } from './portal-transparencia/portal-transparencia.component'

//Import Routes
import { AdminPanelRoutes } from "./admin-panel.routing";
import { SobreComponent } from './sobre/sobre.component'

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxPaginationModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        BrowserAnimationsModule,
        RouterModule.forChild(AdminPanelRoutes)
    ],
    declarations: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent,
        PortalTransparenciaComponent,
        SobreComponent
    ],
    exports: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent,
        PortalTransparenciaComponent,
        SobreComponent
    ]
})
export class AdminPanelModule { }