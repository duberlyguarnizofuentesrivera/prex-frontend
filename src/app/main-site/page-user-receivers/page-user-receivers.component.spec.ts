import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageUserReceiversComponent} from './page-user-receivers.component';

describe('PageUserReceiversComponent', () => {
  let component: PageUserReceiversComponent;
  let fixture: ComponentFixture<PageUserReceiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserReceiversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserReceiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
