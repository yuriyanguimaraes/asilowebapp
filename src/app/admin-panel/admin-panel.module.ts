//Import Modules
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Components
import { SidenavComponent } from "./../web-components/admin-panel/sidenav/sidenav.component"
import { HeaderComponent } from "./../web-components/admin-panel/header/header.component"
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContatoAdminComponent } from './contato/contato.component'

//Import Services
import { ContatoService } from './../web-app/services/contato.service';

//Import Pipes

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, 
        ReactiveFormsModule
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
        ContatoService
    ]
})
export class AdminPanelModule { }