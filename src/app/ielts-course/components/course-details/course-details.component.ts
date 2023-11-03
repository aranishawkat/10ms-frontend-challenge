import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  @Input() data: any;

  requirement: string[] = [
    "ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)",
    "স্মার্টফোন অথবা পিসি"
  ];
}
