# Webdev Toolkit
[![Build Status](https://travis-ci.org/tobnys/webdev-toolkit-final-capstone.svg?branch=master)](https://travis-ci.org/tobnys/webdev-toolkit-final-capstone)

Link to live application: https://webdev-toolkit.herokuapp.com/

# Goal & Use Case

The goal of the application was (outside of learning) to simply bring a collection of frequently used tools for a web developer, such as lorem ipsum generation, cheat sheets and popular/common fonts for the web. I wanted to combine these "functions" into one single application that would be easily accessible on the web and easily used.

## API Documentation
### GET endpoint - ../api/functional/fonts/:sort
Retrieves fonts from the google web fonts API based on sort parameter.

### GET endpoint - ../api/functional/text
Generates and returns a text with a set amount of paragraphs based on a query option sent to the server. This endpoint uses the package called "loremIpsum" to generate the paragraphs.

### GET endpoint - ../api/functional/statistics
Retrieves statistics from a database which contains information about the application in general, for example, total amount of API calls. This is used in the application to show fun facts about the application.

# Functionality


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


# Screenshots
![image1](https://i.gyazo.com/d25de5a06546f4518a3ebfdd07314075.png)

![image2](https://i.gyazo.com/111d6234c74eb1fc1c13944427b07c17.png)

![image3](https://i.gyazo.com/9c2cb3ba45c7387a7cbfe5981f4c3235.png)
