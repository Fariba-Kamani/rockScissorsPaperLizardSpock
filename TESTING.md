# Rock, Scissors, Paper, Lizard, Spock -  Testing

![Rock, Scissors, Paper, Lizard, Spock shown on a variety of screen sizes](assets/images/responsive.png)

Visit the deployed site: [Rock, Scissors, Paper, Lizard, Spock](https://fariba-kamani.github.io/rockScissorsPaperLizardSpock/)

- - -

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [JavaScript Validator](#javascript-validator)
  * [Lighthouse](#lighthouse)
    * [Desktop Results](#desktop-results)
    * [Mobile Results](#mobile-results)
  * [Accessibility Testing](#accessibility-testing)
  * [Responsive Testing](#responsive-testing)
* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)
    * [The Common Features](#the-common-features)
    * [The Login Phase](#the-login-phase)
    * [The Game Phase](#the-game-phase)
    * [The final result phase](#the-final-result-phase)
    * [The 404 Error Page](#the-404-error-page)

Testing was ongoing throughout the entire project development. Chrome DevTools was used while building to find and resolve any issues that arose and to ensure that everything was working correctly as expected. The same tools were also employed to verify that the project is responsive, visually appealing, and functions as intended on all standard screen sizes. 
The website has been tested on the following browsers: Chrome, Microsoft Edge, and Safari. Additionally, I tested the project on a VivoBook Asus laptop, iPhone 13, and iPhone 14. Furthermore, a few friends conducted additional testing on both Android and iOS mobile devices. 

### Automated Testing

#### W3C Validator

  - HTML: No errors were returned for index.html and 404.html when passing through the official [W3C validator](https://validator.w3.org/).

  - CSS: No errors were found for style.css when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/).

#### JavaScript Validator

[JSHint](https://jshint.com/) was used to validate the JavaScript code. No errors were found for script.js when passed through JSHint.

#### Lighthouse

I used Lighthouse within Chrome DevTools to test the performance, accessibility, best practices, and SEO of the website. I have included the test results below.

##### Desktop Results

* Home page

    ![index.html](assets/images/lighthouse-desktop.png)
  
* 404 error page

    ![404.html](assets/images/404-error-page-lighthouse-desktop.png)

##### Mobile Results

* Home page

    ![index.html](assets/images/lighthouse-mobile.png)

* 404 error page

    ![404.html](assets/images/404-error-page-lighthouse-mobile.png)

#### Accessibility Testing

[WAVE](https://wave.webaim.org/), a web accessibility evaluation tool, has been used to test the accessibility of both index.html and 404.html. No errors were found.

  * [index.html](assets/images/accessibility-evaluation-home-page.png) - No errors found.

  * [404.html](assets/images/accessibility-evaluation-404-error-page.png) - No errors found. One alert due to adjacent links going to the same URL.

#### Responsive Testing

Besides the Chrome DevTools, I also used [Responsive Web Design Checker](https://responsivedesignchecker.com/) to assess my website's responsiveness. The tool offers a range of screens in different sizes to check compatibility and responsiveness. Unfortunately, it couldn't test all features of my website, limiting my tests to the login phase of the home page and the 404.html page. The login phase worked fine in all available screen sizes. The 404.html page performed well on most screens except on mobile screens: Apple iPhone 3/4/4s (320 x 480) and Apple iPhone 5/5s (320 x 568), where the 404 error message area stretched down and overlapped the footer.

### Manual Testing

#### **Testing User Stories**

  * First Time Visitors

    | Goals | How are they achieved? |
    | :--- | :--- |
    | As a first-time visitor, I want to understand the rules and mechanics of the game quickly, so that I can start playing without confusion. | |
    | As a first-time visitor, I want an intitive and engaging interface that immediately explains what to do, so I can begin playing right away. |  |
    | As a first-time visitor, I want to have access to the rules and tutorials at any time, so I can confidently make my choices during the game. |   |
    | As a first-time visitor, I want the interface to be responsive and compatible with my device.  |   |

  * Returning Visitors

    |  Goals | How are they achieved? |
    | :--- | :--- |
    | As a returning visitor, I want to start playing right away without having to go through the tutorial or introduction. |  |
    |  As a returning visitor, I want an easy login with minimal input required to start the game. |   |

  * Frequent Visitors

    As a frequent visitor, I want to be able to choose between other players or the computer to compete with. This is a feature I plan to implement in the future. However, since the project currently lacks this feature, I have not included the frequent visitor's goal in the user story testing.

#### **The Full Testing**

##### **The Common Features**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Favicon for the browser tab | To show on the browser tab | Opened the website | It shows on the browser tab | Pass |
| The header |  |  |  | Pass |
| The logo on the left hand side of the header |  |  |  | Pass |
| The title of the site in the center of the header |  |  |  | Pass |
| The title of the site in the center of the header. |  |  |  | Pass |
| The title of the site in the center of the header. |  |  |  | Pass |
| The rules button |  |  |  | Pass |
| The rules box |  |  |  | Pass |
| The rules box header |  |  |  | Pass |
| The close icon on the right hand-side of the rules box header |  |  |  | Pass |
| The vertical scroll bar |  |  |  | Pass |
| The sticky scroll down arrow |  |  |  | Pass |
| The footer |  |  |  | Pass |
| The footer link icons | To open in a seperate tab | Clicked on each icon | They all direct to their related links openning in a new tab | Pass |
| The footer icons hover effect | To turn yellow when hovered over for desktops | Hovered over all the footer icons | They turn yellow when hovered over | Pass |

##### **The Login Phase**

 | Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The section title |  |  |  | Pass |
| The login form |  |  |  | Pass |
| The name input field and it's label |  |  |  | Pass |
| The PLAY! button |  |  |  | Pass |
| The form validation error message |  |  |  | Pass |

##### **The Game Phase**

 | Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The result display area |  |  |  | Pass |
| The players' pick display |  |  |  | Pass |
| The score area |  |  |  | Pass |
| The round result display |  |  |  | Pass |
| The user wins message |  |  |  | Pass |
| The computer wins message |  |  |  | Pass |
| The it's a tie message |  |  |  | Pass |
| Wait to see the final result |  |  |  | Pass |
| The controls area |  |  |  | Pass |
| The section title and the round counter |  |  |  | Pass |
| The control buttons |  |  |  | Pass |
| The control buttons hover effect |  |  |  | Pass |

##### **The Final Result Phase**

 | Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The final result display |  |  |  | Pass |
| The thumb up (yes) button |  |  |  | Pass |
| The thumb down (no) button |  |  |  | Pass |
| The YES/NO buttons hover effect |  |  |  | Pass |

##### **The 404 Error Page**

  | Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The green home icon link on top right side of the header |  |  |  | Pass |
| The 404 error page message |  |  |  | Pass |
| The back to home page link |  |  |  | Pass |