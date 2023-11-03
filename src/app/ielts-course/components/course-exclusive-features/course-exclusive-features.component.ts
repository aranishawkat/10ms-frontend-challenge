import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-course-exclusive-features',
  templateUrl: './course-exclusive-features.component.html',
  styleUrls: ['./course-exclusive-features.component.css']
})
export class CourseExclusiveFeaturesComponent {
  @Input() data: any;
}
