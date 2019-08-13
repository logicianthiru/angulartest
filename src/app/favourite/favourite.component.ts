import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  total: object[];
  tracks: object[];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e5c5108c0bc37d122700aa9b91a6e7fb&format=json').subscribe(data => {
      this.total = data as object[];
      console.log(this.total);
      this.tracks = this.total["tracks"]["track"] as object[];
      console.log(this.tracks);
    })
  }

}
