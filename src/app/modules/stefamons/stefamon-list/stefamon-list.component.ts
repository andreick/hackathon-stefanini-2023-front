import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Stefamon } from 'src/app/core/models/stefamon/stefamon.model';
import { StefamonService } from 'src/app/core/services/stefamon/stefamon.service';

@Component({
  selector: 'app-stefamon-list',
  templateUrl: './stefamon-list.component.html',
  styleUrls: ['./stefamon-list.component.css']
})
export class StefamonListComponent implements OnInit {

  stefamons$: Observable<Stefamon[]>

  constructor(
    private stefamonService: StefamonService
  ) { }

  ngOnInit(): void {
    this.stefamons$ = this.stefamonService.fetchStefamons()
  }

}
