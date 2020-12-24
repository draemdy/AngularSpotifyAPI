import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchModule } from './../my-common/search/search.module';
import { Observable } from 'rxjs/Rx';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService{
    private searchUrl: string;

    constructor(private _http: HttpClient){}

    searchMusic(str:string, type='artist'): Observable<SearchModule[]> {
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get<SearchModule[]>(this.searchUrl);
 //           .map(response => console.log(res));
    }

    // searchMusic(str:string, type='artist'){
    //     let headers = new Headers({ 'Content-Type': 'application/json' },{'Authorization:'add_your_token_here'}); // ... Set content type to JSON
    //     let options = new RequestOptions({ headers: headers }); // Create a request option
    //     this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    //     return this._http.get(this.searchUrl, options)
    //         .map(res => res.json());
    //     }

    // getProfile() {
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   let authToken = localStorage.getItem('auth_token');
    //   headers.append('Authorization', `Bearer ${authToken}`);
  
    //   return this.httpClient
    //     .get('/profile', { headers })
    //     .map(res => res.json());
    // }
    
}