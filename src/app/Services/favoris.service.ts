import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor() { }
  fav =new Set();

  addTofav(course:any){
    
    this.fav.add(course);
  }

  getAllFav(){
    return this.fav;
  }
}
