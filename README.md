# Rock, Scissors, Paper, Lizard, Spock

![Rock, Scissors, Paper, Lizard, Spock shown on a variety of screen sizes](assets/images/responsive.png)

Visit the deployed site: [Rock, Scissors, Paper, Lizard, Spock](https://fariba-kamani.github.io/rockScissorsPaperLizardSpock/)

Rock, Scissors, Paper, Lizard, Spock is an expansion of Rock, Paper, Scissors with the additional hand signs of Lizard and Spock. It was first invented by Sam Kass, an internet pioneer and blogger. It has also been featured in an episode of the TV show, The Big Bang Theory.

This website is a game application based on the mentioned expansion, in which the player competes against the computer in seven rounds before the game decides the winner. Emojis have been used to showcase the hand signs in the game and are called weapons. ‘✊’ (raised fist) for rock, ‘✋’ (raised hand) for paper, ‘✌️’ (peace) for scissors, ‘🦎’ for lizard, and ‘🖖’ (Vulcan salute) for Spock are available for the player to choose from in the form of five buttons during each round. At first, the hand sign ‘🤌’ (pinched fingers) was used for lizard, but during the game development, I decided that ‘🦎’ for lizard is more intuitive and recognizable. Additionally, it brings another layer of playfulness to the game design.

The game starts with a login form where the player is asked to enter a name, which will then be used to display the player’s score in the game, giving a more personal feeling. In each round, the player chooses one of the weapons mentioned above, while the computer makes a random selection of the weapons. Both the player’s and the computer’s choices will be displayed right underneath the header on top of the page body. The winner’s score increases for each round. In tie situations, both the player and the computer get one point each. The round’s result will be displayed in green if the player wins, in red if the computer wins, and in black if it’s a tie.

The rules are: Scissors cut paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitate lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors. The rules are accessible at all times during the game on the top right side of the header, indicated by a question mark icon.

The final result will be shown after all seven rounds are completed, giving the player two options: either playing again or quitting the game. The options are represented as buttons using emojis, continuing the theme of using hand gestures: ‘👍’ (thumbs up) for yes and playing a new game, and ‘👎’ (thumbs down) for no and quitting the game. If the player chooses yes, a new game with reset scores and rounds will begin, and if they choose no, they will be directed to the login.

The purpose of creating this game is to entertain users by providing a fun and casual experience while demonstrating core concepts in front-end web development, including HTML, CSS, and JavaScript. It features a simple, user-friendly interface that ensures smooth gameplay and instant visual feedback on the user’s and computer’s choices, as well as the game results. I have ensured the use of responsive layouts so that the game works well on all screen sizes. Additionally, features like keyboard controls and screen reader support have been added to make the game accessible to a wider audience.

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
  * [Features](#features)
    * [The Login Phase](#the-login-phase)
    * [The Game Phase](#the-game-phase)
    * [The Final Result Phase](#the-final-result-phase)
    * [The 404 Error Page](#the-404-error-page)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)
  * [Solved Bugs](#solved-bugs)
  * [Known Bugs](#known-bugs)
  
* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Acknowledgments](#acknowledgments)

- - -

## User Experience (UX)

### User Stories

#### First Time Visitor Goals
* As a first-time visitor, I want to understand the mechanics of the game quickly, so that I can start playing without confusion.
* As a first-time visitor, I want an intuitive and engaging interface that immediately explains what to do, so I can begin playing right away.
* As a first-time visitor, I want to have access to the rules and tutorials at any time, so I can confidently make my choices during the game.
* As a first-time visitor, I want the interface to be responsive and compatible with my device.

#### Returning Visitor Goals

* As a returning visitor, I want to start playing right away without having to go through the tutorial or introduction.
* As a returning visitor, I want an easy login with minimal input required to start the game.

#### Frequent Visitor Goals

* As a frequent visitor, I want to be able to choose between other players or the computer to compete with.

- - -

## Design

### Colour Scheme

As I chose to use emojis to design the game mechanics, and for the YES/NO buttons in the final result display phase, I decided to use the yellow shade of the hand sign emojis and the green shade of the lizard emoji for the game’s color scheme. Below is an overview of the primary, secondary, and accent colors used:

For the primary background colors, I applied #e2f5e2 to the header and footer backgrounds and white to the body background. This helps users understand where the header and footer end and the main section begins, while also maintaining a consistent brand identity across the website.

For the primary text color, I applied rgb(3, 3, 14), a rich black color that contrasts well against both primary background colors mentioned above, enhancing accessibility for users.

The secondary text colors I have used are red and #00d26a. Red is used to display the computer’s score, results when the computer wins in the game setting, and validation error messages during the login phase. #00d26a is used to display the user’s score, results when the user wins, and the rules title when the rules section opens.

#00d26a, #ffc83d, and #d67d00 have been applied as accent colors to buttons, borders, focus, and hover effects to make the intended objects stand out from the background and make the interface more interactive and engaging for the user.

Finally, rgb(79, 79, 91) has been used to add shadow and dimension to the game control buttons, as well as the YES/NO buttons for handling the exit game scenario, enhancing the visibility of these elements.

![The Rock, Scissors, Paper, Lizard, Spock, Colour Scheme](assets/images/color-scheme.png)

### Typography

For this project, I decided to host the Google Fonts locally to eliminate the need for an external network request and improve the performance score of my website. To do so, I downloaded the fonts I had previously chosen from [Google Fonts](https://fonts.google.com/) using [google-webfonts-helper](https://gwfh.mranftl.com/fonts) and placed them in the assets/fonts directory of my project. I then updated the CSS to reference the locally stored fonts.

![Cabin Font Example](assets/images/cabin-font-example.png)

* For the body, I have used the font Cabin. This font is a modern take on early 20th-century modernist sans-serif fonts; it is simple and readable but includes more modern curves and a unique style. Cabin has been featured in many game apps due to its legibility, approachable aesthetic, and web and mobile friendliness, which also influenced my decision to use it for my project.

![Cabin Sketch Font Example](assets/images/cabin-sketch-google-font.png)

* For the title, I used the Cabin Sketch font, a hand-drawn and playful variant of the Cabin font, which I think it gives the website a casual and artsy vibe.

* In case the imported Google fonts don’t load, both fonts will fall back to sans-serif.

### Imagery

The only image used on the website is the logo, located on the left-hand side of the header. To optimize the image for the website and improve loading times for users, I used [Image Resizer.com](https://imageresizer.com/) to resize and compress the logo, and [freeconvert.com](https://www.freeconvert.com/jpg-to-webp) to convert it to WebP format. The image was downloaded from https://www.pikpng.com/downpngs/Jhxmoi_pierre-ciseaux-feuille-lzard-spock-aligned-rock-paper/. I have added an alt attribute to the image to display text if the image file doesn’t load and to describe the image for screen readers used by visually impaired users.


### Wireframes

Wireframes were created for mobile, tablet and desktop using balsamiq.

| Screen size | Login | Game | Rules | Final result |
| :--- | :--- | :--- | :--- | :--- |
| mobile | ![Login for mobile](assets/images/wireframe-mobile-login.png) | ![Game for mobile](assets/images/wireframe-mobile-game.png) | ![Rules for mobile](assets/images/wireframe-mobile-rules.png) | ![Final result for mobile](assets/images/wireframe-mobile-final-result.png) |
| tablet | ![Login for tablet](assets/images/wireframe-tablet-login.png) | ![Game for tablet](assets/images/wireframe-tablet-game.png) | ![Rules for tablet](assets/images/wireframe-tablet-rules.png) | ![Final result for tablet](assets/images/wireframe-tablet-final-result.png) |
| desktop | ![Login for desktop](assets/images/wireframe-desktop-login.png) | ![Game for desktop](assets/images/wireframe-desktop-game.png) | ![Rules for desktop](assets/images/wireframe-desktop-rules.png) | ![Final result for desktop](assets/images/wireframe-desktop-final-result.png) |


### Features

The website consists of a home page and a 404 error page. 
The home page consists of three phases; the login phase, the game phase and the final result phase. The rules are available at all time during all phases of the home page with an exception of during result display of each round.
the 404 error page to make sure that Github shows the 404.html when the page is not found. The 500 error page hasn't been added since GitHub Pages does not handle 500 errors since it's a static site hosting service.
Both html pages on the website are responsive on all devices and have the following common features: 

* The favicon in the browser tab.

  ![favicon](assets/images/favicon.png)

* The header

  ![header](assets/images/header.png)

  * The logo on the left hand side of the header.

    ![logo](assets/images/the-logo.png)

  * The title of the site in the center of the header. 

    ![The title](assets/images/the-title.png)

  * The rules button, shown with a question mark icon on the right-hand side of the header and Added hover effect for desktop screens, does not appear on the 404 error page. Instead, a green home icon appears to link back to home page.

    ![The rules button](assets/images/rules-button.png) ![The rules button hover effect](assets/images/rules-button-hover.png) ![The 404 error page home icon](assets/images/404-error-page-home-link-icon.png) ![The 404 error page home icon hover effect](assets/images/home-icon-hover.png)

* The rules box; opens with the rules button

  ![The rules box responsive](assets/images/rules-responsive.png)

    * The rules box header, sticks to the top during scrolling

    * The rules box title on the left hand-side

    * The close icon on the right hand-side, works as a closing button, can be closed with both mouse click and the Enter key, added hover effect for desktop screens

      ![The rules box header](assets/images/rules-box-header.png)

      ![The rules box close icon hover effect](assets/images/rules-box-close-hover.png)

    * The vertical scroll bar

      ![The vertical scroll bar](assets/images/verrtical-scroll-bar.png)

    * The sticky scroll down arrow to the bottom right of the rules box, works as a link to bottom of the rules list

      ![The scroll down arrow](assets/images/scroll-down-arrow.png)

* The footer of the site, located at the bottom of every page, features icon links to the website’s Facebook, Instagram, email, and phone. These links are displayed using Font Awesome icons. Added hover effect for desktop screens.

  ![the footer](assets/images/the-footer.png)

  ![the footer hover effect](assets/images/footer-hover.png)


#### The Login Phase

![Responsive login](assets/images/responsive-login.png)

* The section title

![The section title](assets/images/login-title.png)

* The login form

![The login form](assets/images/login-form.png)

  * The name input field and it's label. Allowed auto complete, and added focus function on page load

  ![The name input and label](assets/images/input-field-and-label.png)

  * The PLAY! button that submits the form. Added hover effect for desktop screens.

  ![The PLAY! button](assets/images/play-button.png) ![The PLAY! button with hover effect](assets/images/play-button-hover.png)

  * The form validation error message; appears in red text underneath the name input for three seconds after each attempt to submit an invalid input.

  ![The form validation error message](assets/images/form-validation-error.png)

#### The Game Phase

![Responsive Game Phase](assets/images/responsive-game.png)

  * The result display area

    ![The result display area](assets/images/result-display-before-players-pick.png) 

    * The players' pick display

      ![The players' pick display](assets/images/players-pick.png)

    * The score area

      ![The score area](assets/images/scores-area.png)

    * The round result display

      * The user wins message
        
        ![User wins](assets/images/round-result-user-wins.png)

      * The computer wins message

        ![Computer wins](assets/images/round-result-computer-wins.png)

      * The it's a tie message

        ![It's a tie](assets/images/round-result-tie.png)

      * Wait to see the final result message

        ![Pre-final-result display message](assets/images/wait-for-final-result.png)
      
      * The alert message; if the rules button is clicked during the round result display

        ![The-alert-message](assets/images/the-alert-message.png)

  * The controls area

    ![The controls area](assets/images/controls-area.png)

    * The section title and the round counter

      ![The section title and the round counter](assets/images/controls-area-round-counter-title.png)

    * The control buttons, added hover effect for desktop screens

      ![The control buttons](assets/images/control-buttons.png) 

      ![The control buttons with hover effect](assets/images/control-buttons-hover.png) 

#### The Final result Phase

![Responsive Final Result Phase](assets/images/responsive-final-result.png)

  * The final result display

    ![The final result display example 1](assets/images/final-result1.png)

    ![The final result display example 2](assets/images/final-result2.png)
  
  * The YES/NO buttons, added hover effect for desktop screens

    ![The yes/no buttons](assets/images/yes-no-buttons.png)

    ![The yes/no buttons with hover effect](assets/images/yes-no-buttons-hover.png)

    * The thumb up button; takes the user back to a new game.
  
    * The thumb down button; reloads the page and takes the user back to the login phase.

#### The 404 error page

![Responsive 404 Error Page](assets/images/404-error-page-responsive.png)

* The green home icon link on top right side of the header

  ![The green home icon link](assets/images/404-error-page-home-link-icon.png)

* The 404 error page message
  
  ![The 404 error page message](assets/images/error-page-message.png)

* The back to home page link

  ![The back to home page link](assets/images/404-error-page-link.png)


#### Future Implementations

In future implementations:

1. I would like to expand the game so that users can choose between competing against the computer or other players.

2. I would like to add a high score feature to the game that tracks the number of consecutive games won without losing or tying. The longer the winning streak, the higher the score. A high score would represent the longest streak a player has achieved.


### Accessibility

I have been mindful during coding to ensure that anyone can understand my website, regardless of auditory, visual, or physical disability.

* Semantic HTML has been used to help both the browser understand the content and provide screen readers with extra functionality for keyboard operation, rather than relying solely on a mouse.
* Semantic text structure, such as headings, paragraphs, and lists, has been used to help screen readers provide the indicators they need to read out the content in a useful way.
* Semantic structural elements, such as header, section, and footer, have been used to provide screen readers with important information that can be conveyed to their users.
* UI controls, such as links, buttons, and forms, have been implemented to enable user interaction with the website. By default, these controls can be accessed using a keyboard, allowing users to navigate between them by pressing the Tab key. Additionally, I have added the functionality to select the close icon in the rules box header using the Tab key and to close the rules box by pressing the Enter key, as this was not included in the browser’s default behavior.
* Form label have been used so that screen readers can clearly label input fields for users.
* The aria-label attribute has been used to provide a more meaningful description for icons, links, the logo image, and interactive elements, specifically for screen reader users.
* Hover and focus state has been used on all buttons on the site to make it clear to the user whether they are hovering over or selecting a button.
* I have tried to use a sensible font, font sizes, line heights, color contrast for the text content and sticking to common conventions to make the website intuitive, easy to read and follow for all users.

- - -

## Technologies Used

### Languages Used

HTML, CSS, and JavaScript

### Frameworks, Libraries & Programs Used

* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.

* [Git](https://git-scm.com/) - For version control.

* [Github](https://github.com/) - To save and store the files for the website.

* [GitPod](https://gitpod.io/) - IDE used to create the site.

* [Google Fonts](https://fonts.google.com/) - To choose the fonts used on the website.

* [google-webfonts-helper](https://gwfh.mranftl.com/fonts) - To download and locally host the selected Google Fonts.

* [Chrome DevTools](https://developer.chrome.com/docs/devtools) - To troubleshoot and test features, solve issues with responsiveness and styling.

* [Favicon generator](https://realfavicongenerator.net/) - To create favicon.

* [Font Awesome](https://fontawesome.com/) - for used font awesome icons.

* [Am I Responsive?](http://ami.responsivedesign.is/) - To show the website image on a range of devices.

* [Responsive Web Design Checker](https://responsivedesignchecker.com/) - to assess the website's responsiveness

* [WAVE](https://wave.webaim.org/) - a web accessibility evaluation tool

* [Image Resizer.com](https://imageresizer.com/) - To resize and compress images. 

* [FreeConvert](https://www.freeconvert.com/jpg-to-webp) - To convert the logo image to webp format.
 
* [Microsoft Bing Copilot Tools](https://www.bing.com/chat) - An AI chat that I used to check the spell and grammar of my website and README.md file.

* [JSHint](https://jshint.com/) - to validate the JavaScript code.

* [W3C validator](https://validator.w3.org/) - to validate the HTML code.

* [Jigsaw validator](https://jigsaw.w3.org/css-validator/) - to validate the CSS code.
- - -

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Rock, Scissors, Paper, Lizard, Spock](https://fariba-kamani.github.io/rockScissorsPaperLizardSpock/).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [fariba-kamani/rockScissorsPaperLizardSpock](https://github.com/Fariba-Kamani/rockScissorsPaperLizardSpock).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [fariba-kamani/rockScissorsPaperLizardSpock](https://github.com/Fariba-Kamani/rockScissorsPaperLizardSpock). 
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [fariba-kamani/rockScissorsPaperLizardSpock](https://github.com/Fariba-Kamani/rockScissorsPaperLizardSpock)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

Please refer to [TESTING.md](TESTING.md) file for all testing carried out.

### Solved Bugs

  * **Overflow**

    Towards the end of the project development, I decided to increase the sizes of some features, such as control buttons, the rules button, and the players' pick section. This change caused overflow, as some content extended beyond the visible boundaries of their container or viewport. With help from the tutor team at Code Institute, I resolved the issue. For smaller screens, I eliminated the overflow by reducing the content size, increasing the container size, or changing the padding properties. For desktop screens, I had introduced a hover effect that enlarged some items when hovered over, which partly caused the overflow. I removed the transform properties set to `transform: scale(1.2)` from the hover-related classes. This didn't solve everything, so I had to define `max-width` and `max-height` for the problematic containers to finally resolve the bug. 

  * **The rules box interfering with the exit game senario**

    After choosing to quit the game from the final result phase and returning to the login phase, the user would unintentionally be thrown back into the game without logging in, simply by opening and closing the rules box. Through troubleshooting, I realized the issue was due to how I had handled the exit game scenario, which was initially based on toggling the visibility and `display` property of different phases. To resolve this, I decided it was better to reload the page when the user wants to quit the game, using the JavaScript code `location.reload(true);`.

  * **The rules box and the eventListener**

    Opening the rules box during the display of the round result caused some unexpected behavior. The program would make some sections visible to the user that were supposed to be hidden at the wrong time and phase in the course of the game. Initially, I had used two event listeners for capturing the "click" on the rules button to track if the user wanted to access the rules box before or after login phase, to be able to display the right phase after the user closed the rules box. However, this approach proved problematic as the code development progressed, causing the program to act unexpectedly in certain scenarios.

    To resolve this, I used only one event listener and included an if-statement in the related event handler to identify the phase or part of the game from which the user had opened the rules box. This allowed me to provide the correct feedback and ensure the user could continue from where they left off to check the rules.

### Known Bugs

  There are no known or unsolved bugs left in the program.

- - -

## Credits

### Code Used

Throughout the entire project development, I utilized the Code Institute course materials for HTML, CSS, and JavaScript. I followed the tutorials for the Love Running and Love Maths walkthrough projects to set up and start my project properly. The links from Code Institute that I relied on through out my project are as follow:

  * [Code Institute, Love Maths, Tidying up](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+3/courseware/2d651bf3f23e48aeb9b9218871912b2e/04d7bdb98119413991e2a31e9a291970/) - used for clearing the text input field in the login form, 
  and setting its focus with a ready cursor.

  * [Code Institute, Love Maths, Creating event listeners](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+3/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/)

  * [Code Institute, Loading events](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/fe180c06af614d2f86e32957ae17a859/) and [Code Institute,Adding event listeners](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/fe180c06af614d2f86e32957ae17a859/) - used to add event listeners such as: `document.addEventListener("DOMContentLoaded", function () {});`

  * [Code Institute, form submission](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/16d62f1111064f5cb6a64582da96a41b/)

  * [Code Institute, Getting form values](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/16d62f1111064f5cb6a64582da96a41b/)

  * [Code Institute, Changing existing elements](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/37e3becd93804fdf8bf586523f56ead5/) - used for situations such as: `document.getElementById('error-message').style.display = 'block';`

  * [Code Institute, Switch-case statement](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/73e9c0413ead4a21b389e33c77706102/ba023cfa11c04351a3758b21ee4418fe/?child=last)

  * [Code Institute, built in functions ](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/73e9c0413ead4a21b389e33c77706102/48be8fcda02741f4b784016d5894101c/) - such as: `Math.random()`

I also used tutor support to solve the overflow issue caused by content extending beyond the visible boundaries of its container or the browser's visible area (viewport).

Additionally, I used online free resources such as [Mozilla Developer](https://developer.mozilla.org/), [TutorialsTonight](https://www.tutorialstonight.com/), [JavaScript Tutorial](https://www.javascripttutorial.net/), and [Plain English](https://plainenglish.io/) to complement the Code Institute materials during the development of the project.

  * [Mozilla Developer, querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) - for learning about and using querySelector in my code.
  * [Mozilla Developer, includes() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) - used in text input validation section to check if the input string includes any spaces.
  * [Mozilla Developer, setTimeout() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout) - used for setting a timer to hide and show elements for a specific amount of time, for example, during the rounds result display.
  * [Mozilla Developer,Array.form()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) - used to convert the NodeList (returned by `querySelectorAll()`) into a proper array to be able to use array methods.
  * [Mozilla Developer, reload()](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload) - used for reloading the page in `quitContinue()` function, when the user wants to quit the game.
  * [Mozilla Developer, rotate()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate) and [Mozilla Developer,rotateY()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY) - used in css for rotating the `.user-pick` and `.computer-pick` around the z-axis and y-axis.
  * [TutorialsTonight, JavaScript forEach querySelectorAll](https://www.tutorialstonight.com/javascript-queryselectorall-foreach#foreach) - used for manipulating all elements within a specific class; 
  ```javascript 
  document.querySelectorAll(".final-result-display").forEach(element => { 
    element.style.display = "none";
  });
  ```
  * [JavaScript Tutorial, classList](https://www.javascripttutorial.net/javascript-dom/javascript-classlist/) - to work with css classes of an element.
  * [Plain English, passing argument to event listeners](https://plainenglish.io/blog/passing-arguments-to-event-listeners-in-javascript-1a81bc397ecb)


### Content

I took inspiration from this YouTube tutorial, [Build JavaScript ROCK PAPER SCISSORS in 18 minutes! 👊](https://youtu.be/3uKdQx-SZ5A?si=FvG8n2t8TIvopE3C), to use emojis for the game's hand signs.

[Font Awesome](https://fontawesome.com/) - was used for all icons used in the project.

For documentation and creating my README.md file I have taken inspiration from the sample README.md file that my mentor shared with me [The Quiz Arms](https://github.com/kera-cudmore/TheQuizArms/blob/main/README.md).

https://www.pikpng.com/downpngs/Jhxmoi_pierre-ciseaux-feuille-lzard-spock-aligned-rock-paper/ - where I downloaded the logo image.

I relied on The [Big Bang Theory Wiki](https://bigbangtheory.fandom.com/wiki/Main_Page) for my README introduction section to explain the game and how it was invented, using the following links:

  * https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock 
  * https://bigbangtheory.fandom.com/wiki/Sam_Kass 

[Google Fonts](https://fonts.google.com/specimen/Cabin/about) and [Github](https://github.com/impallari/Cabin) were used to explain and describe the chosen Google fonts for the project in the [typography](#typography) section.

All other technologies used during the development of this project are mentioned and credited in the [technologies used](#technologies-used) section.

### Acknowledgments

I would like to acknowledge

* My Code Institute mentor, Jubril Akolade, for reviewing my project and inspiring me to improve my website.
* The Code Institute tutor team, who were available and guided me whenever I was stuck troubleshooting issues during the development of my projects.
* My partner and friends, who took the time to test my website on their devices and provided constructive feedback.