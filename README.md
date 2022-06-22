# Tenzies - React App

Tenzies is a game where you roll the dice and you need to get all the dice on the same number.

## Table of contents

- [Overview](#overview)
  - [Project Description](#project-description)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### Project Description

In this React project I'm utilizing the useState hook to keep track of the changes of the dice, the number of rolls in each game, and also the lowest number of rolls. The latter is saved in localStorage for which I am using a custom hook. I'm also making use of the useEffect hook to synchronize states and check if the game is over or not. In useEffect the JavaScript every() method was useful which checked if all the dice held have the same value.

Since React requires keys with unique ID's when creating lists of elements I installed NanoID which is a unique string ID generator for JavaScript.

The app will not start counting the rolls unless at least one die is held. The JavaScript some() method came handy here which checks exactly that. 

When the player has managed to get all the dice on the same number the Confetti component draws falling confettis on the screen :). You're welcome to play and try your luck! :)

The page has been built with mobile-first design in mind and is fully responsive.

### Screenshot

![Screenshot of my solution](/src/images/tenzies_760.png)

### Links

- Live Site URL: [Vercel](https://react-tenzies-orpin.vercel.app/)

### Built with

- ReactJS

## Author

- Website - [Ave Nurme](https://www.avenurme.dev)
- Twitter - [@ave\_nurme](https://twitter.com/ave_nurme) - Follow me doing my 3rd round of the 100DaysOfCode challenge!
- Linkedin - [Ave Nurme](https://www.linkedin.com/in/ave-nurme)
- YouTube - [Ave Nurme](https://www.youtube.com/channel/UC_kKIEE66Wa5bAxjqoI1A8w/videos)
- Github - [@nurme-ave](https://github.com/nurme-ave)
- Frontend Mentor - [@nurme-ave](https://www.frontendmentor.io/profile/nurme-ave)
