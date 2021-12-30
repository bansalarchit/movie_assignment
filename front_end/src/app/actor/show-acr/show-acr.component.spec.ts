import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAcrComponent } from './show-acr.component';

describe('ShowAcrComponent', () => {
  let component: ShowAcrComponent;
  let fixture: ComponentFixture<ShowAcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
