import { SpotifyService } from './../../services/spotify.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  newSongs: any[] = [];

  loading:Boolean;

  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) { 

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe((data: any) =>{
        this.newSongs = data;
        this.loading = false;
      }, (errorServicio)=>{

        this.loading = false;
        this.error =true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
      })

  
  }

  
}
