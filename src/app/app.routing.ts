import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ItemsComponent} from './list/items/items.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: '',
      component: HomeComponent
  },
  {
    path:'reports/:name',
    component: ItemsComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
