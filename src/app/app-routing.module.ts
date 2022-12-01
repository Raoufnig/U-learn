import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { RegistrationComponent } from './Pages/registration/registration.component';

const routes: Routes = [
  {path:"profile" , component:ProfileComponent},
  {path:"login" , component:LoginComponent},
  {path:"registration" , component:RegistrationComponent},
  {path: "homepage", component:HomepageComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ RegistrationComponent, ProfileComponent, HomepageComponent]