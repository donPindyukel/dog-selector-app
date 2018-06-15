import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BreedsResponse } from '../models/breeds';
import { ENDPOINT } from '../shared/constants';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<BreedsResponse> {
    const url = ENDPOINT + '/breeds/list/all';
    return this.http.get<BreedsResponse>(url);
  }

  breedsMapData(data: BreedsResponse): string[] | null {
    const breeds: string[] = [];
    if (!!data.message) {
        for (const breed in data.message) {
          if (data.message.hasOwnProperty(breed)) {
            if (data.message[breed].length) {
              for (let i = 0; i < Number(data.message[breed].length); i++) {
                breeds.push(data.message[breed][i] + ' ' + breed);
              }
            } else {
              breeds.push(breed);
            }
          }
      }
    }
    return (breeds.length) ? breeds : null;
  }
}
