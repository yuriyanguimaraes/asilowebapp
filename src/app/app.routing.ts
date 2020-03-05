import { Routes } from "@angular/router"

//Import components
import { NoticiasComponent } from "./web-app/noticias/noticias.component"
import { NoticiaComponent } from "./web-app/noticia/noticia.component"
import { SobreComponent } from "./web-app/sobre/sobre.component"
import { ContatoComponent } from "./web-app/contato/contato.component"
import { FAQComponent } from './web-app/faq/faq.component'
import { HomeComponent } from "./web-app/home/home.component"
import { DoacaoComponent } from "./web-app/doacao/doacao.component"
import { PortalTransparenciaComponent } from "./web-app/portal-transparencia/portal-transparencia.component"
import { DashboardComponent } from "./admin-panel/dashboard/dashboard.component"
import { ContatoAdminComponent } from "./admin-panel/contato/contato.component"

export const ROUTES: Routes = [

    // Rotas WebApp
    { path: '', component: HomeComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'noticia/:title', component: NoticiaComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'faq', component: FAQComponent },
    { path: 'doacao', component: DoacaoComponent },
    { path: 'transparencia', component: PortalTransparenciaComponent },
    { path: 'transparencia/:categoria', component: PortalTransparenciaComponent },
    {
        path: 'admin', children: [
            { path: '', component: DashboardComponent },
            { path: 'contato', component: ContatoAdminComponent}
        ]
    }

    //Rotas administrativas - children routes
    //{path: 'admin', component:, children: [
    //    {},
    //    {}
    //]}
];
