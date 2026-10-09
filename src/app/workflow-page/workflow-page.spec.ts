import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkflowPage } from './workflow-page';

describe('WorkflowPage', () => {
  let component: WorkflowPage;
  let fixture: ComponentFixture<WorkflowPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkflowPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
