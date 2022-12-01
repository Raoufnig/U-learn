import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent implements OnInit {

  constructor() { }
  training!:any;
  ngOnInit(): void {
    const retrieve=localStorage.getItem('formation');
    // @ts-ignore
    this.training=JSON.parse(retrieve);
    console.log(this.training);
  }

}
