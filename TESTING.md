# Testing

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2FEfthymiaKakoulidou.github.io%2Fhigher-wins%2Findex.html) | ![screenshot](documentation/html-validation-home.jpg) | No errors or warnings |
| Game page | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2FEfthymiaKakoulidou.github.io%2Fhigher-wins%2Fcontact.html) | ![screenshot](documentation/html-validation-game-page.jpg) | No errors or warnings |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2FEfthymiaKakoulidou.github.io%2Fhigher-wins) | ![screenshot](documentation/css-validation-style.jpg) | Pass: No Errors |


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/js-validation-script.jpg) |  |


## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home | Game page 1 | Game page 2 | Game page 3 | Notes |
| --- | --- | --- | --- | --- | --- |
| Chrome | ![screenshot](documentation/browser-chrome-home.jpg) | ![screenshot](documentation/browser-chrome-game-page1.jpg) | ![screenshot](documentation/browser-chrome-game-page2.jpg) | ![screenshot](documentation/browser-chrome-game-page3.jpg) | Works as expected |
| Firefox | ![screenshot](documentation/browser-firefox-home.jpg) | ![screenshot](documentation/browser-firefox-game-page1.jpg) | ![screenshot](documentation/browser-firefox-game-page2.jpg) | ![screenshot](documentation/browser-firefox-game-page3.jpg) | Works as expected |
| Edge | ![screenshot](documentation/browser-edge-home.jpg) | ![screenshot](documentation/browser-edge-game-page1.jpg) | ![screenshot](documentation/browser-edge-game-page2.jpg) | ![screenshot](documentation/browser-edge-game-page3.jpg) | Works as expected |


## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Home | Game Page 1 | Game Page 2 | Game Page 3 | Notes |
| --- | --- | --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/responsive-mobile-home.jpg) | ![screenshot](documentation/responsive-mobile-game-page1.jpg) | ![screenshot](documentation/responsive-mobile-game-page2.jpg) | ![screenshot](documentation/responsive-mobile-game-page3.jpg) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsive-tablet-home.jpg) | ![screenshot](documentation/responsive-tablet-game-page1.jpg) | ![screenshot](documentation/responsive-tablet-game-page2.jpg) | ![screenshot](documentation/responsive-tablet-game-page3.jpg) | Works as expected |
| Desktop | ![screenshot](documentation/responsive-desktop-home.jpg) | ![screenshot](documentation/responsive-desktop-game-page1.jpg) | ![screenshot](documentation/responsive-desktop-game-page2.jpg) | ![screenshot](documentation/responsive-desktop-game-page3.jpg) | Works as expected |
| iPhone 13 | ![screenshot](documentation/responsive-iphone-home.jpg) | ![screenshot](documentation/responsive-iphone-game-page1.jpg) | ![screenshot](documentation/responsive-iphone-game-page2.jpg) | ![screenshot](documentation/responsive-iphone-game-page3.jpg) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse-home-mobile.jpg) | ![screenshot](documentation/lighthouse-home-desktop.jpg) | Some minor warnings |
| Game Page | ![screenshot](documentation/lighthouse-game-page-mobile.jpg) | ![screenshot](documentation/lighthouse-game-page-desktop.jpg) | Some minor warnings |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Fix | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Home | | | | | |
| | Start button expected to start the game | Tested by clicking on it | The feature behaved as expected| Test concluded and passed | ![screenshot](documentation/feature01.png) |
| Game Page | | | | | |
| | "No" button expected to continue to game without changes| Tested the feature clicking on it | It reacted as expected | Test passed | ![screenshot](documentation/feature02.png) |
| | Clicking on the pile card | Expected to proceed to game and replacing the lowest card | The feature had a transition of 0.5s and that caused for the card to stay put on the screen for 0.5s when it should disappear | Took away the time transition | ![screenshot](documentation/feature03.png) |
| | Clicking on each of the player's card | Clicking on cards| Expected to make the card disappear and reappear on the game area and make the card the computer has chosen and the value that it has appear on the game area | Worked as exepcted | ![screenshot](documentation/feature04.png) |
| | Clicking on the last card of the player's hand | expected to do the function as any other card and have a delay before the message of winning or losing appears| Worked as expected | Test concluded and passed | ![screenshot](documentation/feature05.png) |


| Page | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| Game Page | | | | |
| | Click on Home | Redirection to Home page | Pass | |
| | Click refresh button | Refresh the page | Pass | |


## Bugs

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bug02.png)

    - To fix this, I added a line of code to the beginning of the script.

## Unfixed Bugs


- On the iphone 13 the text on the first card of the pile of cards is blue. It doesn't appear like that on the devtools mobile mode. It actually looks more like clickable text with the blue colour but does not match the rest of the layout's colours.

    ![screenshot](documentation/bugs-iphone-game-page1.jpg)

There are no other remaining bugs that I am aware of.
