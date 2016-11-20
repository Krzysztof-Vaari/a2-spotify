import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private findUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  constructor(private _http: Http) { 

   }

   findMusic(str: string, type='artist') {
    this.findUrl= 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'';      
      return this._http.get(this.findUrl)
        .map(res => res.json());
   }

   getArtist(id: string) {
    this.artistUrl= 'https://api.spotify.com/v1/artists/'+id;     
      return this._http.get(this.artistUrl)
        .map(res => res.json());
   }

    getAlbums(artistId: string) {
    this.albumsUrl= 'https://api.spotify.com/v1/artists/'+artistId+'/albums';     
      return this._http.get(this.albumsUrl)
        .map(res => res.json());
   }

    getAlbum(id: string) {
    this.albumUrl= 'https://api.spotify.com/v1/albums/'+id;     
      return this._http.get(this.albumUrl)
        .map(res => res.json());
    }
}