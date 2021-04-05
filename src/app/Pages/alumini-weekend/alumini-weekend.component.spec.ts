import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiWeekendComponent } from './alumini-weekend.component';

describe('AluminiWeekendComponent', () => {
  let component: AluminiWeekendComponent;
  let fixture: ComponentFixture<AluminiWeekendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluminiWeekendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminiWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
