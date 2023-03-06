import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first, finalize } from 'rxjs/operators';
import { Jogador } from 'src/app/core/models/jogador/jogador.model';
import { Stefamon } from 'src/app/core/models/stefamon/stefamon.model';
import { JogadorLoginService } from 'src/app/core/services/jogador/jogador-login.service';
import { StefamonService } from 'src/app/core/services/stefamon/stefamon.service';

@Component({
  selector: 'app-stefamon-list',
  templateUrl: './stefamon-list.component.html',
  styleUrls: ['./stefamon-list.component.css']
})
export class StefamonListComponent implements OnInit {

  stefamons$!: Observable<Stefamon[]>
  jogador$!: Observable<Jogador | null>

  loading = false

  constructor(
    private stefamonService: StefamonService,
    private jogadorLoginService: JogadorLoginService
  ) { }

  ngOnInit(): void {
    this.fetchStefamons()
    this.jogador$ = this.jogadorLoginService.jogador
  }

  fetchStefamons(): void {
    this.loading = true;
    this.stefamons$ = this.stefamonService.fetchStefamons()
      .pipe(first(), finalize(() => this.loading = false))
  }
}
