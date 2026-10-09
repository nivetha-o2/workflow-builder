import { Component } from '@angular/core';
import { WorkflowCanvas } from '../workflow-canvas/workflow-canvas';
import { StepPalette } from '../step-palette/step-palette';

@Component({
  imports: [StepPalette],
  selector: 'app-workflow-page',
  styleUrl: './workflow-page.css',
  templateUrl: './workflow-page.html',
})
export class WorkflowPage {}
