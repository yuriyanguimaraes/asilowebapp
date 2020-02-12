//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from "@angular/router"
import { HttpModule } from "@angular/http"
import { HttpClientModule } from "@angular/common/http"
import { AgmCoreModule } from '@agm/core'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { NgxPaginationModule } from "ngx-pagination"

//Routes
import { ROUTES } from "./app.routing"

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './web-components/header/header.component';
import { FooterComponent } from './web-components/footer/footer.component';
import { NoticiasComponent } from './web-app/noticias/noticias.component';
import { NoticiaCardComponent } from './web-app/noticias/noticia-card/noticia-card.component'
import { NoticiaComponent } from './web-app/noticia/noticia.component'
import { SobreComponent } from './web-app/sobre/sobre.component';
import { ContatoComponent } from './web-app/contato/contato.component';
import { FAQComponent } from './web-app/faq/faq.component'
import { HomeComponent } from './web-app/home/home.component'
import { CarouselComponent } from './web-app/home/carousel/carousel.component';
import { DoacaoComponent } from './web-app/doacao/doacao.component';
import { PortalTransparenciaComponent } from './web-app/portal-transparencia/portal-transparencia.component';
import { DocumentsCollapseComponent } from './web-app/portal-transparencia/documents-collapse/documents-collapse.component';
import { LoadingComponent } from './web-components/loading/loading.component';
import { NoDataComponent } from './web-components/no-data/no-data.component';

//Services
import { NoticiasService } from "./web-app/services/noticias.service";
import { NoticiaService } from "./web-app/services/noticia.service"
import { SobreService } from './web-app/services/sobre.service';
import { TransparenciaService } from "./web-app/services/transparencia.service"

//Pipes
import { DateAgoPipe } from "./web-app/pipes/date-ago.pipe";

@NgModule({
  declarations: [
    //Components
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent,
    NoticiaCardComponent,
    NoticiaComponent,
    SobreComponent,
    ContatoComponent,
    FAQComponent,
    HomeComponent,
    CarouselComponent,
    PortalTransparenciaComponent,
    DocumentsCollapseComponent,
    LoadingComponent,
    NoDataComponent,

    //Pipes
    DateAgoPipe,

    DoacaoComponent
  ],
  imports: [
    //Modules
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' }),
    AgmCoreModule.forRoot({ apiKey: process.env.API_KEY_GOOGLE }),
    // necessita proteger esta apiKey,via BD?
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    //Services
    NoticiasService,
    NoticiaService,
    SobreService,
    TransparenciaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }