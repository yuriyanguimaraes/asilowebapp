import { ContatoAdminService } from './services/contato-admin.service';
//Import Modules
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

//Import Components
import { SidenavComponent } from "./../web-components/admin-panel/sidenav/sidenav.component"
import { HeaderComponent } from "./../web-components/admin-panel/header/header.component"
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContatoAdminComponent } from './contato/contato.component'

//Import Services

//Import Pipes

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        DashboardComponent,
        SidenavComponent,
        HeaderComponent,
        ContatoAdminComponent
    ],
    exports: [
        DashboardComponent,
        SidenavComponent,
        HeaderComponent,
        ContatoAdminComponent
    ],
    providers: [
        ContatoAdminService
    ]
})
export class AdminPanelModule { }