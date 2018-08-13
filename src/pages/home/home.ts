import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import 'rxjs/add/observable/of';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  kids: any;
  movies: any;
  enters: any;
  musics: any;
  posts: any;
  constructor(public navCtrl: NavController,public http:Http) {
this.http.get('http://172.21.0.2/api/index.php?cat=sports').map(res => res.json()).subscribe(data => {
  this.posts=data;

});
this.http.get('http://172.21.0.2/api/index.php?cat=kids').map(res => res.json()).subscribe(data => {
  this.kids=data;

});
this.http.get('http://172.21.0.2/api/index.php?cat=movies').map(res => res.json()).subscribe(data => {
  this.movies=data;

});
this.http.get('http://172.21.0.2/api/index.php?cat=entertainment').map(res => res.json()).subscribe(data => {
  this.enters=data;

});
this.http.get('http://172.21.0.2/api/index.php?cat=music').map(res => res.json()).subscribe(data => {
  this.musics=data;

});

  }

  playvideo(i){
    console.log(i);





  }




}
