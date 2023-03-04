import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { JogadorLogin } from '../../models/jogador/jogador-login.model';
import { JogadorSignup } from '../../models/jogador/jogador-signup.model';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private readonly API = `${environment.urlBackend}/jogadores`

  constructor(private http: HttpClient) { }

  register(signup: JogadorSignup): Observable<void> {
    return this.http.post<void>(this.API, signup)
  }

  authenticate(login: JogadorLogin): Observable<void> {
    return this.http.post<void>(`${this.API}/login`, login)
  }
}
