# Strongest Avenger React

## Overview

Stongest Avenger React is designed so that the user is able to post images or videos of the favourite Marvel character or others being their favourite character and argue that they are the strongest. The User is able to view a list or posts from all other users. The user can register or login to their own account and be available then to make their own posts, comment on other posts, agree, follow other users, like other posts, update their own profile to tell abit about themselves and their favourite character.

![Am I Responsive Screenshot](docs/readme_screenshots/am-i-responsive.png)

## Project Goals

This is my fifth portfolio project for the Code Institute and the goal with this project is to display my new skills in using frameworks such as React (for the frontend) and Django Rest Framework. I have decided to build a social media website where users are able to create accounts and make posts or their favourite Marvel characters or them being their favourite Marvel characters. The User can also, comment, like, agree on other posts and being able to follow other users to see their posts.

This repository is for the React front end of Strongest Avenger. The project also utilises a Django Rest Framework API, which you can find the link to that repository [here](https://github.com/sam2829/strongest-avenger-drf)

## Contents

- [Strongest Avenger React](#strongest-avenger-react)
  - [Overview](#overview)
  - [Project Goals](#project-goals)
  - [Contents](#contents)
  - [User Experience](#user-experience)
    - [The strategy Plane](#the-strategy-plane)
      - [Ideal User](#ideal-user)
      - [Site Goals](#site-goals)
      - [First Time Visitor Goals](#first-time-visitor-goals)
      - [Returning Visitor Goals](#returning-visitor-goals)
    - [Agile Planning](#agile-planning)
      - [User Stories](#user-stories)
    - [Skeleton Plane](#skeleton-plane)
      - [Wireframes](#wireframes)
      - [Database Schema](#database-schema)
      - [Security](#security)
    - [The Scope Plane](#the-scope-plane)
    - [The Structure Plane](#the-structure-plane)
      - [Features](#features)
    - [The Surface Plane](#the-surface-plane)
      - [Design](#design)
  - [Use of Components](#use-of-components)
  - [Custom Hooks](#custom-hooks)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
  - [Frameworks, Libraries and Dependencies](#frameworks-libraries-and-dependencies)
    - [React](#react)
    - [React-Router-DOM](#react-router-dom)
    - [ReactDOM](#reactdom)
    - [Axios](#axios)
    - [JWT Decode](#jwt-decode)
    - [React Bootstrap](#react-bootstrap)
    - [Font Awesome](#fontawesome)
    - [Google Fonts](#google-fonts)
  - [Testing](#testing)
  - [Deployment](#deployment)



## User Experience

### The Strategy Plane

Strongest Avenger is intended for people to have somewhere where they can share their favourite Marvel moments and characters with others who have the same interest. They can also share moments where they have had fun being superhero's themselves and have interaction with each other on whether they agree that the character is infact the strongest. The user will be able to manage their own posts and profile and be able to comment and like on others, whilst also being able to search for specific or relative posts and follow other users.

#### The Ideal User

- Someone who enjoys Marvel.
- Someone who enjoys sharing their favourite moments from movies or comics.
- Someone who enjoys dressing up as superhero.
- Somone who likes to interact with others.

#### Site Goals

- To provide the user with the ability to register an account.
- To stop user from making posts, comments, likes and following others wihtout registering an account.
- To provide users with posts from many different people and characters.
- To provide users to interact with others.

#### First Time Visitor Goals

- To provide the user the ability to register an account.
- To stop user from making posts, comments, likes and following others wihtout registering an account.
- Allow the user to see many posts from different people of their favourite character.
- See comments from other users on posts.
- Once registered and account and signed in, user can make their own posts, comment on other posts, update their own profile, like posts, follow other users and report any issues on a post.
- To provide the user the ability to logout of their account.
- User can search for posts by username, title, character name.
- User can use a predefined search by character category.

#### Returning Visitor Goals

- To provide user the ability to login to their account.
- To provide the user the ability to logout of their account.
- Allow the user to see many posts from different users, posts will also be ordered by most recent posted.
- User can view the posts they have liked.
- User can see the posts by all the other users they are following.
- User can create their own posts and see if any previous posts have been commented on.
- User can comment on other posts, update their own previous posts or comments, update their own profile, like posts, follow other users and report any issues on a post.
- User can search for posts by username, title, character name.
- User can use a predefined search by character category.

[Back to top](#strongest-avenger-react)

### Agile Planning

This project was developed using agile methodologies by delivering small features across the duration of the project. This broke down the build of the project into a lot more manageable parts and was able to select which user stories were more important for the site.

It was carried out this way to try ensuring that all core requirements were completed first to give the project a complete feel and to make sure the most important user stories were implemented. When clicked on and opened the user story, the user story was assigned a label "must have", "should have" or "could have" so I would know the importance of the user story.

The kanban board was created using GitHub projects, this helped me be able to see all my user stories and be able to keep track of which ones had been done, to do or in progress.

![User Stories Screenshot](docs/readme_screenshots/user-story-screenshot.png)

[Back to top](#strongest-avenger-react)

#### User Stories

The following user stories were completed throughout the development.

Navbar navigation:

  - As a User I can clearlyview the navbar from every page so that I can easily navigate betweem pages.

Routing:

  - As a User I can navigate through pages quickly so that I can view content seamlessly without page refresh so that received benefit.

User sign up:

  - As a User I can create a new account so that I can use all the features on the site for signed up users.

User sign in:

  - As a User I can sign in to my account so that I can use the site like all logged in users.

Logged in status:

  - As a User I can tell if I am logged so that I know I can log in or out if I need to.

Refresh access tokens:

  - As a user I can maintain my logged-in status until I decide I want to logout ** so that ** I have a better user experience.

Conditional rendering:

  - As a logged out user I can see the sign in and sign up options so that I can sign in / sign up.

Avatar:

  - As a User I can view the user's avatars so that I can easily identify the users.

Create posts:

  - As a logged in user I can create posts so that share images or videos of my favourite marvel characters.

Post can't contain both image and video:

  - As a logged in user I can post an image or video but not both in one post so that only one image or video is displayed clearly at one time.

Post must contain either image or post:

  - As a logged in user I can post an image or video and cannot make a post without neither so that every post will have a clear image or video.

Like a post:

  - As a logged in user I can like a post so that I can show support for the posts that interest me.

View most recent posts:

  - As a User I can I can view all the most recent posts by most recently created so that I am up to date and always see the newest posts.

Search for posts by keywords:

  - As a User I can **search for posts by hero name, post title, username ** so that I am able to find the posts I am interested in.

Search by categories:

  - As a User I can search by categories of posts so that I can easily find the posts I'm interested in.

View liked posts:

  - As a logged in user I can view the posts Ive liked so that I can revisit the posts I've liked the most.

View posts of followed users:

  - As a logged in user I can view the posts of all the users I follow so that I can see what keep up to date with what my favourite users are posting.

Infinite scroll:

  - As a user I can keep scrolling through the posts, that are loading automatically so that I don't have to keep clicking between pages.

View post in full:

  - As a user I can click on a post and view it in full so that I can see the post and all the comments about the post.

Edit post:

  - As a logged in post owner I can edit my post so that I can make corrections or update the post.

Delete post:

  - As a logged in post owner I can delete my post so that if I want to delete the most so it's no longer on show I can.

Create a comment:

  - As a logged in user I can add comments to a post so that so I can share my thoughts and join in, in conversations.

Edit comment:

  - As a logged in comment owner I can edit my own comment so that so I can correct errors or update my existing comment.

Delete comments:

  - As a logged in comment owner I can delete my own comments so that I can control removal of my comment from the application.

Comment date:

  - As a user I can see how long ago a comment was made so that I know how old a comment is.

Post agree:

  - As a logged in user I can create a comment and when doing so click agree so that people can see if I believe I agree with the post that the character is the strongest avenger.

Profile page:

  - As a user I can view other users profiles so that I can see their posts and learn more about them.

Most followed profiles:

  - As a user I can see the most followed profiles so that I can see which are the most popular and if I want to the follow.

User profile:

  - As a user I can view statistics about a user and how active they are so that I can learn more about them.

Follow / unfollow:

  - As a logged in user I can decide if I wish to follow or unfollow a user so that I can see and remove posts by specific users in my posts feed.

View all posts by a specific user:

  - As a user I can view all posts by a specific user so that I can view all their posts and keep up to date with their recent posts.

Edit profile:

  - As a logged in user I can edit my own profile so that I can change my profile image, change my favourite character if that changes, bio and username.

Update username and password:

  - As a logged in user I can update my username and password so that I can change my display name and keep my profile secure.

Report issues:

  - As a logged in user I can report issues on a post so that site owner is aware that abuse has taken place, spam, wrong category or other issues.

Admin can view reports:

  - As a site admin I can view all reports and update them if they have been resolved so that any problems can be rectified and users have a better user experience.

Admin can delete posts, comments:

  - As a site admin I can delete any posts, comments etc so that any issues can be resolved effectively and users can have a better user experience.

  [Back to top](#strongest-avenger-react)

### The Skeleton Plane

#### Wireframes

Wireframes were used to create a prototype of the project which may change during its development.

<details>

<summary>Desktop</summary>

Homepage logged out:

![Desktop Homepage Logged Out Wireframe](docs/readme_screenshots/desktop-homepage-wireframe.png)

Homepage logged in:

![Desktop Homepage Logged In Screenshot](docs/readme_screenshots/desktop-homepage-logged-in-wireframe.png)

Sign up page:

![Desktop Sign Up Wireframe](docs/readme_screenshots/desktop-sign-up-wireframe.png)

Sign in page:

![Desktop Sign Up Wireframe](docs/readme_screenshots/desktop-sign-in-wireframe.png)

Profile page logged out:

![Desktop Profile Page Logged Out Wireframe](docs/readme_screenshots/desktop-profile-page-logged-out-wireframe.png)

Profile page logged in:

![Desktop Profile Page Logged In Wireframe](docs/readme_screenshots/desktop-profile-page-logged-in-wireframe.png)

Edit profile page:

![Desktop Edit Profile Wireframe](docs/readme_screenshots/desktop-edit-profile-wireframe.png)

Post form page:

![Desktop Post Form Wireframe](docs/readme_screenshots/desktop-post-form-wireframe.png)

Full post page logged out:

![Desktop Full Post Logged Out Wireframe](docs/readme_screenshots/desktop-full-post-logged-out-wireframe.png)

Full post page logged in:

![Desktop Full Post Logged In Wireframe](docs/readme_screenshots/desktop-full-post-logged-in-wireframe.png)

Report form:

![Desktop Report Form Wireframe](docs/readme_screenshots/desktop-report-form-wireframe.png)

Change Username form:

![Desktop Change Username Wireframe](docs/readme_screenshots/desktop-change-username-wireframe.png)

Change password form:

![Desktop Change Password Wireframe](docs/readme_screenshots/desktop-change-password-wireframe.png)

</details>

<details>

<summary>Mobile</summary>

Homepage logged out:

![Mobile Homepage Logged Out Wireframe](docs/readme_screenshots/mobile-homepage-logged-out-wireframe.png)

Homepage logged in:

![Mobile Homepage Logged In Screenshot](docs/readme_screenshots/mobile-homepage-logged-in-wireframe.png)

Sign up page:

![Mobile Sign Up Wireframe](docs/readme_screenshots/mobile-sign-up-wireframe.png)

Sign in page:

![Mobile Sign Up Wireframe](docs/readme_screenshots/mobile-sign-in-wireframe.png)

Profile page logged out:

![Mobile Profile Page Logged Out Wireframe](docs/readme_screenshots/mobile-profile-page-logged-out-wireframe.png)

Profile page logged in:

![Mobile Profile Page Logged In Wireframe](docs/readme_screenshots/mobile-profile-page-logged-in-wireframe.png)

Edit profile page:

![Mobile Edit Profile Wireframe](docs/readme_screenshots/mobile-edit-profile-wireframe.png)

Post form page:

![Mobile Post Form Wireframe](docs/readme_screenshots/mobile-post-form-wireframe.png)

Full post page logged out:

![Mobile Full Post Logged Out Wireframe](docs/readme_screenshots/mobile-full-post-logged-out-wireframe.png)

Full post page logged in:

![Mobile Full Post Logged In Wireframe](docs/readme_screenshots/mobile-full-post-logged-in-wireframe.png)

Report form:

![Mobile Report Form Wireframe](docs/readme_screenshots/mobile-report-form-wireframe.png)

Change Username form:

![Mobile Change Username Wireframe](docs/readme_screenshots/mobile-change-username-wireframe.png)

Change password form:

![Mobile Change Password Wireframe](docs/readme_screenshots/mobile-change-password-wireframe.png)

</details>

[Back to top](#strongest-avenger-react)

#### Database Schema

This is well explained in the backend repository readme [here](https://github.com/sam2829/strongest-avenger-drf)

#### Security

This is well explained in the backend repository readme [here](https://github.com/sam2829/strongest-avenger-drf)

I've also made sure in the front end using currentUser hook that user must be signed in to access certain things and in certain actions, check that the current user is the owner of what the user is trying to access so that the users account is protected.

### The Scope Plane

- Responsive Design - The site should be fully functional on all devices from 320px wide and up.

- Hamburger menu for navbar on mobile devices.

- Ability to perform CRUD functionality on Profiles, Posts and comments.

- Restriced role-based features for making posts, comments and profiles.

- Homepage welcoming user to the site and links to navigate throught he site and otpions to sign in or sign up to an account.

[Back to top](#strongest-avenger-react)

### The Structure Plane

#### Features

As a User I would like to view the site on all my different devices so I can view site wherever I am.

***Navbar***

As a user I want to see a clear way of navigating around the site so that I can easily find the relative information I am looking for.

The Navbar contains links for Home, My Sign in, Sign up, Feed, Liked, Profile, Add a post and Sign out. These options depend on whether or not the user is logged in.

This is a list of the navigation options on all pages:

- Home - Visible to all.

- Sign in - Visible to logged out users.

- Sign up - Visible to logged out users.

- Feed - Visible to logged in users.

- Liked - Visible to logged in users.

- Sign out - Visible to logged in users.

- Profile - Visible to logged in users.

- Add a post - Visible to logged in users.

The navigation menu is displayed on all pages and forms into a hamburger menu on smaller devices. This allows users to view the site from any device and not take up too much space on mobile devices. It's very clear and easy to use.

The Icon of the Navlink which is the current page the user is on will also be a different colour so user can see which page they are on.

Desktop (logged in):

![Desktop Navbar Logged in](docs/readme_screenshots/desktop-navbar-logged-in.png)

Desktop (logged out):

![Desktop Navbar Logged out](docs/readme_screenshots/desktop-navbar-logged-out.png)

Mobile Device (logged in):

![Mobile Navbar Logged in](docs/readme_screenshots/mobile-navbar-logged-in.png)

Mobile Device (logged ou:t)

![Mobile Navbar Logged out](docs/readme_screenshots/mobile-navbar-logged-out.png)

***Search By***

Search by component is a pre defined search option which allows the user to search for posts by the character category. This appears on most pages and changes position on whether it is a desktop or mobile.

If the user has used the search, the active link will change colour so the user is aware.

Desktop:

![Desktop Search by](docs/readme_screenshots/desktop-searchby.png)

Mobile:

![Mobile Search by](docs/readme_screenshots/mobile-searchby.png)

***Popular Profiles***

The popular profiles component displays to the user the most most followed profiles on the site. Clicking on the users profile takes you to view that users profile.

If the user is logged in the popular profiles component will also display a follow button, which will allow the logged in user to now follow this user and see there posts in the feed page. If the user is logged in and is already following one of the popular profiles it will then display an unfollow button, if the user decides to unfollow this user.

Desktop (logged in):

![Desktop Popular Profiles Logged in](docs/readme_screenshots/desktop-popular-profiles-logged-in.png)

Desktop (logged out):

![Desktop Popluar Profiles Logged out](docs/readme_screenshots/desktop-popular-profiles-logged-out.png)

Mobile (logged in):

![Mobile Popular Profiles Logged in](docs/readme_screenshots/mobile-popular-profiles-logged-in.png)

Mobile (logged out):

![Mobile Popular Profiles Logged out](docs/readme_screenshots/mobile-popular-profiles-logged-out.png)


***Homepage***

Users will be presented with the most recent posts. On this page the user can use the search bar to look for particular posts, use the search by options, see the most popular profiles and use the navbar to sign up or sign in.

If already signed in the Navbar will be the Navbar for logged in users.

Desktop:

![Desktop Homepage](docs/readme_screenshots/desktop-homepage.png)

Mobile:

![Mobile Homepage](docs/readme_screenshots/mobile-homepage.png)

***Sign up***

The sign up page displays a sign up form which is for the user to complete correctly.

The form must be filled out correctly or will be unsuccesful, error messages will be displayed as to why form is not correct.

Sign up form no errors:

![Sign Up Form](docs/readme_screenshots/signup-form.png)

Sign up form with errors:

![Sign Up Form Errors](docs/readme_screenshots/signup-form-errors.png)

***Sign in***

The sign in page displays the sing in form so that the user can sign back in if they already have an account.

The form must be filled out correctly or will be unsuccesful, error messages will be displayed as to why form is not correct.

Sign in form no errors:

![Sign In Form](docs/readme_screenshots/signin-form.png)

Sign in form with errors:

![Sign In Form Errors](docs/readme_screenshots/signin-form-errors.png)

***Posts on Homepage***

The posts on the homepage display the posts whether its a video or image, provides information and about the post and also shows how many likes and comments the post has.

If logged in I am able to like and unlike the the post. A report icon will also be on display for if i wish to report this post.

If logged out user will be informed they must log in to like the post and the report icon will not be visible.

If you click on the post or the comment icon, it will take to to the that posts page where you can see the list of comments.

Post logged in:

![Post Homepage Logged in](docs/readme_screenshots/posts-homepage-logged-in.png)

Post logged out:

![Post Homepage Logged out](docs/readme_screenshots/posts-homepage-logged-out.png)

***Feed Page***

Feed page is the same as the homepage but the posts on display are only the posts of the other users the logged in user is following.

Desktop Feed page:

![Desktop Feed page](docs/readme_screenshots/desktop-feed-page.png)

Mobile Feed page:

![Mobile Feed page](docs/readme_screenshots/mobile-feed-page.png)


***Liked Page***

Liked oage is the same as the homepage but the posts on display are only the posts the logged in user has liked.

Desktop Liked page:

![Desktop Liked page](docs/readme_screenshots/desktop-liked-page.png)

Mobile Feed Page:

![Mobile Liked page](docs/readme_screenshots/mobile-liked-page.png)

***Add a post***

Add a post page is a form the user must fill out correctly so that they can create their own post. This post can be an image or video.

All fields must be filled out correctly or errors messages will be displayed to help the user.

Add a post form:

![Add a Post Form](docs/readme_screenshots/add-a-post-form.png)

Add a post form with errors:

![Add a Post Form Errors 1](docs/readme_screenshots/add-a-post-form-errors-1.png)

![Add a Post Form Errors 2](docs/readme_screenshots/add-a-post-form-errors-2.png)

***Main Post Page***

Main post page displays the post as normal as in homepage, depending on whether user is logged in or logged out. But on this page the user is able to see if there are any comments to go with the post.

If the User is logged in the are presented with the comment form so they can submit their own comment and say if the agree with the post.

If there are no comments available a message will be on display.

Main post page logged in:

![Main Profile Page Logged in Comments](docs/readme_screenshots/main-profile-comments-logged-in.png)

Main post page logged in (without existing comments):

![Main Profile Page Logged in Without Comments](docs/readme_screenshots/main-profile-no-comments-logged-in.png)

Main post page logged out:

![Main Profile Page Logged out Comments](docs/readme_screenshots/main-profile-comments-logged-out.png)

Main post page logged out (without existing comments):

![Main Profile Page Logged out Without Comments](docs/readme_screenshots/main-profile-no-comments-logged-out.png)

In the main profile page, if the user is the owner of the post, a three dot icon will appear at the top of the post and give the user the option of editing or deleting the post. The edi icon will render the edit form and delete wil delete the post and its comments.

![Main Profile Owner Options](docs/readme_screenshots/main-profile-owner-options.png)

If the user decides to edit the post, the edit form functions the same as the add a post form, but this time the form fields have the existing data already inside.

![Post Edit Form](docs/readme_screenshots/post-edit-form.png)

If the user has already commented, a three dot icon will appear at the top right of the comment and if clicked provides the options to edit the comment which renders the edit form or delete which will delete the users comment.

If the user decides to edit their comment, the comment edit form functions the same as the comment form, but this time the form fields have the existing date already inside.

![Comment Edit Form](docs/readme_screenshots/main-profile-comment-edit.png)

***Profile Page***

When viewing the profile page of a user, the user is able to see all the posts of the user who's profile it is, but also see information about the user. If logged in there will also be a follow or unfollow button present so the user can either follow or unfollow the user who's profile it is.

Desktop Profile page logged in:

![Desktop Profile Page Logged in](docs/readme_screenshots/desktop-profile-page-logged-in.png)

Mobile Profile page logged in:

![Mobile Profile Page Logged in](docs/readme_screenshots/mobile-profile-page-logged-in.png)

Desktop profile page logged out:

![Desktop Profile Page Logged out](docs/readme_screenshots/desktop-profile-page-logged-out.png)

Mobile profile page logged out:

![Mobile Profile Page Logged out](docs/readme_screenshots/mobile-profile-page-logged-out.png)

If the user is the owner of the profile page, a three dot icon will appear at the top right of the profile information. If clicked the user will be provided options to either edit profile, change username or change password.

Depending on which one is clicked the user will be taken to the repsected form for the user to fill out correctly.

The username and edit profile forms will display existing data if present.

The form wil provide error messages to help the user fill out forms correctly.

Desktop Profile edit options:

![Desktop Profile Page Owner](docs/readme_screenshots/desktop-profile-page-owner.png)

Mobile Profile edit options:

![Mobile Profile Page Owner](docs/readme_screenshots/mobile-profile-page-owner.png)

Profile edit form:

![Profile Edit Form](docs/readme_screenshots/edit-profile-form.png)

Profile edit form errors:

![Profile Edit Form Errors](docs/readme_screenshots/edit-form-errors.png)

Change username form:

![Change Username Form](docs/readme_screenshots/change-username-form.png)

Change username form errors:

![Change Username Form Errors](docs/readme_screenshots/change-username-form-errors.png)

Change password form:

![Change Password Form](docs/readme_screenshots/change-password-form.png)

Change password form errors:

![Change Password Form](docs/readme_screenshots/change-password-form-errors.png)

***Report***

The report page allows the use to report anything they feel they need to on the post. Its also given a description section so they can elabirate and inform us if its the post or the comments that they have an issue with.

The form must be filled out correctly to submit. Error message will be displayed to help the user fill out correctly.

Report form:

![Report Form](docs/readme_screenshots/report-form.png)

Report form with errors:

![Report Form Errors](docs/readme_screenshots/report-form-errors.png)

***Error Page***

If the user attempts to go to a page that doesn't exist, they are presented with this error page and a link back to the homepage.

![Error Page](docs/readme_screenshots/error-page.png)

[Back to top](#strongest-avenger-react)

### The Surface Plane

#### Design

***Colour Scheme***

I opted for a very few choices of colours throughout the site. The same colours have been implemented across the site and are included in the button's styles.

This hopefully makes the site easy and clear to read / use.

The colour palette was created using the coolors website.

![Colour Scheme](docs/readme_screenshots/colour-scheme.png)

***Imagery***

The logo for the site was taken from google.

Font awesome was used to for the sites icons.

Google fonts was used for the font style.

[Back to top](#strongest-avenger-react)

## Use of Components

A number of reusable React components were created with the intention of reducing code duplication.

***AlertMessage.js***

Used to show alert messages to inform user of different actions. This was passed as a prop so each alert when called can display it's own message. 

***Asset.js***

Used so that spinner, image or message can be displayed. These were passed as props so I was able to render a spinner when loading or an image an message to where was needed.

***Avatar.js***

Used so that the avatar can be passed as a prop and easily rendered where needed.

***LoggedInNavIcons.js***

Used to improve code readability and make it easier for futre changes or additions.

***LoggedOutNavIcons.js***

Used to improve code readability and make it easier for futre changes or additions.

***MoreDropDown.js***

Used so that the post and comment dropdown menu are the same and able to edit or delete post or comment. Handledelete and HandleEdit are passed as props so that they can be handled seperately. This also contains the drop down menu for the profile page.
Having these in the own component let me re-use the code and enhanced code readability.

***SearchBy.js***

This was used on numerous pages so having this seperate improved code readability and makes it easier for future additions or changes.

***CommentAgree.js***

Used for when the user selects if the agree with the post or not. This is in the comment create and edit form so is seperated into it's own file to save repitition, improve readability and easier for future modifications.

***PostCreateFormImageField.js***

Used in both post create and edit post forms to upload an image. This was seperated into it's own file to to save repitition, improve readability and easier for future modifications.

***PostCreateFormVideoField.js***

Used in both post create and edit post forms to upload a video. This was seperated into it's own file to to save repitition, improve readability and easier for future modifications.

***PostCreateFormRadioButtons.js***

Used in both post create and edit post forms to select whether to post an image or a video. This was seperated into it's own file to to save repitition, improve readability and easier for future modifications.

***PostCreateFormTextFields.js***

Used in both post create and edit post forms to type in information about the post. This was seperated into it's own file to to save repitition, improve readability and easier for future modifications.

***PostLikeIcon.js***

Used so that user can like or unlike a post functionality. This was seperated into it's own file to improve code readabiltiy and for future additions or modifications.

***ProfileEditFormImageField.js***

Used so that user can edit their profile image. This was seperated into it's own file to improve code readabiltiy and for future additions or modifications.

***ProfileEditFormTextFields.js***

Used so that user can edit their profile information. This was seperated into it's own file to improve code readabiltiy and for future additions or modifications.

***PopularProfiles***

This is re-used across many pages, displaying the most popular profiles. This was seperated into it's own file to improve code readability, avoid code repitiion and make it easier for future additions or modifications.

***CreateReportFormFields.js***

Used so that user can provide information and create a report. This was seperated into it's own file to improve code readabiltiy and for future additions or modifications.

## Custom Hooks

***UseClickOutsideToggle.js***

This custom hook is used so that in mobile devices, if the navbar dropdown menu has been toggled open, the user can click anywhere outside the dropdown menu and this will still toggle the dropdown menu closed.

***UseRedirect.js***

This custom hook is used to redirect the users back to the homepage depending on conditions when the refresh token has expired or not and the user is logged in or out.

[Back to top](#strongest-avenger-react)

## Technologies Used

### Languages Used

- HTML5

- JSX

- CSS

- Javascript

[Back to top](#strongest-avenger-react)

## Frameworks, Libraries and Dependencies

### React

React is the frontend framework used to create the frontend of this project.

### React-Router-Dom

React-Router-Dom is used to enable client side routing for React web applications and is used to implement basic routing across this project.

### ReactDOM

ReactDOM is used for rendering components to the DOM. It bridges the gap between React's Virtual DOM and the actual DOM in the browser.

### Axios

Axios was used to simplify requests made to the REST API.

### JWT Decode

JWT Decode was used to decode encoded JSON web tokens.

### React Bootstrap

React Bootstrap was used to help with the styling and layout of the entire project.

### Fontawesome

Font awesome was used for the icons used across the site.

### Google fonts

Google fonts was used to provide the font for the site.

### Infinte Scroll

Infintie Scroll was used so that the user is able to to keep scrolling through the posts or comments, rather than clicking between pages. Infinte scroll loads more data as it's scrolling.

[Back to top](#strongest-avenger-react)

## Testing

I have included details of my testing during and post development in a separate file called [TESTING.md](TESTING.md)

[Back to top](#strongest-avenger-react)

## Deployment

***GitHub***

This project was developed using a blank template and ran in Gitpod workspace.

- First I created a new Github repository by clicking on the create new repository button in the top right of my repositories list, on the left hand side of the page.

-  There I created the repository name, made sure the repository was set to public and then clicked the create repository at the bottom of the page.

- Once the repository was created, in the top right of the file clickon the green drop-down meu labelled "code".

- Then select HTTPS.

- Next copy the URL given to you.

- Next I loaded up Gitpod and clicked on the "Dashboard" at the top right of the page.

- Next, I clicked on "new workspace" on the right hand side of the page.

- In the repository URL, paste in the URL copied from the GitHub account.

- Next clicked on the repository in the drop down menu.

- Next, once the repository was selected I clicked continue and the workspace was now loading.

***Version Control***

For version control the following steps were made:

- If any changes were made to my Gitpod project.

- First files were made ready for commit with command - git add filename or git add . to add all files.

- To commit the changes using the following command - git commit -m "This is my commit" Note the brief description at the end of the command to make you aware of what changes have occurred.

- To then move the changes to GitHub, use the following command - git push

***Clone Repo***

Creating a clone allows you to make a copy of the repository at the specific point in time. This lets you run a copy of the project locally. This can be done by:

- Navigate to the repository you choose to clone in your GitHub.

- Clicking on the arrow of the green button named "Code" at the top of the file.

- Then select "Local" then under local select "HTTPS" and then copy that URL.

- Navigate to your code editor and within the terminal change the directory to the location you wish to clone the repository to.

- Type "git clone" and paste the copied HTTPS link from GitHub.

- Press enter and git will clone the repository to your local machine.

***Forking the GitHub Repository***

Forking the GitHub repository allows you to make a copy of the original repository on your GitHub account to view and make changes without it effecting the original repository. This can be done by:

- Log in to your GitHub account and locate the repository you wish to fork.

- Near the top of the page, under the "settings" button going across the page, you should see a button saying "Fork".

- Click the "Fork" button and you should now have a copy of the original repository in your GitHub account.

***Deployment to Heroku***

For initial deployment to Heroku at the start of my project, the following steps were made:

- First sign in to your Heroku account.

- On the top right of the page there is a drop-down menu called "new", click this and click on "create new app".

- You then need to decide your unique app name using '-' between each word. Then select which region you are working from and then click on the button "create app".

- Once you have clicked on "create app" you will be taken to a new page. On this page you will see a row of tabs at the top left of the page. You need to click on the "deploy" tab and go to the deployment page.

- On the deployment page, I scrolled down to deployment method and confirmed I wanted to deploy through GitHub.

- When I click on GitHub a search bar will appear underneath which will allow me to search for my GitHub repository. I made sure I spelt the repository I'm searching for exactly as I named it and then clicked the search button.

- The repository then appeared underneath my search, I checked this was the correct repository and then clicked the "connect" button. This has now linked up my Heroku app and my GitHub repository code.

- I then scrolled down to the button "Enable Automatic Deploys", this allows my Heroku app to automatically update every time I've pushed a new change to my code to GitHub. This is optional.

- I then scrolled down and clicked on the button "Deploy Branch" which is now building the app.

- Once the app is successfully deployed, a message appeared saying "your app was successfully deployed." Then click on the "view" button which will take me to the deployed link.

***Deployment Combining Django Rest and React Projects***

At the end of the project I decided to combine my backend and frontend projects into one. The following steps were made to make this possible:

- First go to the GitHub repository of the react project, click the "code" button at the top right of the file, select HTTPS and copy the URL.

- Next open up the Django Rest project workspace, then in the terminal type the following command "git clone <react_repo_url> frontend" but replace the "<react_repo_url>" with the URL you copied in the react GitHub repository.

- This created a new folder called frontend in the Django Rest workspace. Then needed to remove the .git .gitignore and the README.md filed from this folder. This was carried out by running the following command in the terminal "rm -rf .git .gitignore README.md".

- Then installed npm into this project with command "npm install".

- Whitenoise then must be installed for static files in deployment. This was done by the following command "pip3 install whitenoise==6.4.0". Then create a new empty folder called staticfiles by the following command "mkdir staticfiles".

- In the root directory of the project create a new file named runtime.txt and inside add the correct version of python.

- Make sure all changes are commited and pushed to GitHub.

- Next log into your Heroku account.

- Load the Heroku app for my Django Rest project.

- Once loaded, on this page you will see a row of tabs at the top left of the page. You first need to click on the "settings" tab and go to the settings page.

- Here, click on "reveal config vars", then a table should drop down revealing all the current convig vars. Make sure that you have config vars added which are "ALLOWED_HOST" set to the URL of your combined project, remove the https:// at the beginning and remove the trailing slash at the end and must also have config var "CLIENT_ORIGIN" and set it to the URL of your combined project. This time keep the https:// at the beginning but remove the trailing slash at the end.

- Return back to the deployment page, scroll down and click on deploy to deploy the app. 
