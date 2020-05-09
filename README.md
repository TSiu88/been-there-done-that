<h1 align="center">
  <a href="https://github.com/TSiu88/been-there-done-that">Been There, Done That</a>
</h1>
<h4 align="center"><em>Track your personal footprint of places you've been, Initialized 05.08.2020</em>
</h4>
<h4 align="center"><em>By: Tiffany Siu</em></h4>

<!-- [![Project Status: Inactive – The project has reached a stable, usable state but is no longer being actively developed; support/maintenance will be provided as time allows.](https://www.repostatus.org/badges/latest/inactive.svg)](https://www.repostatus.org/#inactive) -->
<!-- [![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active) -->

<p align="center">
  <a href="https://www.repostatus.org/#wip">
    <img alt="Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public." src="https://www.repostatus.org/badges/latest/wip.svg">
  </a>
  <a href="#/been-there-done-that/commits/master">
    <img alt="LastCommit" src="https://img.shields.io/github/last-commit/TSiu88/been-there-done-that">
  </a>
  <a href="#/been-there-done-that/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/tsiu88/been-there-done-that">
  </a>
  <a href="#/been-there-done-that/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/tsiu88/been-there-done-that">
  </a>
  <a href="https://lbesson.mit-license.org/">
    <img alt="MIT license" src="https://img.shields.io/badge/License-MIT-orange.svg">
  </a>
  <a href="https://linkedin.com/in/tiffanysiu88">
    <img src="https://img.shields.io/badge/-LinkedIn-linkedin.svg?style=flat&logo=linkedin&colorB=0077b5">
  </a>
</p>


---
## Table of Contents
1. [About the Project](#about-the-project)
    - [Description](#description)
    - [Notable Features](#notable-features)
    - [Known Bugs](#known-bugs)
2. [Setup/Installation Requirements](#setup/installation-requirements)
    - [Requirements to Run](#requirements-to-run)
    - [Instructions](#instructions)
    - [Other Technologies Used](#other-technologies-used)
3. [Scope](#scope)
    - [Use Cases](#use-cases)
    - [Minimal Viable Product](#minimal-viable-product)
    - [Future Product Roadmap](#future-product-roadmap)
    - [Specifications](#specifications)
    - [User Stories](#user-stories)
    - [Component Diagram/Wireframe](#component-diagram/wireframe)
    - [Database Structure](#database-structure)
4. [Screenshots](#screenshots)
5. [Testing](#testing)
6. [Support and Contact Details](#support-and-contact-details)
7. [License](#license)
---
## About the Project

### Description

Been There, Done That is a web application that tracks your personal footprint of where you've been before by being able to tag if you've been somewhere and add private notes to a place of interest on a map.

The purpose of this project is to help people keep track of places they’ve been and things that they’ve seen.  Whether it’s as simple as the restaurants they tried in the area, to major landmarks from exotic trips, it would allow people to tag a place with when it occurred and leave a note for themselves as a reminder of whatever information they want to know about a place.

### Notable Features
This project is expected to use mapbox API to display a map with custom markers and popups that can be added or removed from a personal list of tagged places.

### Known Bugs

_There are currently no known bugs in this program_

## Setup/Installation Requirements

### Requirements to Run

* _Web Browser_
* _Webpack_
* _Node.js_
* _NPM_
* _API KEY_

### Instructions

1. Download and install Node.js from the [official website](https://nodejs.org/en/download/)
2. Clone the [repository](https://github.com/TSiu88/been-there-done-that.git) from my [GitHub page](https://github.com/TSiu88)
3. Use a command line/Bash to move to the project directory with `cd project-directory-name-here`
4. Run `npm install` to get all dependencies. 
5. Run `npm run start` to start up the program 
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Other Technologies Used

#### MVP
* _HTML_
* _CSS_
* _Javascript_
* _React_
* _Redux_
* _Firestore_
* _Bootstrap 4.4.1_
* _ESLint_
* _Babel_
* _Jest_
* _Markdown_
* _Visual Studio Code_
* _Mapbox API_

#### Planned with Future Product
* _Custom markers in mapbox_
* _Material UI for more fancy styling_
* _Share buttons to connect with social media_
* _Share a tagged place with note/snapshot using a paid SMS service_
* _D3.js for data visualization_
* _Calendar integration_

## Scope

### Use Cases
Users are anyone who would like help remembering where they’ve been from world travels to local businesses.

The product focuses on private notes as memory reminders and does not focus on reviews or sharing information as its main function, though it may be possible in the future.

The product would allow all places to be tagged from businesses to points of interest and personal dropped pins.

The product will only allow editing, deleting, and viewing tagged places from the person who owns it and only viewable if shared by the person.

### Minimal Viable Product

* This application will be a web application
* It will use a Places of Interest API for place data (mapbox)
* Data will persist in a firebase database
* Have user authentication/authorization so users can log in and be only able to see their own data

### Future Product Roadmap

* Be able to group/categorize places tagged with premade or user made categories
* Be able to make personal lists of places separate of categories
* Be able to see places you’ve been before on the map as a pin
* Be able to sort/view places by proximity to current location/input location, by date, by category, etc.
* Have both public and private note options
* Have a list of most popular sites or least possible sites tagged locally or in a searched location for recommendations
* Be able to create a phone app version which works with android and apple to be used mobily 
* Clicking on places pops up other information like address, phone, hours, pics, reviews, etc. as well as the button to check that you’ve been there
* Be able to deploy this site and/or mobile app
* Be able to share notes/places with other people through posting to other ways/ social media sites like facebook, texting, etc.
* After adding a place to your list of havebeens, can add snapshots (photo and limited text) to remember or share a memory of a place
* Data Visualization of overall areas places tagged in the app with D3.js, darker when more tags in the area
* Calendar integration to be able to view tags/notes by when they were added on a calendar
* Trip planner/trip maker to route between sites/tour between sites in a category/list


### Component Diagram/Wireframe

<img src="./public/component-diagram-wireframe.png">

<details>
  <summary>Click to expand to view Initial Wireframes/Prototypes</summary>

  Wireframe of Home Page When not Signed
  <img alt="Wireframe on home page not signed in" src="./public/initial-wireframe2.png">

  Wireframe of Search and map section
  <img src="./public/initial-wireframe1.png">
</details>

### Database Structure

<img src="./public/data-structure.png">

### Specifications

<!-- * _List of features the program should do, from simplest to more complex, handling all possible cases.  Can do as text or put in table, with example input and output -->

<!-- <details>
  <summary>Click to expand to view Specifications</summary>

| Specification | Input | Output |
| :-------------     | :------------- | :------------- |
| The program displays welcome message and menu with prices | Application start | Welcome message and menu displayed |
| The program displays special deals in readable format | Application start | Special deals displayed ("Buy 2, get 1 free" "3 for $5") |
| The program takes input of user that is not an integer, then assume 0 ordered | Bread="aaa", Pastry="" | Bread=0, Pastry=0 |
| The program takes number of loaves of bread and pastries and displays totals | Bread=4, Pastry=4 | Bread=$20, Pastry=$8, Total=$28 |
| If input qualifies for special deals, costs calculated using discounted price | Bread=3, Pastry=3 | Bread=$10, Pastry=$5, Total=$15 |

</details> -->

### User Stories
<!-- <details>
  <summary>Click to expand to view User Stories </summary> -->

<!-- * As a scheduler, I want to be able to organize nurses vacation schedules without much paperwork so that I can be more efficient.
* As a scheduler, I want to see a list of requests with the overlapping dates and the nurses that sent in the requests organized by priority so I can see which staff member should have priority in getting the request approved. -->

<!-- * Give stories for people who will use this project and what they'd want it to do.  Can include customers/end users, programmers that maintain code, etc. Use "As a <job title/type of user/etc>, I want to...<what want program to achieve>... so that I can...<reason>.-->
<!-- </details> -->

## Screenshots

<!-- _Here is a snippet of what the input looks like:_

![Snippet of input fields](img/snippet1.png)

_Here is a preview of what the output looks like:_

![Snippet of output box](img/snippet2.png) -->

<!-- <details>
  <summary>Expand to view More Screenshots </summary>

  ![Snippet of input fields](img/snippet3.png)


</details> -->

<!-- _{Show pictures using ![alt text](image.jpg), show what library does as concisely as possible but don't need to explain how project solves problem from `code`_ -->

## Testing
_Tests are done through Jest along with using ESLint and are run from the command line prompt with `npm test`._

<!-- _Some example tests:_

![Snippet of an example test](img/tester1.png)

![Snippet of an example result](img/tester2.png) -->

<!-- _describe and show how to run tests with `code` examples}_ -->

## Support and contact details

_If there are any question or concerns please contact me at my [email](mailto:tsiu88@gmail.com). Thank you._

## License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Tiffany Siu_**
