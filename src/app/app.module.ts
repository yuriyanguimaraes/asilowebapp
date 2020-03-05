//Modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, PreloadAllModules } from "@angular/router"
import { HttpModule } from "@angular/http"
import { HttpClientModule } from "@angular/common/http"
import { AdminPanelModule } from "./admin-panel/admin-panel.module"
import { WebAppModule } from "./web-app/web-app.module"

//Routes
import { ROUTES } from "./app.routing"

//Components
import { AppComponent } from './app.component'

//Services
import { NoticiasService } from "./web-app/services/noticias.service"
import { NoticiaService } from "./web-app/services/noticia.service"
import { SobreService } from './web-app/services/sobre.service'
import { TransparenciaService } from "./web-app/services/transparencia.service"
import { ContatoService } from './web-app/services/contato.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Modules
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' }),
    AdminPanelModule,
    WebAppModule
  ],
  providers: [
    //Services
    NoticiasService,
    NoticiaService,
    SobreService,
    TransparenciaService,
    ContatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }