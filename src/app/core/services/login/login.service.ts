import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CredenciaisJogador } from '../../models/credenciais-jogador.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = `${environment.urlBackend}/jogadores/login`

  constructor(
    private http: HttpClient,
  ) { }

  authenticate(credenciais: CredenciaisJogador): Observable<void> {
    return this.http.post<void>(this.API, credenciais)
  }

}
