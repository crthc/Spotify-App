import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artist:any = {};
  topTracks: any[] = [];

  loading:Boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      console.log(params['id'])
      this.getArtist(params['id'])
      this.getTopTracks(params['id'])
    });
   }

  getArtist(id:string){
    this.loading = true;
    this.spotify.getArtist(id).subscribe(artist => {
      console.log(artist);
      this.artist = artist
      this.loading = false;
    })
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    })
  }

}
