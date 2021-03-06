import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr'


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public id=this._route.snapshot.queryParams.id;
  public secret=this._route.snapshot.queryParams.secret;
  public farm=this._route.snapshot.queryParams.farm;
  public server=this._route.snapshot.queryParams.server;
  public title=this._route.snapshot.queryParams.title;
  public page=this._route.snapshot.queryParams.page;
  public rating:any;
  public name:any;

  constructor(public _route:ActivatedRoute,
    public route:Router,
    public toastr:ToastrService) { }

  ngOnInit(): void {
    console.log("id is :"+this.id)
    console.log("Scret is"+this.secret)
  }

  public goToView=()=>{
    this.toastr.success("Thank you for your review...")
    setTimeout(()=>{
    this.route.navigate(['/view'],{queryParams:{id:this.id,secret:this.secret,farm:this.farm,server:this.server,page:this.page,rating:this.rating}})},2000)
  }
  
}
