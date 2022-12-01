import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../services/categories.service';
import {Router} from "@angular/router";
import {Categories} from '../models/categories';

@Component({
  selector: 'app-all-formations',
  templateUrl: './all-formations.component.html',
  styleUrls: ['./all-formations.component.css']
})
export class AllFormationsComponent implements OnInit {


  constructor(private categorieservice: CategoriesService,private router:Router) { }
  Tformation:any;
  categorie= new Categories();
  items:any;
  ngOnInit(): void {
    const a=localStorage.getItem('categorie');
    // @ts-ignore
    this.categorie=JSON.parse(a);
    this.getCategories();
  }
  getCategories(){
    this.categorieservice.getCategories('http://127.0.0.1:8000/api/training/')
      .subscribe(
          (items: any) => {
          this.items=items;
          this.Tformation=this.items.results;
          console.log(this.Tformation);
          // @ts-ignore
        }
      );
  }
  toPage(obj:any){
    localStorage.setItem('formation',JSON.stringify(obj));
    this.router.navigate(['/detail-formation']);

  }
}
