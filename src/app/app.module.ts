import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { routing } from './app.routing';
import { HomeTestComponent } from './home-test/home-test.component';
import { HeaderComponent } from './web-components/header/header.component';
import { FooterComponent } from './web-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeTestComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
