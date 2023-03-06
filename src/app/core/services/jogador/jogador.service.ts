import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthToken } from '../../models/auth-token/auth-token.model';
import { JogadorLogin } from '../../models/jogador/jogador-login.model';
import { JogadorSignup } from '../../models/jogador/jogador-signup.model';
import { Jogador } from '../../models/jogador/jogador.model';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private readonly API = `${environment.urlBackend}/jogadores`

  constructor(private http: HttpClient) { }

  register(signup: JogadorSignup): Observable<Jogador> {
    return this.http.post<Jogador>(this.API, signup)
  }

  fetchById(id: number): Observable<Jogador> {
    return this.http.get<Jogador>(`${this.API}/${id}`)
  }

  fetchByIdWithStefamons(id: number): Observable<Jogador> {
    return this.http.get<Jogador>(`${this.API}/${id}/stefamons`)
  }

  authenticate(login: JogadorLogin): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.API}/login`, login)
  }
}
