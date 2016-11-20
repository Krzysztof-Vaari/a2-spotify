import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  providers: [SpotifyService]

})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private _SpotifyService: SpotifyService,
  private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.map(params => params['id'])
    .subscribe((id) => {

      this._SpotifyService.getArtist(id)
      .subscribe(artist =>{this.artist = artist})

      this._SpotifyService.getAlbums(id)
      .subscribe(albums =>{this.albums = albums.items})
    })
}
}
    


