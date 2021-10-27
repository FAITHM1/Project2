# Project 2

#### Faith Musa

## Project Summary

This is a fashion jornal app. That allows the users to write and share a pieces of clothing items that they would like to have.

## Models

the name of the item, the item type (top, botttoms etc), date it was made(optional), description (optional), and a image of the item.
List here any models in your app and their properties

## Route Table

List your routes in a table

| url             | method | action                                                     |
| --------------- | ------ | ---------------------------------------------------------- |
| /entry          | get    | get all fahion entries(index)                              |
| /entry/:id      | get    | get a particular entry (show)                              |
| /entry/new      | get    | renders a form to add a new entry(new)                     |
| /entry          | post   | creats a new entry(create)                                 |
| /entry/:id/edit | get    | renders a form to edit the entry that matches the id(edit) |
| /patterns/:id   | put    | updates the entry that matches the id(update)              |
| /entry/:id      | delete | deletes an entry that matches the id(delete)               |

## User Stories

as a user I want to be able to have an option to click on a button and be able to add a new entry or be able to edit an existing entry.

## Challenges

- comming soon

## List of Technologies

- html
  -css
  -jquery
  -mongoDB and mongoosee
  -express and node.js

## If i have time

- add authorization and authentication to my app(would have to create a second model)
- be able to see the users username
- user should be able to have the option of displaying their item on a public page or on their page.
