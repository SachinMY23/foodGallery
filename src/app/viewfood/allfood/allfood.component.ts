import { Component, OnInit } from '@angular/core';
import {AppService} from './../../app.service';
import {ToastrService} from 'ngx-toastr'
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-allfood',
  templateUrl: './allfood.component.html',
  styleUrls: ['./allfood.component.css']
})
export class AllfoodComponent implements OnInit {
  
  public allPhotos:any;
  public pageNo=1;
  public id=this._route.snapshot.queryParams.id;
  public rating=this._route.snapshot.queryParams.rating;
  public currentpage:any;
  public nextButton=true;

  constructor(public appService:AppService,
    public toastr:ToastrService,
    public route:Router,
    public _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentpage=this._route.snapshot.queryParams.page;
    console.log("current Page number is"+this.currentpage);

    if(this.currentpage>0){
      this.goToCurrentPage();
    }else{
    this.getAllFoods();
    }
  }
  
  public getAllFoods:any=()=>{
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
      this.pageNo=apiResponse.photos.page;
      console.log("Page is"+this.pageNo)
    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }

  public goToPage1=()=>{
    this.nextButton=true;
    this.pageNo=1;
    this.currentpage=1;
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
      this.pageNo=apiResponse.photos.page;

    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }

  public goToPage2=()=>{
    this.nextButton=true;
    this.pageNo=2;
    this.currentpage=2;
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
      this.pageNo=apiResponse.photos.page;

    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }

  public goToPage3=()=>{
    this.pageNo=3;
    this.nextButton=true;
    this.currentpage=3;
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
      this.pageNo=apiResponse.photos.page;

    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }
  public goToPreviousPage=()=>{
    this.pageNo=this.pageNo-1;
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
      this.pageNo=apiResponse.photos.page;

    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }
  public goToNextPage=()=>{
    this.pageNo=++this.pageNo;
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      if(apiResponse.photos.photo.length===0){
        this.nextButton=false;
      }
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
      this.pageNo=apiResponse.photos.page;

    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }

  public goToCurrentPage=()=>{
    this.pageNo=this.currentpage
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
      this.pageNo=apiResponse.photos.page;

    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }
}
