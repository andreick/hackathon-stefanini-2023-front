import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StefamonService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<any> {
    return this.http.get(`${environment.urlBackend}/stefamon`);
  }

}
