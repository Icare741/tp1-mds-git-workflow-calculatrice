// message-subscription.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageSubscriptionService {
  private subscriptions: Map<string, BehaviorSubject<boolean>> = new Map();

  constructor() { }

  subscribe(channel: string) {
    if (!this.subscriptions.has(channel)) {
      this.subscriptions.set(channel, new BehaviorSubject<boolean>(false));
    }
    const subscription = this.subscriptions.get(channel);
    if (subscription) {
      subscription.next(true);
    }
  }

  unsubscribe(channel: string) {
    const subscription = this.subscriptions.get(channel);
    if (subscription) {
      subscription.next(false);
    }
  }


  isSubscribed(channel: string): boolean {
    return this.subscriptions.has(channel) && this.subscriptions.get(channel)?.value || false;
  }
}
