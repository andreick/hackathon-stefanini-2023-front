import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, first, tap } from 'rxjs/operators';

import { JogadorLogin } from 'src/app/core/models/jogador/jogador-login.model';
import { JogadorLoginService } from 'src/app/core/services/jogador/jogador-login.service';
import { JogadorService } from 'src/app/core/services/jogador/jogador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false

  constructor(
    private jogadorService: JogadorService,
    private jogadorLoginService: JogadorLoginService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  logIn(form: FormGroup): void {
    this.loading = true;
    const login = form.value as JogadorLogin
    this.jogadorService.authenticate(login)
      .pipe(first(),
        tap((token) => { this.jogadorLoginService.logIn(token) }),
        finalize(() => this.loading = false))
      .subscribe(() => { this.router.navigate(['stefamons']) })
  }
}
