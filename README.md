# Project-0---Racing-Game

<!--
Creator: <Name>
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)


***** READ ME *****
Below is the pseudo code outline of the car race game. Still need more details under the "Development Stories" section.


#Training: Model a Game with OOP


You've learned about OOP, but let's look at how to **incorporate ojbect oriented programming patterns into a web site**.  This document has an example of how we might approach making a car race game.

### User Stories & Game Mechanics
1. User 1 controls Car 1
2. User 2 controls Car 2
3. Users control speed of cars using keyboard
4. Users control direction of cars using keyboard
5. First user to cross finish line wins


### Data Structures for "Car Race" (Independent Practice)

Work with a partner to list some properties and methods of car and the game itself.

* List the type of each property (number, boolean, `Car`, etc.).
* List the parameters that each method will take.
* Don't forget a constructor!

**Cars**
  - `CarImage` (string)
  - `winsRace` (boolean)
  - `movesForward()` (Function - move car forward)
  - `movesBackward()` (Function - move car backward)
  - `Car(options)` (Function - constructor, create a car based on options like what the image should be)

**Game**
  - `cars` ([Cars])
  - `move forward` (Function)
  - `move backward` (Function)
  - `hasWon()` (Function - check if the game has been won!)
  - `start()` (Function - starts the game)
  - `reset()` (Function - resets the game)



### Development Stories

1. A user can see a track and 2 cars.
  * Create HTML structure to display cars and track on screen (Handlebars?).
  * Ensure that cards start out in start position  (in `Card` constructor?).

2. Either user can select START to begin countdown clock (3-2-1-GO)


3. Once game starts, both players can use keyboard to advance cars forward and backward.

5. First car to reach finish line wins.


###Potential Challenges / Development Questions

1. How to play victory song for winner


### Deliverable

Design user stories, data structures, development stories, and potential challenges for a **racing game** in which two players use the keyboard to control "cars" that race across the screen.

Here are some popular bonus features that would affect your data structure plan:

1. How would you make your player's "cars" use custom images?
2. Can a player type in their name to see custom win messages?
3. Can you enable a reset button to restart the race?
4. How about a win counter that spans across multiple races?

As you work, you can edit this README to add a section at the top with your name, a link to the original repository, and a 3-5 sentence reflection on completing this assignment. Push your updates to GitHub and add a link to the repo to the "My Work" section of your website!
