import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImagesResponse } from '../models/images';
import { map } from 'rxjs/operators';
import { ENDPOINT } from '../shared/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(
    private http: HttpClient
  ) { }

  getRandomImage(breed): Observable<string> {
    let url = ENDPOINT + '/breed';
    for (let i = breed.length - 1; i >= 0; i--) {
      url += `/${breed[i]}`;
    }
    url += '/images/random';
    return this.http.get(url).pipe(
      map((data: ImagesResponse) => (!!data.message.length) ? data.message : null)
    );
  }
}
