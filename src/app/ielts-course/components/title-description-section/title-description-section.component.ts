import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-title-description-section',
  templateUrl: './title-description-section.component.html',
  styleUrls: ['./title-description-section.component.css']
})

export class TitleDescriptionSectionComponent {
  @Input() data: any;

  constructor() {
  }
}
