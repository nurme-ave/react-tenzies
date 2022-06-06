# Tenzies - React App

This is a project built at my Scrimba React course with Bob Ziroll.

## Table of contents

- [Overview](#overview)
  - [Project Description](#project-description)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### Project Description

Tenzies is a game where you roll the dice and you need to get all the dice on the same number.

We were practising building the game logic using useState(), useEffect() and conditional rendering. We also added Nano ID for generating random ID's since React requires keys with unique ID's when creating lists of elements. In addition, we also implemented the Confetti component to draw falling confettis when the user has won the game.

Features I added myself:
- track the number of rolls
- save the lowest number of rolls into the localStorage
- add a RESET button in case the user wishes to start the game over

New things learned:
- the every() JS method which checks if all the dice held have the same value
- the some() JS method which checks it at least one of the dice is held
- conditional rendering
- Nano ID & Confetti component
- you can use useEffect() not only to perform side effects but to synchronize states

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
