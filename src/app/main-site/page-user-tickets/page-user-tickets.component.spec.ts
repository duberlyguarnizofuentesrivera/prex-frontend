import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageUserTicketsComponent} from './page-user-tickets.component';

describe('PageUserTicketsComponent', () => {
  let component: PageUserTicketsComponent;
  let fixture: ComponentFixture<PageUserTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
