import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdashboardComponent } from './bookdashboard.component';

describe('BookdashboardComponent', () => {
  let component: BookdashboardComponent;
  let fixture: ComponentFixture<BookdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookdashboardComponent]
    });
    fixture = TestBed.createComponent(BookdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
