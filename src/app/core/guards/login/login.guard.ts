import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { JogadorLoginService } from '../../services/jogador/jogador-login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {

  constructor(
    private jogadorLoginService: JogadorLoginService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkLogin()
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin()
  }

  private checkLogin(): true | UrlTree {
    if (this.jogadorLoginService.isLoggedIn()) {
      return this.router.parseUrl('jogador')
    }
    return true;
  }
}
