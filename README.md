# Strongest Avenger React

## Overview

Stongest Avenger React is designed so that the user is able to post images or videos of the favourite Marvel character or others being their favourite character and argue that they are the strongest. The User is able to view a list or posts from all other users. The user can register or login to their own account and be available then to make their own posts, comment on other posts, agree, follow other users, like other posts, update their own profile to tell abit about themselves and their favourite character.

responvie image gooo here with deployed site linnk!!!

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