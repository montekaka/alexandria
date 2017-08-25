import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import {NgbModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { routing } from './app.routing';

/*Project components*/
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './list/items/items.component';
import { ItemComponent } from './list/item/item.component';
import { ListComponent } from './team/list/list.component';
import { HeroComponent } from './team/hero/hero.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ItemsComponent,
    ItemComponent,
    ListComponent,
    HeroComponent
  ],
  imports: [
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot(),
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
