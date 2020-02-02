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


//Services
import { NoticiasService } from "./web-app/services/noticias.service";
import { NoticiaService } from "./web-app/services/noticia.service"
import { SobreService } from './web-app/services/sobre.service';

//Pipes
import { DateAgoPipe } from "./web-app/pipes/date-ago.pipe";
import { PortalTransparenciaComponent } from './web-app/portal-transparencia/portal-transparencia.component';


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

    //Pipes
    DateAgoPipe,

    PortalTransparenciaComponent
  ],
  imports: [
    //Modules
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAaqMUl8rdJBCXFuikA_nxaMIIfmq4Orx8' }),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    //Services
    NoticiasService,
    NoticiaService,
    SobreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }