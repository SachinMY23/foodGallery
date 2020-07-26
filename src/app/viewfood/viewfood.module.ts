import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllfoodComponent } from './allfood/allfood.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { FoodpageComponent } from './foodpage/foodpage.component';


@NgModule({
  declarations: [AllfoodComponent, ReviewComponent, FoodpageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'review',component:ReviewComponent},
      {path:'foodview',component:FoodpageComponent}

    ])
  ]
})
export class ViewfoodModule { }
