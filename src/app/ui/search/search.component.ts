import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
import { Artist } from '../../../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]

  }
  )

export class SearchComponent implements OnInit {

  findValue: string;
  findRes: Artist[];

  constructor(private _spotifyService: SpotifyService) { }

  findMusic(){
    this._spotifyService.findMusic(this.findValue)
    .subscribe(res => {
       this.findRes = res.artists.items;
    });
  }

  ngOnInit() {
  }

}
