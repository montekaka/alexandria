import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: '',
      component: HomeComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
