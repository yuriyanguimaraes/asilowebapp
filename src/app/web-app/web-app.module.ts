//Import Modules
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { AgmCoreModule } from '@agm/core'
import { LightboxModule } from "ngx-lightbox"
import { NgxPaginationModule } from "ngx-pagination"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BsDropdownModule, TooltipModule, ModalModule, CarouselModule } from 'ngx-bootstrap';

//Import Components
import { FAQComponent } from "./../web-app/faq/faq.component"
import { HomeComponent } from "./../web-app/home/home.component"
import { SobreComponent } from "./../web-app/sobre/sobre.component"
import { HeaderComponent } from "./../web-components/web-app/header/header.component"
import { FooterComponent } from "./../web-components/web-app/footer/footer.component"
import { NoDataComponent } from './../web-components/common/no-data/no-data.component'
import { DoacaoComponent } from "./../web-app/doacao/doacao.component"
import { LoadingComponent } from './../web-components/common/loading/loading.component'
import { ContatoComponent } from "./../web-app/contato/contato.component"
import { NoticiaComponent } from "./../web-app/noticia/noticia.component"
import { GalleryComponent } from "./../web-app/noticia/gallery/gallery.component"
import { CarouselComponent } from "./../web-app/home/carousel/carousel.component"
import { NoticiasComponent } from "./../web-app/noticias/noticias.component"
import { NoticiaCardComponent } from "./../web-app/noticias/noticia-card/noticia-card.component"
import { DocumentsCollapseComponent } from "./../web-app/portal-transparencia/documents-collapse/documents-collapse.component"
import { PortalTransparenciaComponent } from "./../web-app/portal-transparencia/portal-transparencia.component"

//Import Routes
import { WebAppRoutes } from "./web-app.routing"

//Import Pipes
import { DateAgoPipe } from "./../web-app/pipes/date-ago.pipe"

//Environment Variables
import { apiKeyGoogle } from "./../../environments/apiKeyGoogle"

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        LightboxModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        BrowserAnimationsModule,
        CarouselModule.forRoot(),
        BsDropdownModule.forRoot(),
        AgmCoreModule.forRoot({ apiKey: apiKeyGoogle }),
        RouterModule.forRoot(WebAppRoutes, { onSameUrlNavigation: 'reload' })
    ],
    declarations: [
        FAQComponent,
        HomeComponent,
        SobreComponent,
        HeaderComponent,
        FooterComponent,
        NoDataComponent,
        DoacaoComponent,
        LoadingComponent,
        ContatoComponent,
        NoticiaComponent,
        GalleryComponent,
        CarouselComponent,
        NoticiasComponent,
        NoticiaCardComponent,
        DocumentsCollapseComponent,
        PortalTransparenciaComponent,
        DateAgoPipe
    ],
    exports: [
        RouterModule,
        FAQComponent,
        HomeComponent,
        SobreComponent,
        HeaderComponent,
        FooterComponent,
        DoacaoComponent,
        ContatoComponent,
        NoticiaComponent,
        GalleryComponent,
        CarouselComponent,
        NoticiasComponent,
        NoticiaCardComponent,
        DocumentsCollapseComponent,
        PortalTransparenciaComponent
    ]
})
export class WebAppModule { }