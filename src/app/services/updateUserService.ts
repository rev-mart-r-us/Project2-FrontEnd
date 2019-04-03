import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {user} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
    postUrl: string = "http://moviefinder.us-east-2.elasticbeanstalk.com/users/";

  constructor(private http: HttpClient) { }

  updateUser (user: user, id: number): Observable<boolean> { 
    return this.http.put<boolean>((this.postUrl + "/" +  id), user);
  }
}
