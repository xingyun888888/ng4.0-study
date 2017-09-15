import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {ClickMeComponent} from "./click-me.component";

import {RouterModule, Route} from "@angular/router";

import {HeroesComponent} from "./heroes.component";

RouterModule.forRoot([
  {
    path:"heroes",
    component:HeroesComponent
  }
])


@NgModule({
  imports:      [ BrowserModule , RouterModule.forRoot([
    {
      path:"heroes",
      component:HeroesComponent
    }
  ])],
  declarations: [ AppComponent,ClickMeComponent,HeroesComponent ],
  bootstrap:    [ AppComponent ],
  providers:[]
})
export class AppModule { }
