import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  selectedLanguageChanged: EventEmitter<string> = new EventEmitter<string>();
  private selectedLanguage: string = 'en';

  getSelectedLanguage(): string {
    return this.selectedLanguage;
  }

  setLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.selectedLanguageChanged.emit(lang);
  }
}
