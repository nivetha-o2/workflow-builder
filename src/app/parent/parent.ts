import { Component } from '@angular/core';
import { Child} from '../child/child';

@Component({
  imports: [Child],
  selector: 'app-parent',
  styleUrl: './parent.css',
  templateUrl: './parent.html',
})
export class Parent {}
