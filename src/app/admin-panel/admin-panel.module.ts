//Import Modules
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common"
import { SharedModule } from "./../shared/shared.module"

//Import Components
import { HeaderComponent } from "./../web-components/admin-panel/header/header.component"
import { SidenavComponent } from "./../web-components/admin-panel/sidenav/sidenav.component"
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContatoAdminComponent } from './contato/contato.component'

//Import Services
import { ContatoService } from './../web-app/services/contato.service';

//Import Pipes

//Import Routes
import { AdminPanelRoutes } from "./admin-panel.routing"

@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(AdminPanelRoutes)
    ],
    declarations: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent,
        ContatoAdminComponent
    ],
    exports: [
        HeaderComponent,
        SidenavComponent,
        DashboardComponent,
        ContatoAdminComponent
    ],
    providers: [
        ContatoService
    ]
})
export class AdminPanelModule { }