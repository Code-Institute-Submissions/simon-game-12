# **Simon Game**

## **Table of Contents**

- [**Simon Game**](#simon-game)
	- [**Table of Contents**](#table-of-contents)
	- [**CI Brief**](#ci-brief)
	- [**UX**](#ux)
		- [General Design](#general-design)
		- [Requirements](#requirements)
	- [**Features**](#features)
		- [Existing Features](#existing-features)
		- [Features left to implement](#features-left-to-implement)
	- [**Technologies Used**](#technologies-used)
	- [**Testing**](#testing)
		- [Tools used for testing](#tools-used-for-testing)
	- [**Changelog and Fixes**](#changelog-and-fixes)
		- [0.0](#00)
		- [0.1](#01)
		- [0.2](#02)
		- [0.3](#03)
	- [**Deployment**](#deployment)
	- [What could be done better?](#what-could-be-done-better)
	- [**Credits**](#credits)

<hr />

Hello there,  
and welcome to my second [Code Institute (CI)](https://courses.codeinstitute.net/) school project.
In this project I should be able to show that I can work with HTML, CSS and JS as well as create responsive design which works on commonly used devices.

I decided to follow the given example from CI for this project and create a simple **Simon Game**.

<hr />

## **CI Brief**

- **CREATE A SINGLE PAGE APPLICATION THAT RELIES HEAVILY ON ONE OR MORE APIS**
  - Create a site that calls on the Google Maps API and/or the Google Places API (or similar) to allow users to search for their next holiday destination. You'll want help your users:
    - Select a destination city
    - Find tourist attractions
    - Find accommodation
    - Find bars and restaurants
    - Provide search results in a manner that is visually appealing for your user (by drawing on the skills you have learned in User-Centric Frontend Development)

- **CREATE A MEMORY GAME (my choice)**
  - Build a simple single-player memory game inspired by Simon.
  - Check out this short video and Wikipedia entry to understand the rules of the game
  - Provide details in your README.md of the logic you have used to build your game as well as an explanation of how you tested your logic

- **CREATE A DATA DASHBOARD**
  - Build a data dashboard that visualizes a dataset of your choice
  - Your data can be stored locally (e.g., in a js file) or sourced from an API
  - Visualise your data using D3.js and dc.js

- **CREATE YOUR OWN PROJECT**
  - If you choose to create your project, the scope should be similar to that of the example brief above. If you want some ideas, please ask your mentor for advice and direction.

[**To top**](#Table-of-Contents)

<hr />

## **UX**

### General Design

Design | Importance
--- | ---
Functionality | 6
User experiences | 6
HTML / CSS | 3

**The project general idea is for entertainment purpose only.**

- create an application which feels good for the user

### Requirements

- **Welcome page**
  - Something
- **Statistics page**
  - Something

[**To top**](#Table-of-Contents)

<hr />

## **Features**

Something

### Existing Features

- Something

### Features left to implement

- add script to resize the game when user change to landscape
- save / load (localStorage)
- sound on/off
- difficulties
  - normal (10)
  - medium (15)
  - hard (20)
- statistics

[**To top**](#Table-of-Contents)

<hr />

## **Technologies Used**

- [Bootstrap v4.0.0](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
  - The project uses **Bootstrap** to speed up the development.
- [Font Awesome v5.3.1](https://fontawesome.com/)
  - The project uses **Font Awesome** for icons.
- [JQuery v3.2.1](https://blog.jquery.com/2017/03/20/jquery-3-2-1-now-available/)
  - The project uses **JQuery** for better user experiences as well as to speed up the development.

[**To top**](#Table-of-Contents)

<hr />

## **Testing**

The project has been tested on commonly used devices and browsers such as:

- Desktop PC

- Tablets

- Mobiles

### Tools used for testing

- **Front End**
  - [W3C Markup Validation Service](https://validator.w3.org/) (All pages)
    - Document checking completed. No errors or warnings to show.

  - [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) (All pages)
    - Something
  - [JSHint](https://jshint.com/) (Report of all custom JS functions)
    - Something

[**To top**](#Table-of-Contents)

<hr />

## **Changelog and Fixes**

*[Git](https://git-scm.com/) has been used for version control.*

- There are XXXXXXXXXXXX different branches:

  - [master branch](https://github.com/MiroslavSvec/simon-game/tree/master) Used in production.
  - *XXXXXXXXXXXXX other branches has been created for development purpose only. Where each branch represent different version of the application.*

### 0.0

- **Changelog**
  - Added basic file structure
  - Added basic skeleton for the game

### 0.1

- **Changelog**
  - separated JS to multiple files for better readability
    - [simon.js](/static/js/custom/simon.js) *Game functionality*
    - [main.js](/static/js/custom/main.js) *General functions / Document ready / Events Listeners*
    - [saves.js](/static/js/custom/saves.js) *Functions to work with localStorage*
  - [index.html](/index.html)
    - added `#game-overlay` section for user menu
- **Fixes**
  - `simon_layout()` is not executed every time the user change the size of the screen to prevent unxpected layout *For example when user change to landscape on mobile devices*

### 0.2

- **Changelog**
  - [index.html](/index.html)
    - restyled the game base on user feedbacks
    - changed the ID's of `#game-col-` to match JS build in `.random()`
  - [screens.css](/static/css/custom/screens.css)
- **Fixes**
  - fixed issue with containers ID's as JS was not resizing them properly as there was not element with `#game-col-0` or `#game-col-4` no longer
  
### 0.3

- **Changelog**
  - [saves.js](/static/js/custom/saves.js)
    - added basic structure for creating new game data or `.push()` new game data to existing `simon_save` in `localStorage`
  - [templates.js](/static/js/custom/templates.js)
    - added for holding HTML templates
  - [main.js](/static/js/custom/main.js)
    - added `js_alerts()` animation
  - [index.html](/index.html)
    - added skeleton for game menu to `#game-menu`
    - added new game form to `#game-overlay` (`new_game_template()`)
A
[**To top**](#Table-of-Contents)

<hr />

## **Deployment**

The project has been deployed to GitHub Pages  - [Simon Game](https://miroslavsvec.github.io/simon-game/)

[**To top**](#Table-of-Contents)

<hr />

## What could be done better?

- Something

[**To top**](#Table-of-Contents)

<hr />
  
## **Credits**

**Special thanks to:**

- everyone for finding few minutes to test the project!  

  All of you gave me constructive feedback which made the project better 😊

[**To top**](#Table-of-Contents)A