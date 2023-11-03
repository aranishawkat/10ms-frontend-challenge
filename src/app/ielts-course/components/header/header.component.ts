import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentLang: string = 'en';

  constructor(private languageService: LanguageService) {
    this.currentLang = this.languageService.getSelectedLanguage();
    this.languageService.selectedLanguageChanged.subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  onLanguageChangeClick(): void {
    this.currentLang = this.currentLang === 'en' ? 'bn' : 'en';
    this.languageService.setLanguage(this.currentLang);
  }
}
