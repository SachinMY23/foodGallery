import { Injectable} from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AppService {


  public url='https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a61ce8b01dae2ba9218c6f661796f478&text=foodimages&format=json&nojsoncallback=1&tags=brealfast,lunch,dinner,dessert,pizza,veg,nonveg,seafood&per_page=30';
  constructor(public http:HttpClient) { }


  public getAllFoods(pageNo):Observable<any>{
    return this.http.get(`${this.url}&page=${pageNo}`);

  }
}
