import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllfoodComponent } from './allfood/allfood.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [AllfoodComponent, ReviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'review',component:ReviewComponent}
    ])
  ]
})
export class ViewfoodModule { }
