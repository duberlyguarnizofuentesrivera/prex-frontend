import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageUserTicketsDetailComponent} from './page-user-tickets-detail.component';

describe('PageUserTicketsDetailComponent', () => {
  let component: PageUserTicketsDetailComponent;
  let fixture: ComponentFixture<PageUserTicketsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserTicketsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserTicketsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
