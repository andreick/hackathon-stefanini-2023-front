import { Component, OnInit } from '@angular/core';

import { MessageService, Message } from 'primeng/api';

import { GlobalToastService } from 'src/app/core/services/toast/global-toast.service';

@Component({
  selector: 'app-global-toast',
  templateUrl: './global-toast.component.html',
  styleUrls: ['./global-toast.component.css']
})
export class GlobalToastComponent implements OnInit {

  constructor(
    private globalToastService: GlobalToastService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.globalToastService.message.subscribe((message) => this.showToast(message))
  }

  private showToast(message: Message) {
    this.messageService.add({ key: 'global', ...message })
  }
}
