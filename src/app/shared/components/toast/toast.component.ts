import { Component, OnInit } from '@angular/core';

import { Message, MessageService } from 'primeng/api';

import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor(
    private toastService: ToastService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.toastService.message.subscribe((message) => this.showToast(message))
  }

  private showToast(message: Message) {
    this.messageService.add({ key: 'app', ...message })
  }
}
