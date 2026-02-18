import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPillComponent } from './tech-pill.component';

describe('TechPillComponent', () => {
  let component: TechPillComponent;
  let fixture: ComponentFixture<TechPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechPillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechPillComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
