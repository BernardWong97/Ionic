import { Component } from '@angular/core';
import {MovieProvider} from '../../providers/movie/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: any[]=[];

  constructor(private mp:MovieProvider) {
  }

  ionViewDidLoad(){
    this.mp.getMovies().subscribe(data=>{
      this.movies = data.Search;
    });
  }
}
