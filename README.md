# lunchtime

Are you hungry but can't decide what to eat for lunch? Let's help you out and create a random lunch idea generator.

## Objective
Use **Arrays** to store information about possible lunch choices in **Objects**. Use **Math.Random** to randomize a lunch option on click of a button and change the **innerHTML** and image source.

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of HTML structures and attributes.
* Basic understanding of JavaScript and DOM.

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* JS file
3. Link all of your files correctly.
4. Develop the structure of the page in your HTML. You will need at least  the following on your page:
* A section to hold the image and text.
* An image
* A paragraph section to store text
* A button

### Part II
To complete Part II, fulfill the following requirements:
In your JS file:
1. Store the image, text area, and button in variables.
2. Create 5 objects. Each object represents a lunch option. The objects should have the following properties:
* imagesrc
* name
* adjective
* verb

Note: Each property value should be in the form of a ```String```. THe imagesrc value can be obtained by right clicking on the image you want from the browser and selecting Copy Image Address.

### Part III
To complete Part III, fulfill the following requirements:
In your JS  file:
1. Create an array that stores all of your objects.
2. Add an ```Event Listener``` to your button for a click function.
3. On click of your button:
* Store a random number in a variable. The random number should be a whole number that is less than 5.
* Change the source of the current image to the randomized object's image source.
* Change the innerHTML of the text area to display a string that has the random object's verb, adjective, and name in one sentence. For example, the string could say something like "Munch crunchy chicken!".

### Stretch Goals
1. Make the web application applicable to breakfast lunch and dinner! Create breakfast, lunch, and dinner options that a user can select. Upon selecting this option, the button should return a randomized option for specifically breakfast, lunch, or dinner.
2. Add a location property to your objects. The location property will hold a string value that states where you could eat this food at (e.g. "KFC!", "McDonalds"...etc.). Display this location in the text's innerHTML when the button is clicked.
