import { Injectable, Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {HomeServiceService } from './shared/service/home-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers:[HomeServiceService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heros = [];
  header;
  subtitle;

  constructor(
    private homeServiceService: HomeServiceService
  ) { }

  ngOnInit() {
    this.getNavItems();
    this.getPageInfo();

  }

  getNavItems() {
    this.homeServiceService.getHeros().subscribe((data) => {
      this.heros = data;
    })
  }

  getPageInfo(){
    this.homeServiceService.getLanding().subscribe((data) => {
      this.header = data.header;
      this.subtitle = data.subtitle
    })

  }

}
