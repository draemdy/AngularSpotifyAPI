import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Observable } from "rxjs/Observable"

// declare var module: {
//   id: string;
// }

@Component({
  //moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl'],
  providers:[SpotifyService]
})
export class SearchComponent implements OnInit {
  searchStr: string;
  artists: string;

  constructor(private _spotifyService:SpotifyService) {

  }

  ngOnInit(): void {
  }

  searchMusic() {
    //console.log(event.target.value);
    this._spotifyService.searchMusic(this.searchStr);
    .subscribe(res => {
      console.log({ name: res.name, artists: res.artists.items });
    })
  }

}