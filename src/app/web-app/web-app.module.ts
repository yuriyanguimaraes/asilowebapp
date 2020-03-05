//Import Modules
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

//Import Components
import { HeaderComponent } from "./../web-components/web-app/header/header.component"
import { FooterComponent } from "./../web-components/web-app/footer/footer.component"

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class WebAppModule { }