# Rock, Scissors, Paper, Lizard, Spock

![Rock, Scissors, Paper, Lizard, Spock shown on a variety of screen sizes]()

Visit the deployed site: [Rock, Scissors, Paper, Lizard, Spock](https://fariba-kamani.github.io/rockScissorsPaperLizardSpock/)

Rock, Scissors, Paper, Lizard, Spock is an expansion of Rock, Paper, Scissors with the additional hand signs of Lizard and Spock. It was first invented by Sam Kass, an internet pioneer and blogger. It has also been featured in an episode of the TV show, The Big Bang Theory <a href="https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock">1</a>, <a href="https://bigbangtheory.fandom.com/wiki/Sam_Kass">2</a>.

This website is a game application based on the mentioned expansion, in which the player competes against the computer in seven rounds before the game decides the winner. Emojis have been used to showcase the hand signs in the game and are called weapons. ‘✊’ (raised fist) for rock, ‘✋’ (raised hand) for paper, ‘✌️’ (peace) for scissors, ‘🦎’ for lizard, and ‘🖖’ (Vulcan salute) for Spock are available for the player to choose from in the form of five buttons during each round. At first, the hand sign ‘🤌’ (pinched fingers) was used for lizard, but during the game development, I decided that ‘🦎’ for lizard is more intuitive and recognizable. Additionally, it brings another layer of playfulness to the game design.

The game starts with a login form where the player is asked to enter a name, which will then be used to display the player’s score in the game, giving a more personal feeling. In each round, the player chooses one of the weapons mentioned above, while the computer makes a random selection of the weapons. Both the player’s and the computer’s choices will be displayed right underneath the header on top of the page body. The winner’s score increases for each round. In tie situations, both the player and the computer get one point each. The round’s result will be displayed in green if the player wins, in red if the computer wins, and in black if it’s a tie.

The rules are: Scissors cut paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitate lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors. The rules are accessible at all times during the game on the top right side of the header, indicated by a question mark icon.

The final result will be shown after all seven rounds are completed, giving the player two options: either playing again or quitting the game. The options are represented as buttons using emojis, continuing the theme of using hand gestures: 👍 (thumbs up) for yes and playing a new game, and 👎 (thumbs down) for no and quitting the game. If the player chooses yes, a new game with reset scores and rounds will begin, and if they choose no, they will be directed to the login.

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
    * [Login](#login)
    * [Game](#game)
    * [Rules](#rules)
    * [Final result](#final-result)
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
* As a first-time visitor, I want to understand the rules and mechanics of the game quickly, so that I can start playing without confusion.
* As a first-time visitor, I want an intitive and engaging interface that immediately explains what to do, so I can begin playing right away.
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

The colour scheme draws inspiration from the hand signs and the lizard emojis shades. Yellow #D67D00, #FFC83D and green #00D26A, #e2f5e2. while maintaining a minimalistic design to avoid visual overload, 

The header background features an image of a padel court, with the dominant colour being rgb(18, 128, 223) or #1280DF. This colour choice also influenced the footer colour across all three web pages. To ensure readability, the menu bar links and Font Fantastic icons in the footer are white, creating contrast against the blue background.

The header title stands out with a slightly different white shade, rgb(250, 250, 243) or #FAFAF3, compared to other links in the navigation bar and footer. For desktop screens, a hovering effect changes the content colour of the header and footer to rgb(230, 191, 49) or #E6BF31, maintaining contrast against their backgrounds.

On mobile screens, navigation links appear in a drop-down menu, opening on a transparent rich black background (rgba(1, 1, 21, 0.2)). This ensures visibility against the header background image while keeping the image itself visible. For tablet and desktop screens, a fixed navigation bar beneath the header image displays the navigation links at all times. To distinguish the navbar from the header image, I used rgb(44, 36, 155) or #2C249B.

The body sections alternate between white and Aliceblue backgrounds, aiding users in understanding where one section ends and another begins. Black is used for the font colour on the body to ensure contrast and better visibility.

Lastly, button borders (on all screen sizes) and the fieldset borders (on tablet and desktop screens) share the same blue colour as the header image and footer, which is rgb(18, 128, 223). This design creates cohesion with the rest of the website’s colour scheme while remaining noticeable to users.

![The Rock, Scissors, Paper, Lizard, Spock, Colour Scheme](assets/images/color-scheme.png)

### Typography

Google Fonts was used to import the chosen fonts for use on the site.

![Exo 2](assets/images/title-font.png)

* For the page title, I have used the Google font Exo 2, which is described as a contemporary geometric sans serif typeface by [Google Fonts](https://fonts.google.com/specimen/Exo+2/about?preview.text=LET%27S%20PADEL&preview.size=42). I chose this font for the title because it looks playful and fun, which goes well with the agenda of the website.

![Roboto](assets/images/body-font.png)

* For the body of the page, I have used the Google font ‘Roboto’ because it is clean, readable, and easy on the eyes, making the user experience as smooth as possible. According to [Google Fonts](https://fonts.google.com/specimen/Roboto/about?query=roboto&selected=Material+Symbols+Outlined:sports_tennis:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%235f6368), Roboto is featured in more than 695 million websites. Additionally, according to [Github](https://github.com/googlefonts/roboto), the font provides robust multi-language support and comes in various weights, styles, and alternate glyphs. 

* In case the imported Google fonts don’t load, both fonts will fall back to sans-serif.

### Imagery

All images used on the website have been resized using [Image Resizer.com](https://imageresizer.com/), converted to WebP format with [FreeConver](https://www.freeconvert.com/jpg-to-webp) and compressed using [tinify](https://tinypng.com/) to be optimized for using on the website and help loading the website faster for the users.

The headers on all three pages have a background image of a padel court taken from, https://psauction.com/item/view/975429/mobil-komplett-padelbana-instantpadel-duo-10x20m-ny-och-ej-monterad, to give the user the same feeling as being on the padel court.

You can see the URLs from which the images on the Gallery page are taken, in the list below. All of them have an alt attribute to display text if the image file doesn’t load, and to describe the image for screen readers used by visually impaired users.

* https://thumbs.dreamstime.com/b/serious-middle-aged-latin-man-tennis-player-playing-padel-friendly-match-outdoor-court-spring-focused-hitting-ball-267446063.jpg
* https://www.vanguardlawmag.com/wp-content/uploads/2024/04/IMG_5960.jpg
* https://www.lta.org.uk/49d339/siteassets/play/padel/image/woman-playing-padel2.jpg?w=3200
* https://tennis-uni.com/wp-content/uploads/padel-tennisspieler-netz-400x267.jpeg
* https://media.istockphoto.com/id/1413274533/photo/four-senior-friends-enjoying-together-while-playing-padel.jpg?s=612x612&w=0&k=20&c=ZuI09DB7woiuqmYD-J5dlzg1ID5VOSoh6m_7gFII4_E=
* https://thepeninsulaqatar.com/get/maximage/20240303_1709445598-694.jpg?1709445599
* https://thepadelstate.com/wp-content/uploads/2024/02/Sofia-Arujo-1021x500.jpg
* https://rutinasdeportivas.es/medios/2017/01/Quieres-saber-cu%C3%A1les-son-los-beneficios-del-p%C3%A1del-y-porque-es-importante-practicarlo-parejas.jpg

### Wireframes

Wireframes were created for mobile, tablet and desktop using balsamiq.

| Screen size | Login | Game | Rules | Final result |
| :--- | :--- | :--- | :--- | :--- |
| mobile | ![Login for mobile](assets/images/wireframe-mobile-login.png) | ![Game for mobile](assets/images/wireframe-mobile-game.png) | ![Rules for mobile](assets/images/wireframe-mobile-rules.png) | ![Final result for mobile](assets/images/wireframe-mobile-final-result.png) |
| tablet | ![Login for tablet](assets/images/wireframe-tablet-login.png) | ![Game for tablet](assets/images/wireframe-tablet-game.png) | ![Rules for tablet](assets/images/wireframe-tablet-rules.png) | ![Final result for tablet](assets/images/wireframe-tablet-final-result.png) |
| desktop | ![Login for desktop](assets/images/wireframe-desktop-login.png) | ![Game for desktop](assets/images/wireframe-desktop-game.png) | ![Rules for desktop](assets/images/wireframe-desktop-rules.png) | ![Final result for desktop](assets/images/wireframe-desktop-final-result.png) |


### Features

The website consists of a home page, a Find Players page and a Gallery page.

All Pages on the website are responsive and have the following features:

* A favicon in the browser tab.

  ![favicon](assets/images/favicon-tab.png)

* The title of the site at the top of the page. 

  ![The  Title](assets/images/title-link-to-homepage.png)

* Rules button icon in form of a question mark at the top right hand side of the header 

  ![The rules button](assets/images/dropdown-navigation-menu.png)  
  

* The footer of the site, located at the bottom of every page, features links to the website’s Facebook, Instagram, email, and phone. These links are displayed using Font Awesome icons. When hovered over on desktop screens, each icon changes to a Saffron yellow colour.

  ![footer](assets/images/footer.png)

#### Login

![Responsive home page]()


* 
  * 

  * 
  * 

* 

#### Game

![the  responsive]()

  * 

  * 
  * 

  


#### Rules

![the  page responsive]()

  

#### Final result

#### Future Implementations

In future implementations I would like to:

1. 
2. 
3. 

### Accessibility

I have been mindful during coding to ensure that anyone can understand my website, regardless of auditory, visual, or physical disability.

* Semantic HTML has been used to help both the browser understand the content and provide screen readers with extra functionality for keyboard operation, rather than relying solely on a mouse.
* Semantic text structure, such as headings, paragraphs, and lists, has been used to help screen readers provide the indicators they need to read out the content in a useful way.
* Semantic structural elements, such as nav, header, section, and footer, have been used to provide screen readers with important information that can be conveyed to their users.
* UI controls, such as links, buttons, and forms, have been used to allow users to interact with the website. By browser default, they can be accessed using a keyboard or by clicking the tab key to jump from one UI control to another.
* Form labels have been used so that screen readers can clearly label input fields for users.
* The aria-label attribute has been used to provide a more meaningful description for icons, links, background images, and interactive elements, specifically for screen reader users.
* Use a hover state on all buttons on the site to make it clear to the user whether they are hovering over a button.
* Use a sensible font, font sizes, line heights, color contrast for the text content and sticking to common conventions to make the website intuitive, easy to read and follow for all users.

- - -

## Technologies Used

### Languages Used

HTML and CSS

### Frameworks, Libraries & Programs Used

* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.

* [Git](https://git-scm.com/) - For version control.

* [Github](https://github.com/) - To save and store the files for the website.

* [GitPod](https://gitpod.io/) - IDE used to create the site.

* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

* [Chrome DevTools](https://developer.chrome.com/docs/devtools) - To troubleshoot and test features, solve issues with responsiveness and styling.

* [Favicon generator](https://realfavicongenerator.net/) To create favicon.

* [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

* [Tinify](https://tinypng.com/) To compress images.

* [Image Resizer.com](https://imageresizer.com/) To resize and compress images. 

* [FreeConver](https://www.freeconvert.com/jpg-to-webp) To convert the images to webp format.
 
* [Microsoft Bing Copilot Tools](https://www.bing.com/chat) - An AI chat that I used to check the spell and grammar of my website and README.md file.
- - -

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Let's Padel](https://fariba-kamani.github.io/lets-padel/).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [fariba-kamani/lets-padel](https://github.com/fariba-kamani/lets-padel).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [fariba-kamani/lets-padel](https://github.com/fariba-kamani/lets-padel)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [fariba-kamani/lets-padel](https://github.com/fariba-kamani/lets-padel)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

Please refer to [TESTING.md](TESTING.md) file for all testing carried out.

### Solved Bugs


### Known Bugs


- - -

## Credits

### Code Used

Throughout the entire project development, I utilized the Code Institute course material for HTML and CSS. I followed the tutorials for the Love Running walkthrough project to set up and start my project properly, make a dropdown navigation menu using checkbox for mobile screens, and make a masonry design for how the images display on the Gallery page depending on the screen size. Additionally, I incorporated ideas from the Coders Coffeehouse walkthrough project to make the content in the second section of the Home page responsive using inline-block display property.

I have used [Stack Overflow](stackoverflow.com) to get some ideas for how to use regular expression in order to define patterns for the form input validation of input type="text" and input type="tel".

I have also used the tutor support to learn how to link to an email and phone number in the footer. This allows users to open their email client with a specified recipient or trigger a phone call (on mobiles) by clicking the phone icon link in the footer.

### Content

For documentation and creating my README.md file I have taken inspiration from the sample README.md file that my mentor shared with me [The Quiz Arms](https://github.com/kera-cudmore/TheQuizArms/blob/main/README.md) as well as the README.md sample available on the course for Portfolio 1: Assessments Guide Preview.

All the imagery I’ve used, along with the corresponding links, is provided in [Imagery](#imagery) section.

### Acknowledgments

I would like to acknowledge

* My Code Institute mentor, Jubril Akolade, for reviewing my project and inspiring me to improve my website.
* The Code Institute tutor team, who were available and guided me whenever I was stuck troubleshooting issues during the development of my project.
* My partner and friends, who took the time to test my website on their devices and provided constructive feedback.