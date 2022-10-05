import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageUserReceiversDetailComponent} from './page-user-receivers-detail.component';

describe('PageReceiversDetailComponent', () => {
  let component: PageUserReceiversDetailComponent;
  let fixture: ComponentFixture<PageUserReceiversDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserReceiversDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserReceiversDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
