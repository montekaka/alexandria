import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ItemsComponent} from './list/items/items.component';
import { ListComponent} from './team/list/list.component';

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
    path:'reports/:id',
    component: ItemsComponent
  },{
    path:'team',
    component: ListComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
