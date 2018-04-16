import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getMovies(): Observable<any>{
    return this.http.get("http://www.omdbapi.com/?apikey=748bc94&s=%27war%27")
    .map(data=>data.json());
  }

}
