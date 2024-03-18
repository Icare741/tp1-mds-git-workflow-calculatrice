// message-consumer.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from '../../interface/message';
import { MessageService } from '../../service/message.service';
import { MessageSubscriptionService } from '../../service/message-subscription.service';


@Component({
  selector: 'app-message-consumer',
  templateUrl: './message-consumer.component.html',
  styleUrls: ['./message-consumer.component.css']
})
export class MessageConsumerComponent implements OnInit, OnDestroy {
  messages: { [channel: string]: Message[] } = {};
  channels: string[] = [];
  newChannel = '';
  private subscriptions: Map<string, Subscription> = new Map();

  constructor(
    private messageService: MessageService,
    private subscriptionService: MessageSubscriptionService
  ) { }

  ngOnInit(): void {
    // Récupérer toutes les chaînes disponibles
    this.channels = ['channel1']; // Ajoutez ici vos différentes chaînes

    // Initialiser les tableaux de messages pour chaque chaîne
    this.channels.forEach(channel => {
      this.messages[channel] = [];
      const subscription = this.messageService.getMessages(channel).subscribe(messages => {
        if (this.subscriptionService.isSubscribed(channel)) {
          this.messages[channel] = messages;
        }

      }
      );
    });

  }

  ngOnDestroy(): void {
   
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  toggleSubscription(channel: string) {
    if (this.isSubscribed(channel)) {
      this.subscriptions.get(channel)?.unsubscribe();
      this.subscriptionService.unsubscribe(channel);
    } else {
      this.subscriptionService.subscribe(channel);
      this.subscriptions.set(channel, this.messageService.getMessages(channel).subscribe(messages => {
        this.messages[channel] = messages;
      }));
    }
  }

  isSubscribed(channel: string): boolean {
    return this.subscriptionService.isSubscribed(channel);
  }
  addChannel() {
    if (this.newChannel) {
      this.channels.push(this.newChannel);
      this.messages[this.newChannel] = [];
      this.newChannel = '';
    }
  }
}
