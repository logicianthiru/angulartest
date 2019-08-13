import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  favourite: boolean = false;
  countries: boolean = false;
  recommended: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
