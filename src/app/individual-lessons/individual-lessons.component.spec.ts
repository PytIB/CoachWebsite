import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLessonsComponent } from './individual-lessons.component';

describe('IndividualLessonsComponent', () => {
  let component: IndividualLessonsComponent;
  let fixture: ComponentFixture<IndividualLessonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualLessonsComponent]
    });
    fixture = TestBed.createComponent(IndividualLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
