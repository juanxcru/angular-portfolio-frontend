import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackBoxComponent } from './tech-stack-box.component';

describe('TechStackBoxComponent', () => {
  let component: TechStackBoxComponent;
  let fixture: ComponentFixture<TechStackBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStackBoxComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
