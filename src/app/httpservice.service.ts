import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/json/tree.json");
  }
}
