# ExamProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

# About Project

This application was created to demonstrate an application built with Angular that interacts with a backend REST server including CRUD operations, authentication, routing and more. You can find it on https://github.com/jujulina1/Angular-Exam.

# How it works

I have a REST server for the application to make requests against running at https://http://localhost:3000, which source code (available for Node) can be found in my repo on https://github.com/jujulina1/Rest-Server-for-Angular-Exam. You can view the API spec here which contains all routes & responses for the server.

## Getting started

Make sure you have the Angular CLI installed globally. 

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Building project

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Functionality overview

The application is for viewing and managing car listings. It allows visitors to browse through different car ads. Users may register with a username and password, which allows them to create their own ads. Authors can also edit or delete their own publications at any time.


## General functionality:

Authenticate users via JWT (login/register pages + logout button)
CRU* users (sign up & settings page - no deleting required)
CRUD Ads

## The general page breakdown looks like this:

Home page (URL: /#/ )
All users should be welcomed by the Home page, where they could redirect to the Listings view.

Catalog page (URL: /#/data/catalog)
This page displays a list of all listings in the system. Clicking on the details button in the cards leads to the details page for the selected listing.

Details page (URL: /#/data/details/:carId)
All users should be able to view details about listings. Clicking the Details link in the car ad should display the Details page. If the currently logged-in user is the creator of the listing, the Edit and Delete buttons should be displayed.

Register/Login pages (URL: /#/auth/login, /#/auth/register )
Uses JWT (store the user in AuthService like AuthService.user, that contains
   _id: string,
    username: string,
    email: string,
    gender: string,
    accessToken: string (JWT)
)
After setting the AuthService.user, you must to set the AuthService.isLoggedIn to true. In case that there is no user the static property AuthService.isLoggedIn has to be false.

The Register page contains a form for new user registration. By providing a username, password and gender, the app should register a new user in the system if there are no empty fields, the username should be at least 5 characters and the password should be at least 6 symbols.

The Login page contains a form for existing user authentication. By providing a username and password, the app should login a user in the system if there are no empty fields, the username should be at least 5 characters and the password should be at least 6 symbols.

By Year page (URL: /#/data/year)
This page allows users to filter listings by their production year by descending order.

Edit page (URL: /#/data/edit/:carId)
The Edit page is available to logged-in users and it allows author to edit their own listings. Clicking the Edit link of a particular listing on the Details page should display the Edit page. It contains a form with input fields for all relevant properties. Check if all the fields are filled, the description should be at least 12 characters, the car image should be starts with http:// or https://, and the year should be between 1990 and 2023 before you send the request.

Create page (URL: /#/data/create/:carId)
The Create page is available to logged-in users. It contains a form for creating new listings. Check if all the fields are filled, the description should be at least 12 characters, the car image should be starts with http:// or https://, and the year should be between 1990 and 2023 before you send the request.

Delete car button (only shown to car's author) (URL: /#/data/delete/:id)
The delete action is available to logged-in users, for listing they have created. When the author clicks on the Delete action on any of their listing a confirmation window for deleting the listing  from the system should be displayed.

My Listing page (URL: /#/data/mycars)
This page displays a list of all listings made by the current user.

My profile button (URL: /#/auth/profile/:userId)
This button is available only for logged-in users.
When the profile button is clicked, My profile page will be reloaded. It will be shown User Info, that contains profile avatar (it depends on the gender), the current user's username, email, gender and edit button. By clicking this button the user will be able to edit their profile.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Contact

Git Hub: https://github.com/jujulina1
Email: zvetipeneva83@gmail.com
LinkedIn Link: https://linkedin.com/in/tsveti-peneva-566497228
