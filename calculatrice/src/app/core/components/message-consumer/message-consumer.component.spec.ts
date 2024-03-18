import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageConsumerComponent } from './message-consumer.component';

describe('MessageConsumerComponent', () => {
  let component: MessageConsumerComponent;
  let fixture: ComponentFixture<MessageConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
