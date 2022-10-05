import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageUserClientsDetailComponent} from './page-user-clients-detail.component';

describe('PageUserClientsDetailComponent', () => {
  let component: PageUserClientsDetailComponent;
  let fixture: ComponentFixture<PageUserClientsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserClientsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserClientsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
