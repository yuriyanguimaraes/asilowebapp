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
import { NoticiaCardComponent } from './web-app/noticias/noticia-card/noticia-card.component';
import { SobreComponent } from './web-app/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoticiasComponent,
    NoticiaCardComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    NoticiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
