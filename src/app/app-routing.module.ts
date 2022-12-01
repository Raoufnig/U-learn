import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavComponent} from "./nav/nav.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {DetailFormationComponent} from "./detail-formation/detail-formation.component";
import {ListeFormationComponent} from "./liste-formation/liste-formation.component";
import {AllFormationsComponent} from "./all-formations/all-formations.component";

const routes: Routes = [
  {path:'nav',component:NavComponent},
  {path:'',component: AccueilComponent},
  {path:'detail-formation',component: DetailFormationComponent},
  {path:'liste-formation',component:ListeFormationComponent},
  {path:'all-formation',component:AllFormationsComponent},
  {path:'liste-formation/:id',component:ListeFormationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
