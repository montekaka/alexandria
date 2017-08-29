import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ItemsServiceService } from '../shared/service/items-service.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  providers: [ItemsServiceService],
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  id: string;
  reports;
  report_items = [];
  title: string;

  constructor(
    private route: ActivatedRoute,
    private itemsServiceService: ItemsServiceService
  ) {
    this.getURLParameter();

  }

  ngOnInit() {

    // this.getReports(this.id);
  }

  getURLParameter(){
    this.route.params.subscribe(params => {
       this.id = params['id'];
       this.getReports(params['id']);
       // In a real app: dispatch action to load the details here.
    });
  }

  getReports(id:string){
    this.itemsServiceService.getReports().subscribe((data) => {

      for(var i = 0; i < data.length; i++){
        if(data[i].id === id){
          this.reports = data[i];
          this.title = this.reports.title;
          this.report_items = this.reports.report_items;
        }
      }
    });
  }
}
