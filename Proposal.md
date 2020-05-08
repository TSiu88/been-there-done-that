# Been There, Done That Capstone Proposal
### By: Tiffany Siu, Submitted 5/5/2020

## Description
Been There, Done That is a website that tracks your personal footprint of where you've been before by being able to tag and add private notes to a place of interest on a map.

## Use Case
The purpose of this project is to help people keep track of places they’ve been and things that they’ve seen.  Whether it’s as simple as the restaurants they tried in the area, to major landmarks from exotic trips, it would allow people to tag a place with when it occurred and leave a note for themselves.

Users are anyone who would like help remembering where they’ve been from world travels to local businesses.

The product focuses on private notes as memory reminders and does not focus on reviews or sharing information as its main function, though it may be possible in the future.

The product would allow all places to be tagged from businesses to points of interest and personal dropped pins

The product will only allow editing, deleting, and viewing tagged places  from the person who owns it and only viewable if shared by the person

## Minimum Viable Product
 * This application will be a web application
 * It will use a Places of Interest API for place data (mapbox)
 * Data will persist in a firebase database
 * Have user authentication/authorization so users can log in and be only able to see their own data

### Tools for MVP
 * VisualStudio Code
 * React front end 
 * Eslint, Jest for testing
 * Attempt to use Mapbox Place Search for API, back ups: mapquest, foursquare APIs
 * Use firebase’s firestore to create database due to scalability and easy authentication implementation in the future
 * Use firestore for authentication/authorization of users

## Additional Features

 * Be able to group/categorize places tagged with premade or user made categories
 * Be able to see places you’ve been before on the map as a pin
 * Clicking on places pops up other information like address, phone, hours, pics, reviews, etc. as well as the button to check that you’ve been there
 * Be able to sort/view places by proximity to current location/input location, by date, by category, etc.
 * Be able to share notes/places with other people through posting to other ways/ social media sites like facebook, texting, etc.
 * Have both public and private note options
 * Be able to create a phone app version which works with android and apple to be used mobily 
 * After adding a place to your list of havebeens, can add snapshots (photo and limited text) to remember or share a memory of a place
 * Have a list of most popular sites tagged locally or in a searched location
 * Trip planner/trip maker to route between sites/tour between sites in a category/list
 * Be able to deploy this site (if only for the experience)
 * Data Visualization of overall areas places tagged in the app with D3.js, darker when more tags in the area

### Tools for Additional Features
 * Use mapbox to create custom markers and show additional info
 * Use free share buttons to share info to social media like sharethis, niftybuttons, addthis, addtoany, etc.
 * Use paid SMS service to send texts like TextMagic, SimpleTexting, Salesmsg, or Twilio
 * Calendar integration to view information on a calendar by date
 * Use react material UI library for UI if have time, Bootstrap if not enough time for styling
 * Add additional code for categories, sorting, multiple types of notes and multiple entries for a place in C#/react
 * D3.js for data visualization
