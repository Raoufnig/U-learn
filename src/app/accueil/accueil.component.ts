import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../services/categories.service";
import {TrainingService} from "../Services/training.service";
import {Training} from "../models/training";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  loaded!: boolean;
  constructor( private categorieservice:CategoriesService, private trainingservice : TrainingService,private router:Router) { }
  items!:any;
  trainings:any;
  Ttrainings:Array<any>=new Array<any>();
  T!:Training;
  i!:number;
  formations!:any;
 result:Array<any>=new Array<any>();
 Tab:Array<any>=new Array<any>();
  ngOnInit(): void {
    this.getCategories();
    this.getTraining();
    console.log(this.Ttrainings);
    this.i=0;
    console.log(this.result)
    console.log(this.formations)
  }
  getTraining(){
    this.trainingservice.getTraining('http://127.0.0.1:8000/api/training/')
      .subscribe(
        items =>{
          this.trainings=items;
          this.formations=this.trainings.results;
          console.log(this.formations)
          // this.result.push(this.trainings.results);
          // this.Ttrainings.push(this.trainings);
          this.i=this.i+1;
        }
      )
  }

  toPage(obj:any){
    localStorage.setItem('formation',JSON.stringify(obj));
    this.router.navigate(['/detail-formation']);

  }
  getCategories(){
    this.loaded=false;
    this.categorieservice.getCategories('http://127.0.0.1:8000/api/categories/')
    .subscribe(
      items => {
        this.items=items;
        this.loaded=true;
      }
    );
  }
}
