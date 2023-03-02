import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  form!: FormGroup

  loading = false

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
    this.loading = true;
    const login = this.form.value as JogadorLogin
    this.loginService.authenticate(login)
      .pipe(first(), finalize(() => this.loading = false))
      .subscribe(() => { this.router.navigate(['stefamons']) })
  }

}
