import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageProducerComponent } from './message-producer.component';

describe('MessageProducerComponent', () => {
  let component: MessageProducerComponent;
  let fixture: ComponentFixture<MessageProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageProducerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
