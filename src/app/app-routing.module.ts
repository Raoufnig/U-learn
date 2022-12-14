import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import {NavComponent} from './nav/nav.component';
import {AccueilComponent} from "./accueil/accueil.component";
import {DetailFormationComponent} from "./detail-formation/detail-formation.component";
import {ListeFormationComponent} from './liste-formation/liste-formation.component';
import {AllFormationsComponent} from "./all-formations/all-formations.component";

const routes: Routes = [
  {path:"profile" , component:ProfileComponent},
  {path:"login" , component:LoginComponent},
  {path:"registration" , component:RegistrationComponent},
  {path: "homepage", component:HomepageComponent},
  {path:'nav',component:NavComponent},
  {path:'',component: AccueilComponent},
  {path:'detail-formation',component: DetailFormationComponent},
  {path:'liste-formation',component:ListeFormationComponent},
  {path:'all-formation',component:AllFormationsComponent},
  {path:'liste-formation/:id',component:ListeFormationComponent},

  {path : "" ,
   redirectTo:"",
   pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [LoginComponent, RegistrationComponent, ProfileComponent, HomepageComponent]
