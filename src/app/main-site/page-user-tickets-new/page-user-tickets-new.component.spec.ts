import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageUserTicketsNewComponent} from './page-user-tickets-new.component';

describe('PageUserTicketsNewComponent', () => {
  let component: PageUserTicketsNewComponent;
  let fixture: ComponentFixture<PageUserTicketsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserTicketsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserTicketsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
