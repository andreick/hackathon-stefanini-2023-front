import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-jogador-form',
  templateUrl: './jogador-form.component.html',
  styleUrls: ['./jogador-form.component.css']
})
export class JogadorFormComponent implements OnInit {

  @Input() title!: string
  @Input() submitLabel!: string

  @Output() submitEvent = new EventEmitter<FormGroup>()

  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      { nickname: [''], senha: [''] }
    )
  }

  get nickname() { return this.form.get('nickname') }
  get senha() { return this.form.get('senha') }

  submit(): void {
    this.submitEvent.emit(this.form)
  }
}
