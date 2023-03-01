import { Component, Input, OnInit } from '@angular/core';
import { Stefamon } from 'src/app/core/models/stefamon/stefamon.model';

@Component({
  selector: 'app-stefamon',
  templateUrl: './stefamon.component.html',
  styleUrls: ['./stefamon.component.css']
})
export class StefamonComponent implements OnInit {

  @Input() stefamon: Stefamon

  constructor() { }

  ngOnInit(): void {
  }

}
