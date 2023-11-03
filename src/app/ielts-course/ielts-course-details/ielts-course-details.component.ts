import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IData } from '../models/iData';
import { IeltsService } from '../services/ielts.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-ielts-course-details',
  templateUrl: './ielts-course-details.component.html',
  styleUrls: ['./ielts-course-details.component.css'],
})
export class IeltsCourseDetailsComponent implements OnInit {
  @Output() languageChanged: EventEmitter<string> = new EventEmitter<string>();
  data: IData | undefined;
  lang: string = 'en';

  constructor(private ieltsService: IeltsService, private languageService: LanguageService) {
    this.languageService.selectedLanguageChanged.subscribe((lang) => {
      this.lang = lang;
      this.loadIeltsData();
    });
  }

  ngOnInit(): void {
    this.loadIeltsData();
  }

  loadIeltsData(): void {
    this.ieltsService.getIeltsCourse(this.lang).subscribe((response) => {
      this.data = response.data;
    });
  }

  changeLanguage(): void {
    this.lang = this.lang === 'en' ? 'bn' : 'en';
    this.languageService.setLanguage(this.lang);
    this.languageChanged.emit(this.lang);
  }
}
