//Import Modules
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"

//Import Components
import { HeaderComponent } from "./../web-components/admin-panel/header/header.component"
import { SidenavComponent } from "./../web-components/admin-panel/sidenav/sidenav.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { NoticiasComponent } from "./noticias/noticias.component"

//Import Routes
import { AdminPanelRoutes } from "./admin-panel.routing";
import { NgxPaginationModule } from "ngx-pagination";
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
    imports: [
        CommonModule,
        NgxPaginationModule,
        OrderModule,
        RouterModule.forChild(AdminPanelRoutes)
    ],
    declarations: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent,
        NoticiasComponent
    ],
    exports: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent,
        NoticiasComponent
    ]
})
export class AdminPanelModule { }