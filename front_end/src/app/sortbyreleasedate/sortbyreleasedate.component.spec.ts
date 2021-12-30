import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbyreleasedateComponent } from './sortbyreleasedate.component';

describe('SortbyreleasedateComponent', () => {
  let component: SortbyreleasedateComponent;
  let fixture: ComponentFixture<SortbyreleasedateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbyreleasedateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbyreleasedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
