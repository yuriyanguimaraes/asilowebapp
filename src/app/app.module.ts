import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from "@angular/router"
import { HttpModule } from "@angular/http"
import { HttpClientModule } from "@angular/common/http"

//Routes
import { ROUTES } from "./app.routing"

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './web-components/header/header.component';
import { FooterComponent } from './web-components/footer/footer.component';
import { NoticiasComponent } from './web-app/noticias/noticias.component';

//Services
import { NoticiasService } from "./web-app/services/noticias.service";
import { NoticiaCardComponent } from './web-app/noticias/noticia-card/noticia-card.component'

//Pipes
import { DateAgoPipe } from "./web-app/pipes/date-ago.pipe"

@NgModule({
  declarations: [
    //Components
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent,
    NoticiaCardComponent,

    //Pipes
    DateAgoPipe
  ],
  imports: [
    //Modules
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    //Services
    NoticiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
