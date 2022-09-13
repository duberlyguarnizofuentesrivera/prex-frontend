import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchShipmentsResultsTableComponent} from './search-shipments-results-table.component';

describe('SearchShipmentsResultsTableComponent', () => {
  let component: SearchShipmentsResultsTableComponent;
  let fixture: ComponentFixture<SearchShipmentsResultsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchShipmentsResultsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchShipmentsResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
