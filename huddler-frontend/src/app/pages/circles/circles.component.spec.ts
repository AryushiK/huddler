import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclesComponent } from './circles.component';

describe('CirclesComponent', () => {
  let component: CirclesComponent;
  let fixture: ComponentFixture<CirclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
