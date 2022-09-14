import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageUserClientsComponent} from './page-user-clients.component';

describe('PageUserClientsComponent', () => {
  let component: PageUserClientsComponent;
  let fixture: ComponentFixture<PageUserClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
