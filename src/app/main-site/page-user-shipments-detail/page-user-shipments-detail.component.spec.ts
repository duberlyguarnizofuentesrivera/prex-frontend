import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageUserShipmentsDetailComponent} from './page-user-shipments-detail.component';

describe('PageUserShipmentsDetailComponent', () => {
  let component: PageUserShipmentsDetailComponent;
  let fixture: ComponentFixture<PageUserShipmentsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserShipmentsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserShipmentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
