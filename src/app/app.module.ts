import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { AboutComponent } from './ui/about/about.component';
import { SearchComponent } from './ui/search/search.component';
import { ArtistComponent } from './ui/artist/artist.component';
import { AlbumComponent } from './ui/album/album.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
