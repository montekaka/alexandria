import { Component, OnInit } from '@angular/core';
import {NavbarServiceService } from './navbar-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers:[NavbarServiceService],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItems = [];
  isNavbarCollapsed: boolean;

  constructor(
    private navbarServiceService: NavbarServiceService
  ) {
    this.isNavbarCollapsed = true;
  }

  ngOnInit() {
    // console.log(this.navbarServiceService.getData());
    this.getNavItems();
  }

  getNavItems() {
    this.navbarServiceService.getData().subscribe((data) => {
      this.navItems = data;
    })
  }


  NavigatorUserMediabarCollapse(){
    if(this.isNavbarCollapsed === false){
      this.isNavbarCollapsed = true;
    }
  }
}
