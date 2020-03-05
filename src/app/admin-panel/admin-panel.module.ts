//Import Modules
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

//Import Components
import { DashboardComponent } from "./dashboard/dashboard.component"

//Import Services

//Import Pipes

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class AdminPanelModule { }