import { SpotifyService } from './../../services/spotify.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any [] = [];

  loading:Boolean;

  constructor(private spotify: SpotifyService) { }

  search(termino:string){
    console.log(termino);
    this.loading = true;
    this.spotify.getArtists(termino)
      .subscribe((data:any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;
      })
  }

  

}
