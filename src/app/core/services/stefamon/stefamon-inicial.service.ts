import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Stefamon } from '../../models/stefamon/stefamon.model';

@Injectable({
  providedIn: 'root'
})
export class StefamonInicialService {

  private readonly API = `${environment.urlBackend}/stefamons-iniciais`

  constructor(private http: HttpClient) { }

  fetchStefamons(): Observable<Stefamon[]> {
    return this.http.get<Stefamon[]>(this.API);
  }
}
