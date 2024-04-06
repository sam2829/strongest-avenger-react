# Strongest Avenger React

## Testing Overview

During the development of this project, numerous testing was carried out by myself and others.

## Contents

- [Strongest Avenger React](#strongest-avenger-react)
  - [Testing Overview](#testing-overview)
  - [Contents](#contents)
  - [Manual Testing](#manual-testing)
  - [Validators](#validators)
    - [Lighthouse](#lighthouse)
    - [ESLint Javascript](#eslint-javascript)
    - [W3C CSS Validator](#w3c-css-validator)
  - [Responsiveness](#responsiveness)
  - [Bugs & Fixes](#bugs-&-fixes)

## Manual Testing

Manual testing was carried out throughout the project, making sure user stories were working successfully and the site was functioning correctly.

Full test table:

| Feature | Expected Outcome | Testing Performed | Result | Pass / Fail |
| --- | --- | --- | --- | --- |
|`Homepage`|
| When user first loads site. | When the page first loads the user is presented with a clear homepage, displaying the most recent posts, Navbar, popular profiles and search by option. | Loaded the site for first time. | Homepage was loaded, most recent posts, navbar, popular profiles and search by options on display. | Pass |
|`Sign up`|
| User is able to create an account. | User is able to load the sign up page, if the sign up form is filled out correctly the user should have created an account. | Loaded the sign up page and filled out the form correctly. | Succssfully created an account. | Pass |
| User must fill out sign up form in full and correct. | User isn't able to create an account if sign up form fields are left blank or havn't been filled out correctly. If not fulll or correct, error messages should be displayed, informing users of the error. | Tried submitting sign up form with empty fields, submitting form with usernames already taken, repeat the password wrong and many other scenarios. | Each time I was unable to submit the form and error messages were displayed informing me the error. | Pass |
|`Sign in`|
| User is able to sign in to their existing account.| User is able to sign in to their existing account if previously created one by filling out the sign in form. | Filled out the sign in form using details of an account I had already created. | I had successfully logged in. | Pass |
| User must fill out sign in form correctly. | User is unable to sign into an account if the the sign in form isn't sibmitted correctly. Error messages will be displayed informing user of the errors. | Filled out the sign in form with the incorrect details or left fields blank. | Each time I was unable to log into my account and error messages were displayed informing me of the problem. | Pass |
| Once logged in user is re-directed to the homepage. | When a user successfully signs in, they are re-directed to the homepage. | Signed in a user. | Was successfully re-directed to the homepage. | Pass |
| Successfull sign in message. | When a user successfully signs in, they are greeted with a pop up alert message saying they have signed in. This message can be closed by user or will close in three seconds. | Signed in. | Alert message appears saying I've successfully signed in. I could also close this myself or it did close itself in three seconds. | Pass |
|`Sign out`|
| User can sign out. | User is able to sign out and when this happens, user is re-directed to the homepage. | Signed out. | When signed out I was re-directed to the homepage. | Pass |
| Successfull sign out message. | When user signs out, an alert message appears informing the user they have succesffully signed out. This message can be closed by user or will close in three seconds. | Signed out. | Alert message appeared, informing me I had successfully signed out. I could also close this myself or it did close itself in three seconds. | Pass |
|`Navbar`|
| Check User can navigate across Navbar. | Whether or not the user is logged in or out, the user can click on the any of the links and will be re-directed t the correct page. | Whilst logged in or logged out I clicked on all the different nav links on show. | Each time time the nav link took me to get correct page. | Pass |
| Navbar changes depending on if user is logged in out out. | If a user is logged in the user has a different navbar on display and is able to access more pages. | Logged in and out and checked the state of the navbar. | When logged in I had a different navbar on display which should only be available to a logged in user. | Pass |

