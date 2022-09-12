import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageSearchByCodeComponent} from './page-search-by-code.component';

describe('PageSearchByCodeComponent', () => {
  let component: PageSearchByCodeComponent;
  let fixture: ComponentFixture<PageSearchByCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSearchByCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSearchByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
