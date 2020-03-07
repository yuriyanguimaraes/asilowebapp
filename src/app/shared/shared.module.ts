//Import Modules
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { LottieAnimationViewModule } from "ng-lottie"

//Import Components
import { LoadingComponent } from "./../web-components/common/loading/loading.component"
import { NoDataComponent } from "./../web-components/common/no-data/no-data.component"

@NgModule({
    imports: [
        CommonModule,
        LottieAnimationViewModule
    ],
    exports: [
        LoadingComponent,
        NoDataComponent
    ],
    declarations: [
        LoadingComponent,
        NoDataComponent
    ]
})
export class SharedModule { }