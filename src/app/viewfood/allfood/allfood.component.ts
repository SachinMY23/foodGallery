import { Component, OnInit } from '@angular/core';
import {AppService} from './../../app.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-allfood',
  templateUrl: './allfood.component.html',
  styleUrls: ['./allfood.component.css']
})
export class AllfoodComponent implements OnInit {
  
  public allPhotos:any;
  public pageNo=1;
  constructor(public appService:AppService,
    public toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllFoods();
  }
  
  public getAllFoods:any=()=>{
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }

  public goToPage1=()=>{
    this.pageNo=1;
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }

  public goToPage2=()=>{
    this.pageNo=2;
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }

  public goToPage3=()=>{
    this.pageNo=3;
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }
  public goToPreviousPage=()=>{
    this.pageNo--;
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }
  public goToNextPage=()=>{
    this.pageNo++;
    this.appService.getAllFoods(this.pageNo).subscribe((apiResponse)=>{
      console.log(apiResponse)
      console.log(apiResponse.photos.photo[0])
      this.allPhotos=apiResponse.photos.photo;
    },
    (err)=>{
      this.toastr.warning("Try again...Failed to fetch images")
      console.log(err);
    })
  }
}
