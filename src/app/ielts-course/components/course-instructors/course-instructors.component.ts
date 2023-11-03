import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-course-instructors',
  templateUrl: './course-instructors.component.html',
  styleUrls: ['./course-instructors.component.css']
})
export class CourseInstructorsComponent {
  @Input() data: any;
}
