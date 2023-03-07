import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { JogadorLoginService } from '../../services/jogador/jogador-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private jogadorLoginService: JogadorLoginService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkAuthentication(state.url.split('/')[1])
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkAuthentication(segments[0].path)
  }

  private checkAuthentication(root: string): true | UrlTree {
    const isHome = root === 'home'
    if (this.jogadorLoginService.isLoggedIn()) {
      return isHome ? this.router.parseUrl('jogador') : true
    }
    return isHome ? true : this.router.parseUrl('home')
  }
}
