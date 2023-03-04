import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-spinner',
  templateUrl: './block-spinner.component.html',
  styleUrls: ['./block-spinner.component.css']
})
export class BlockSpinnerComponent implements OnInit {

  @Input() blocked!: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
