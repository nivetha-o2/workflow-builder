import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepPalette } from './step-palette';

describe('StepPalette', () => {
  let component: StepPalette;
  let fixture: ComponentFixture<StepPalette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepPalette],
    }).compileComponents();

    fixture = TestBed.createComponent(StepPalette);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
