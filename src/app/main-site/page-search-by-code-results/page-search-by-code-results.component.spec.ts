import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageSearchByCodeResultsComponent} from './page-search-by-code-results.component';

describe('PageSearchByCodeResultsComponent', () => {
  let component: PageSearchByCodeResultsComponent;
  let fixture: ComponentFixture<PageSearchByCodeResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSearchByCodeResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSearchByCodeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
