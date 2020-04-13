import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileDetails } from './profile-detail';

@Injectable({
  providedIn: 'root'
})
export class ServiceappService {
 
  constructor(private http: HttpClient) { }

  getDetails(): Observable<ProfileDetails[]> {
    return this.http.get<ProfileDetails[]>('https://jsonplaceholder.typicode.com/users');
  }
}

