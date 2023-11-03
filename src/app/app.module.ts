import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IeltsCourseDetailsComponent } from './ielts-course/ielts-course-details/ielts-course-details.component';
import { TitleDescriptionSectionComponent } from './ielts-course/components/title-description-section/title-description-section.component';
import { HeaderComponent } from './ielts-course/components/header/header.component';
import {BreadcrumbComponent} from "./ielts-course/components/breadcrumb/breadcrumb.component";
import { TrailerComponent } from './ielts-course/components/trailer/trailer.component';
import { CourseInstructorsComponent} from "./ielts-course/components/course-instructors/course-instructors.component";
import { CourseLayoutComponent } from './ielts-course/components/course-layout/course-layout.component';
import { CourseLearingOutcomesComponent } from './ielts-course/components/course-learing-outcomes/course-learing-outcomes.component';
import { CourseExclusiveFeaturesComponent } from './ielts-course/components/course-exclusive-features/course-exclusive-features.component';
import { CourseDetailsComponent } from './ielts-course/components/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IeltsCourseDetailsComponent,
    TitleDescriptionSectionComponent,
    HeaderComponent,
    BreadcrumbComponent,
    TrailerComponent,
    CourseInstructorsComponent,
    CourseLayoutComponent,
    CourseLearingOutcomesComponent,
    CourseExclusiveFeaturesComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
