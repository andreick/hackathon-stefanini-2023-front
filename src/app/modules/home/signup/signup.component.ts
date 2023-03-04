import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { finalize, first } from 'rxjs/operators';

import { JogadorSignup } from 'src/app/core/models/jogador/jogador-signup.model';
import { Stefamon } from 'src/app/core/models/stefamon/stefamon.model';
import { JogadorService } from 'src/app/core/services/jogador/jogador.service';
import { StefamonInicialService } from 'src/app/core/services/stefamon/stefamon-inicial.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  stefamons$!: Observable<Stefamon[]>

  loading = false
  
  selectedStefamon: Stefamon | null = null

  constructor(
    private stefamonInicialService: StefamonInicialService,
    private jogadorService: JogadorService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.stefamons$ = this.stefamonInicialService.fetchStefamons()
      .pipe(first(), finalize(() => this.loading = false))
  }

  selectStefamon(stefamon: Stefamon): void {
    this.selectedStefamon = (stefamon.id !== this.selectedStefamon?.id) ? stefamon : null
  }

  submit(form: FormGroup): void {
    if (this.selectedStefamon) {
      console.log(this.selectedStefamon)
      this.signUp(form)
    } else {
      this.confirmationService.confirm({
        message: 'Tem certeza que não deseja escolher o seu primerio StefaMon agora?',
        accept: () => this.signUp(form)
      })
    }
  }

  private signUp(form: FormGroup): void {
    this.loading = true
    const jogador = form.value as JogadorSignup
    jogador.idStefamonInicial = this.selectedStefamon?.id
    this.jogadorService.register(jogador)
      .pipe(first(), finalize(() => this.loading = false))
      .subscribe(() => { this.router.navigate(['stefamons']) })
  }
}
