import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('spotify listo');
  }

  getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBPbXLdiYQElJXqC0EKEVkVqp5S62VIkW1Mu0dcgkXvZSX-KNZQxc6cQuIYSePTwZSZ_MI680sQj8ZFkN8'
    })

    return this.http.get(url, {headers});
  }

  getNewReleases(){

    
   return this.getQuery('browse/new-releases?limit=20')
            .pipe(map( data => data['albums'].items
            ))
         
  }

  getArtists(termino: string){

   return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=15`)
              .pipe(map( data => data['artists'].items
            ))
         
  }
  getArtist(id: string){

   return this.getQuery(`artists/${id}`);
              //.pipe(map( data => data['artists'].items))
         
  }
  getTopTracks(id: string){

   return this.getQuery(`artists/${id}/top-tracks?market=us`)
            .pipe(map( data => data['tracks']))
         
  }


}
