//Import Modules
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { AgmCoreModule } from '@agm/core'
import { BsDropdownModule, TooltipModule, ModalModule, CarouselModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { NgxPaginationModule } from "ngx-pagination"
import { LightboxModule } from "ngx-lightbox"

//Import Components
import { HeaderComponent } from "./../web-components/web-app/header/header.component"
import { FooterComponent } from "./../web-components/web-app/footer/footer.component"
import { LoadingComponent } from './../web-components/common/loading/loading.component'
import { NoDataComponent } from './../web-components/common/no-data/no-data.component'
import { ContatoComponent } from "./../web-app/contato/contato.component"
import { DoacaoComponent } from "./../web-app/doacao/doacao.component"
import { FAQComponent } from "./../web-app/faq/faq.component"
import { HomeComponent } from "./../web-app/home/home.component"
import { CarouselComponent } from "./../web-app/home/carousel/carousel.component"
import { NoticiaComponent } from "./../web-app/noticia/noticia.component"
import { GalleryComponent } from "./../web-app/noticia/gallery/gallery.component"
import { NoticiaCardComponent } from "./../web-app/noticias/noticia-card/noticia-card.component"
import { NoticiasComponent } from "./../web-app/noticias/noticias.component"
import { PortalTransparenciaComponent } from "./../web-app/portal-transparencia/portal-transparencia.component"
import { DocumentsCollapseComponent } from "./../web-app/portal-transparencia/documents-collapse/documents-collapse.component"
import { SobreComponent } from "./../web-app/sobre/sobre.component"

//Pipes
import { DateAgoPipe } from "./../web-app/pipes/date-ago.pipe"

//Environment Variables
import { apiKeyGoogle } from "./../../environments/apiKeyGoogle"

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AgmCoreModule.forRoot({ apiKey: apiKeyGoogle }),
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        CarouselModule.forRoot(),
        NgxPaginationModule,
        LightboxModule,
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        LoadingComponent,
        NoDataComponent,
        ContatoComponent,
        DoacaoComponent,
        FAQComponent,
        HomeComponent,
        CarouselComponent,
        NoticiaComponent,
        GalleryComponent,
        NoticiaCardComponent,
        NoticiasComponent,
        PortalTransparenciaComponent,
        DocumentsCollapseComponent,
        SobreComponent,
        DateAgoPipe
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ContatoComponent,
        DoacaoComponent,
        FAQComponent,
        HomeComponent,
        CarouselComponent,
        NoticiaComponent,
        GalleryComponent,
        NoticiaCardComponent,
        NoticiasComponent,
        PortalTransparenciaComponent,
        DocumentsCollapseComponent,
        SobreComponent
    ]
})
export class WebAppModule { }