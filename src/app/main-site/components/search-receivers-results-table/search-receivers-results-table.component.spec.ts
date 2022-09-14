import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchReceiversResultsTableComponent} from './search-receivers-results-table.component';

describe('SearchReceiversResultsTableComponent', () => {
  let component: SearchReceiversResultsTableComponent;
  let fixture: ComponentFixture<SearchReceiversResultsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchReceiversResultsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchReceiversResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
