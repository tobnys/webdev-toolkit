# Webdev Toolkit
[![Build Status](https://travis-ci.org/tobnys/webdev-toolkit-final-capstone.svg?branch=master)](https://travis-ci.org/tobnys/webdev-toolkit-final-capstone)

Link to live application: https://webdev-toolkit.netlify.com/

# Goal & Use Case

The goal of the application was (outside of learning) to simply bring a collection of frequently used tools for a web developer, such as lorem ipsum generation, cheat sheets and popular/common fonts for the web. I wanted to combine these "functions" into one single application that would be easily accessible on the web and easily used.

Currently, the main functionalities of the site is for example the lorem ipsum generator, which uses a 3rd party API to generate a string or a paragraph given a set amount of settings. Initially I tasked myself to create my own custom generator that would have a database filled with strings that would in turn generate a proper sentence (that would actually make sense), but being that I had a set deadline for this project I decided to descope it down further and use a common API for it instead in the form of an NPM package.

## API Documentation
### GET endpoint - ../api/functional/fonts/:sort
Retrieves fonts from the google web fonts API based on sort parameter.

### GET endpoint - ../api/functional/text
Generates and returns a text with a set amount of paragraphs based on a query option sent to the server. This endpoint uses the package called "loremIpsum" to generate the paragraphs.

### GET endpoint - ../api/functional/statistics
Retrieves statistics from a database which contains information about the application in general, for example, total amount of API calls. This is used in the application to show fun facts about the application.

# Technical stack

**Front-end**
 * HTML5
 * CSS3
 * JavaScript
 * jQuery 
 * Web Font Loader
 
**Back-end**
 * NodeJS
 * Mongoose / MongoDB
 * Heroku (hosting)
 * Axios

**Testing**
 * Mocha & Chai
 * TravisCI
 
**Responsiveness**
 * The site is fully responsive on most mobile & laptop devices.
 * Tested on Chrome, Firefox & Safari.
 
**Security**
 * Passport
 * Bcrypt

# Screenshots
![image1](https://i.gyazo.com/d25de5a06546f4518a3ebfdd07314075.png)

![image2](https://i.gyazo.com/111d6234c74eb1fc1c13944427b07c17.png)

![image3](https://i.gyazo.com/9c2cb3ba45c7387a7cbfe5981f4c3235.png)

# User Stories
User stories as visitor & wireframes
![image1](https://raw.githubusercontent.com/tobnys/webdev-toolkit-final-capstone/master/github-images/landingpage.png)

# Development Roadmap

Planned additional features and improvements will allow users to:

Be presented with motivational quotations that appear at random on their homepage.
Enter and store compliments they receive from friends, co-workers, bosses, etc. in a "Bank"; and
Refer back to these compliments (that help them to see that they are qualified and skilled) by viewing the "Bank."
Change password
Update email address

