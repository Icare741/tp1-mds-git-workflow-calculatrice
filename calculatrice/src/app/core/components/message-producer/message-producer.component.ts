// message-producer.component.ts
import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';


@Component({
  selector: 'app-message-producer',
  templateUrl: './message-producer.component.html',
  styleUrls: ['./message-producer.component.css']
})
export class MessageProducerComponent {

  channel = '';
  author = '';
  content = '';

  constructor(private messageService: MessageService) { }

  sendMessage(author: string, content: string, channel: string) {
    const message = { author, content, channel };
    this.messageService.sendMessage(message);
  }
}
