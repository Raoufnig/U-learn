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
import { AllFormationsComponent } from './all-formations/all-formations.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './services/auth-interceptor.service';
import { FooterComponent } from './footer/footer.component';
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavComponent,
    DetailFormationComponent,
    ListeFormationComponent,
    AppNavBlackComponent,
    AllFormationsComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    HomepageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccueilModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
