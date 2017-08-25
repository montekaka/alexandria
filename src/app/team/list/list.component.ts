import { Injectable, Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {TeamServiceService } from '../shared/service/team-service.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers:[TeamServiceService],
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  heros = [];

  constructor(
    private teamServiceService: TeamServiceService
  ) { }

  ngOnInit() {
    this.geHeroes();
  }

  geHeroes() {
    this.teamServiceService.getHeros().subscribe((data) => {
      this.heros = data;
    })
  }

}
