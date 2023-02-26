import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { CredenciaisJogador } from 'src/app/core/models/credenciais-jogador.model';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      { nickname: [''], senha: [''] }
    )
  }

  get nickname() { return this.form.get('nickname') }
  get senha() { return this.form.get('senha') }

  entrar(): void {
    const login = this.form.value as CredenciaisJogador
    this.loginService.authenticate(login)
      .pipe(first())
      .subscribe(() => { this.router.navigate(['stefamon']) })
  }

}
