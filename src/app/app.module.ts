//Import Modules
import { NgModule } from '@angular/core'
import { HttpModule } from "@angular/http"
import { WebAppModule } from "./web-app/web-app.module"
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from "@angular/common/http"
import { AdminPanelModule } from "./admin-panel/admin-panel.module"

//Import Components
import { AppComponent } from './app.component'

//Import Services
import { SobreService } from './web-app/services/sobre.service'
import { NoticiaService } from "./web-app/services/noticia.service"
import { ContatoService } from './web-app/services/contato.service'
import { NoticiasService } from "./web-app/services/noticias.service"
import { TransparenciaService } from "./web-app/services/transparencia.service"
import { TransparenciaAdminService } from "./admin-panel/services/transparencia.service"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    WebAppModule,
    BrowserModule,
    HttpClientModule,
    AdminPanelModule
  ],
  providers: [
    SobreService,
    ContatoService,
    NoticiaService,
    NoticiasService,
    TransparenciaService,
    TransparenciaAdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }