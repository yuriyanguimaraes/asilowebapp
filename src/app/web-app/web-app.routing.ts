//Import Modules
import { Routes } from "@angular/router"

//Import Components
import { FAQComponent } from "./faq/faq.component"
import { HomeComponent } from "./home/home.component"
import { SobreComponent } from "./sobre/sobre.component"
import { DoacaoComponent } from "./doacao/doacao.component"
import { NoticiaComponent } from "./noticia/noticia.component"
import { ContatoComponent } from "./contato/contato.component"
import { NoticiasComponent } from "./noticias/noticias.component"
import { PortalTransparenciaComponent } from "./portal-transparencia/portal-transparencia.component"

export const WebAppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'faq', component: FAQComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'doacao', component: DoacaoComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'noticia/:title', component: NoticiaComponent },
    { path: 'transparencia', component: PortalTransparenciaComponent },
]
