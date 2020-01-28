import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { routing } from './app.routing';
import { HomeTestComponent } from './home-test/home-test.component';
import { HeaderComponent } from './web-components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeTestComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
