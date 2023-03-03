import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, first } from 'rxjs/operators';

import { JogadorSignup } from 'src/app/core/models/jogador/jogador-signup.model';
import { JogadorService } from 'src/app/core/services/jogador/jogador.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loading = false

  constructor(
    private jogadorService: JogadorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp(form: FormGroup): void {
    this.loading = true
    const jogador = form.value as JogadorSignup
    this.jogadorService.register(jogador)
      .pipe(first(), finalize(() => this.loading = false))
      .subscribe(() => { this.router.navigate(['stefamons']) })
  }
}
