import { Injectable, Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {HomeServiceService } from './shared/service/home-service.service'
import {ItemsServiceService } from './../list/shared/service/items-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers:[HomeServiceService,
    ItemsServiceService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heros = [];
  header;
  subtitle;
  reportCategories = [];

  constructor(
    private homeServiceService: HomeServiceService,
    private itemsServiceService: ItemsServiceService,
  ) { }

  ngOnInit() {
    this.getNavItems();
    this.getPageInfo();
    this.getReportCategory();
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

  getReportCategory(){
    this.itemsServiceService.getReports().subscribe((data) => {
      this.reportCategories = data;
    });
  }

  reportsJoin(reports){
    var report_names = []
    for(var i = 0; i < reports.length; i++){
      report_names.push(reports[i].name);
    }
    return report_names.join(", ")
  }

}
