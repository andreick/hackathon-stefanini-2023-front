import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MenuItem } from 'primeng/api';
import { Jogador } from 'src/app/core/models/jogador/jogador.model';
import { JogadorLoginService } from 'src/app/core/services/jogador/jogador-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  jogador$!: Observable<Jogador | null>

  items!: MenuItem[]

  constructor(
    private jogadorLoginService: JogadorLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.jogador$ = this.jogadorLoginService.jogador
      .pipe(tap((jogador) => { this.items.forEach((item) => item.visible = jogador != null) }))

    this.items = [
      { label: 'StefaMons', routerLink: ['stefamons'], visible: false },
      { label: 'Arena', visible: false }
    ];
  }

  logOut(): void {
    this.jogadorLoginService.logOut()
    this.router.navigate([''])
  }
}
