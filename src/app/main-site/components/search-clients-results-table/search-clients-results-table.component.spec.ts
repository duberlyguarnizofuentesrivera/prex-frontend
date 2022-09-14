import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchClientsResultsTableComponent} from './search-clients-results-table.component';

describe('SearchClientsResultsTableComponent', () => {
  let component: SearchClientsResultsTableComponent;
  let fixture: ComponentFixture<SearchClientsResultsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClientsResultsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchClientsResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
