# IeltsCourseApp

## Overview
This repository contains the Angular implementation of a IELTS Course app called `IeltsCourseApp`. This app uses `TailwindCSS` for styling UI and `TypeScript` for other functionalities. The app features include -

- Title
- Description
- Course instructors
- Product trailer
- CTA text
- Localization
- How the course is laid out
- What you will learn by doing the course 
- Course Exclusive Feature 
- Course details 
- Check List

## Code Structre
The code structure in this project is organized into different components, interfaces and services to create the IELTS Course app. Here's a brief description of each major part of the code structure:

**Components:**
- `header`: Navbar, only used for the beautification for the app.
- `ielts-course-details`: This is the main component of the application, responsible for rendering the IELTS course details page. It serves as the entry point for the course details view.
- `breadcrumb`: This component displays the breadcrumb navigation, helping users navigate through different sections of the IELTS course details in mobile view.
- `title-description-section`: This component manages the title and description section.
- `course-instructors`: This component presents information about the course instructors, including their profiles and expertise.
- `course-layout`: This component displays the course layout or structure, showing how the content is organized.
- `course-learning-outcomes`: This component outlines the expected learning outcomes for the course.
- `course-exclusive-features`: This component highlights exclusive features of the course, emphasizing what sets it apart from others.
- `course-details`: This component focuses on rendering the requirements of the IELTS course.
- `trailer`: This component allows users to view a trailer or promotional video related to the IELTS course.

**Interfaces:**
- `iData.ts`: This is an interface used to define the data structure that the application uses. It helps ensure consistency in the data being passed around the application.

**Services:**
- `main service`: This service handles the connection to the API, fetching data related to the IELTS course details.
- `language.service`: This service manages language-related functionality, particularly for handling English and Bangla language preferences.

Overall, this code structure separates the application into reusable components that focus on specific aspects of the IELTS course details. It also uses interfaces to define the data structure and services to handle data retrieval and language-related functionality. This structured approach makes the code more modular and maintainable, allowing for easy development and future enhancements.

## Run Locally
To run the project locally follow the steps :point_down:
- Clone the repository.
- Install Node.js
- Install Angular CLI `npm install -g @angular/cli`
- Run `npm install`
- Run `ng serve/ng s`
- The app should be running at [http://localhost:4200/](http://localhost:4200/).

## Preview
![screen-recording](https://github.com/aranishawkat/10ms-frontend-challenge/assets/27910097/0170abdc-7a69-47d7-91fb-654e9774b631)
