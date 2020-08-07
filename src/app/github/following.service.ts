import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowingService {

  private url ="https://api.github.com/users/MAAZAZ/following";

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }
}
