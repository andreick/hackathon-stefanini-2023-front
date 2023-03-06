import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Jogador } from 'src/app/core/models/jogador/jogador.model';
import { JogadorLoginService } from 'src/app/core/services/jogador/jogador-login.service';

@Component({
  selector: 'app-jogador-page',
  templateUrl: './jogador-page.component.html',
  styleUrls: ['./jogador-page.component.css']
})
export class JogadorPageComponent implements OnInit {

  jogador$!: Observable<Jogador | null>

  constructor(private jogadorLoginService: JogadorLoginService) { }

  ngOnInit(): void {
    this.jogador$ = this.jogadorLoginService.jogador
  }

}
