import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavorisService } from 'src/app/Services/favoris.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 obj :any;
  constructor(private favoris: FavorisService, private router: Router) { }

  ngOnInit(): void {
    this.obj = this.favoris.getAllFav();
  }
  toPage(obj1:any){
    localStorage.setItem('formation',JSON.stringify(obj1));
    this.router.navigate(['/detail-formation']);

  }

}
