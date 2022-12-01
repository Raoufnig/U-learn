import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavComponent } from './nav/nav.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';
import { AccueilModule } from './accueil/accueil.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { AppNavBlackComponent } from './nav-black/app-nav-black.component';
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavComponent,
    DetailFormationComponent,
    ListeFormationComponent,
    AppNavBlackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccueilModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
