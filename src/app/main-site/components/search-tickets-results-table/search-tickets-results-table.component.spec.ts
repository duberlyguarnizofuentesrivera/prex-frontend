import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchTicketsResultsTableComponent} from './search-tickets-results-table.component';

describe('SearchTicketsResultsTableComponent', () => {
  let component: SearchTicketsResultsTableComponent;
  let fixture: ComponentFixture<SearchTicketsResultsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTicketsResultsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTicketsResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
