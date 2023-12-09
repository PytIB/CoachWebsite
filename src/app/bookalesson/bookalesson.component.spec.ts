import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookalessonComponent } from './bookalesson.component';

describe('BookalessonComponent', () => {
  let component: BookalessonComponent;
  let fixture: ComponentFixture<BookalessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookalessonComponent]
    });
    fixture = TestBed.createComponent(BookalessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
