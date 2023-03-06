import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthToken } from '../../models/auth-token/auth-token.model';

import { Jogador } from '../../models/jogador/jogador.model';
import { AuthTokenService } from '../token/auth-token.service';
import { JogadorService } from './jogador.service';

@Injectable({
  providedIn: 'root'
})
export class JogadorLoginService {

  private jogadorSubject = new BehaviorSubject<Jogador | null>(null)

  constructor(
    private jogadorService: JogadorService,
    private authTokenService: AuthTokenService
  ) {
    if (this.isLoggedIn()) {
      this.fetchJogador(authTokenService.token)
    }
  }

  get jogador() {
    return this.jogadorSubject.asObservable();
  }

  isLoggedIn(): boolean {
    return this.authTokenService.hasToken();
  }

  logIn(token: AuthToken): void {
    this.authTokenService.token = token.accessToken
    this.fetchJogador(token.accessToken)
  }

  logOut(): void {
    this.authTokenService.deleteToken();
    this.jogadorSubject.next(null);
  }

  private fetchJogador(token: String): void {
    const id = Number(token)
    this.jogadorService.fetchByIdWithStefamons(id)
      .pipe(first())
      .subscribe((jogador) => { this.jogadorSubject.next(jogador) })
  }
}
