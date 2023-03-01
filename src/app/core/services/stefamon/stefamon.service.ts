import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Stefamon } from '../../models/stefamon/stefamon.model';

@Injectable({
  providedIn: 'root'
})
export class StefamonService {

  private readonly API = `${environment.urlBackend}/stefamons`

  constructor(
    private http: HttpClient
  ) { }

  fetchStefamons(): Observable<Stefamon[]> {
    return this.http.get<Stefamon[]>(this.API);
  }

}
