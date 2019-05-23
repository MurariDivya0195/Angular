import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {Http} from '@angular/http';
import { LoginComponent } from './login.component';

@Injectable({

  providedIn: 'root'
})

export class ServiceUser {

  private UsersUrl = '/fetchdata';

  constructor(private http: Http) { }

getUsers(): Promise<LoginComponent[]> {
  return this.http.get(this.UsersUrl)
             .toPromise()
             .then(response => response.json() as LoginComponent[])
             .catch(this.handleError);
}


private handleError(error: any): Promise<any> {
console.error('Error', error);
return Promise.reject(error.message || error);

}
}
