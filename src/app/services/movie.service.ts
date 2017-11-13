import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieService {

  apiKey: string;
  baseUrl: string;

  constructor(private jsonp: Jsonp) {
    this.apiKey = '0003bde99d8b2337e1648896538ac4ec';
    this.baseUrl = 'https://api.themoviedb.org/3';
    console.log('MovieService initialized!');
  }

  getPopular() {
    this.jsonp.get(this.baseUrl + '/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc')
      .map(res => res.json());
  }

}
