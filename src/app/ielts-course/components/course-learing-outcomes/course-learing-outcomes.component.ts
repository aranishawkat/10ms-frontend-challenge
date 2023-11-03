import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-course-learing-outcomes',
  templateUrl: './course-learing-outcomes.component.html',
  styleUrls: ['./course-learing-outcomes.component.css']
})
export class CourseLearingOutcomesComponent {
  @Input() data: any;
}
