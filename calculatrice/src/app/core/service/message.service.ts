// message.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../interface/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubjects: Map<string, BehaviorSubject<Message[]>> = new Map();

  constructor() { }

  sendMessage(message: Message) {
    if (!this.messageSubjects.has(message.channel)) {
      this.messageSubjects.set(message.channel, new BehaviorSubject<Message[]>([]));
    }
    const messages = this.messageSubjects.get(message.channel)?.value; // Add null check
    if (messages) {
      this.messageSubjects.get(message.channel)?.next([...messages, message]);
    }
  }

  getMessages(channel: string): Observable<Message[]> {
    if (!this.messageSubjects.has(channel)) {
      this.messageSubjects.set(channel, new BehaviorSubject<Message[]>([]));
    }
    return this.messageSubjects.get(channel)?.asObservable() ?? new Observable<Message[]>(observer => {}); // Add null check
  }
}
