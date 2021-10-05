import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.endPoint;
  }

  public getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.url + '/persons');
  }

}
