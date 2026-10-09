import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkflowCanvas } from './workflow-canvas';

describe('WorkflowCanvas', () => {
  let component: WorkflowCanvas;
  let fixture: ComponentFixture<WorkflowCanvas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowCanvas],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkflowCanvas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
