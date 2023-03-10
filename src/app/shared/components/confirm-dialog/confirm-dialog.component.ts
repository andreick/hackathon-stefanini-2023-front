import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() header = 'Confirmação'
  @Input() icon = 'pi pi-exclamation-triangle'

  constructor() { }

  ngOnInit(): void {
  }

}
