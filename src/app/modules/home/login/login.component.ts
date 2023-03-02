import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, first } from 'rxjs/operators';

import { JogadorLogin } from 'src/app/core/models/jogador/jogador-login.model';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  logIn(form: FormGroup): void {
    this.loading = true;
    const login = form.value as JogadorLogin
    this.loginService.authenticate(login)
      .pipe(first(), finalize(() => this.loading = false))
      .subscribe(() => { this.router.navigate(['stefamons']) })
  }
}
