# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./screenshot.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

1. The description only provided screenshots of the desired design so it was an extra challenge to achieve a pixel-perfect result.

2. As two optimized images were provided, one for mobile and one for desktop, I wanted to learn what was the best way to utlize them both instead of just manipulating one image. After some investigation I implemented the HTML Picture element which was an accessibility compliant solution.

```html
<picture>
  <source
    srcset="./images/image-product-mobile.jpg"
    media="(max-width: 600px)"
  />
  <img
    src="./images/image-product-desktop.jpg"
    alt="Bottle of Gabrielle Essence Eau De Parfum laying flat and surrounded by green leaves"
  />
</picture>
```

## Author

- [wavyadri](https://www.github.com/wavyadri)
