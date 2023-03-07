import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Message } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private messageSubject = new Subject<Message>()

  constructor() { }

  get message() { return this.messageSubject.asObservable() }

  showSuccess(message: string, { title = 'Sucesso', life = 2000 } = {}): void {
    this.messageSubject.next({ severity: 'success', summary: title, detail: message, life })
  }

  showError(message: string, { title = 'Erro', life = 3000 } = {}): void {
    this.messageSubject.next({ severity: 'error', summary: title, detail: message, life })
  }
}
