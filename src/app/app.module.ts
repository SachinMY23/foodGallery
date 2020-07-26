import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AllfoodComponent } from './viewfood/allfood/allfood.component';
import { AppService } from './app.service';
import { ReviewComponent } from './viewfood/review/review.component';
import { ViewfoodModule } from './viewfood/viewfood.module';
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    ViewfoodModule,
    RouterModule.forRoot([
      {path:'view',component:AllfoodComponent},
      {path:'',redirectTo:'view',pathMatch:'full'},
      {path:'*',component:AllfoodComponent},
      {path:'**',component:AllfoodComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
