# Burger Logger

I made a webpage application that lets the user add burgers they would like to eat.

https://dansburgers.herokuapp.com/

![Burger Home](/public/assets/img/homepage.png)

## Table of Contents

* [Description](#description)
* [Technologies Used](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Acknowledgements](#acknowledgements)

## Description

![Burger Logger](/public/assets/img/useBurgerLogger.gif)

This full-stack web application allows the user to input a burger they would like to eat. When they add a burger it will be saved in the Available Burgers section on the left side of the page. User can then press the Eat it! button which will move the burger to the Burgers Eaten column on the right side.

## Technologies Used

This application was developed with MySQL, Node, Express, and Handlebars using the MVC design concept.

Model: An ORM was created to interface with the MySQL database to Create, Read, and Update\
View: Handlebars was used to render the HTML from the server\
Controller: Express was used for the route handling

## Installation

To install the necessary dependencies run npm i on the command line.\
User will need to create a .env file and enter their environment variables\
Finally copy the schema and seed data into MySQL and run to create the database\
Now application is ready to use!

## Usage

Go to https://dansburgers.herokuapp.com/ in your browser.

Enter any burgers you want to eat in the Burger Name field under Add a Burger.

Click on the Eat it! button to see the burger in the Burgers Eaten column.

## Acknowledgements

I would like to thank UW Coding bootcamp. Special shoutout to tutor Namita Shenai, instructor John Young and TA's Abdul Aziz and Ben Vaagen.