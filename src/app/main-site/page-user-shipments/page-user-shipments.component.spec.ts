import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageUserShipmentsComponent} from './page-user-shipments.component';

describe('PageUserShipmentsComponent', () => {
  let component: PageUserShipmentsComponent;
  let fixture: ComponentFixture<PageUserShipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserShipmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
