import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AccueilRoutingModule } from './accueil-routing.module';
import {CategoriesService} from "../services/categories.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    HttpClientModule
  ],
  providers:[CategoriesService]
})
export class AccueilModule { }
