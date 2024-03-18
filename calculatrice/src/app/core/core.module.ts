import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageConsumerComponent } from './components/message-consumer/message-consumer.component';
import { MessageProducerComponent } from './components/message-producer/message-producer.component';





@NgModule({
  declarations: [
    MessageConsumerComponent,
    MessageProducerComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
exports: [
  MessageConsumerComponent,
  MessageProducerComponent
],
})
export class CoreModule { }
