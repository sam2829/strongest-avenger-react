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
    - [ESLint JavaScript](#eslint-javascript)
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
| Infinite scroll on posts. | When the page renders the ten most recent posts are on display. As the user scrolls down the page, the page automatically renders the next ten posts. | Loaded homepage and scrolled down. | Ten posts were originally loaded the page loaded next ten as I scrolled towards the bottom. | Pass |
| No posts image and message. | If when loading the homepage and no posts are available, an image and message will appear informing the user that there are no posts and to refine their search. | Clicked on links with no posts. | Each time image and message appeared. | Pass |
| Search bar. | When on the homepage, the user can use the search bar to refine their search of the posts displayed on the homepage. These can be the title, username, character name and character category. | Loaded the homepage and tried refining my search by all different options. | Each time the search bar successfully refined my search according to what I had typed. | Pass |
|`Sign up`|
| User is able to create an account. | User is able to load the sign up page, if the sign up form is filled out correctly the user should have created an account. | Loaded the sign up page and filled out the form correctly. | Successfully created an account. | Pass |
| User must fill out sign up form in full and correct. | User isn't able to create an account if sign up form fields are left blank or haven't been filled out correctly. If not full or correct, error messages should be displayed, informing users of the error. | Tried submitting sign up form with empty fields, submitting form with usernames already taken, repeat the password wrong and many other scenarios. | Each time I was unable to submit the form and error messages were displayed informing me the error. | Pass |
|`Sign in`|
| User is able to sign in to their existing account.| User is able to sign in to their existing account if previously created one by filling out the sign in form. | Filled out the sign in form using details of an account I had already created. | I had successfully logged in. | Pass |
| User must fill out sign in form correctly. | User is unable to sign into an account if the sign in form isn't submitted correctly. Error messages will be displayed informing user of the errors. | Filled out the sign in form with the incorrect details or left fields blank. | Each time I was unable to log into my account and error messages were displayed informing me of the problem. | Pass |
| Once logged in user is re-directed to the homepage. | When a user successfully signs in, they are re-directed to the homepage. | Signed in a user. | Was successfully re-directed to the homepage. | Pass |
| Successful sign in message. | When a user successfully signs in, they are greeted with a pop up alert message saying they have signed in. This message can be closed by user or will close in three seconds. | Signed in. | Alert message appears saying I've successfully signed in. I could also close this myself or it did close itself in three seconds. | Pass |
|`Sign out`|
| User can sign out. | User is able to sign out and when this happens, user is re-directed to the homepage. | Signed out. | When signed out I was re-directed to the homepage. | Pass |
| Successful sign out message. | When user signs out, an alert message appears informing the user they have successfully signed out. This message can be closed by user or will close in three seconds. | Signed out. | Alert message appeared, informing me I had successfully signed out. I could also close this myself or it did close itself in three seconds. | Pass |
|`Navbar`|
| Check User can navigate across Navbar. | Whether or not the user is logged in or out, the user can click on the any of the links and will be re-directed to the correct page. | Whilst logged in or logged out I clicked on all the different nav links on show. | Each time the nav link took me to get correct page. | Pass |
| Navbar changes depending on if user is logged in out. | If a user is logged in the user has a different navbar on display and is able to access more pages. | Logged in and out and checked the state of the navbar. | When logged in I had a different navbar on display which should only be available to a logged in user. | Pass |
| Hamburger menu. | When on a mobile device the navbar should now be a drop down hamburger menu. | Loaded the site on several mobile devices. | Each time the navbar was in the form of the hamburger menu. | Pass |
| Hover over link. | When user hovers over a nav link, the icon for that nav link will change colour to show user that they are hovering over that link. | Hovered over all nav links. | Each nav link when hovered over, their respected icon changed colour. | Pass |
| Main logo link to homepage. | If the user clicks on the main logo for the site, they are re-directed back to the homepage. | Clicked on the main logo from different pages on the site. | Each time I was navigated back to the homepage. | Pass | 
| `Search By`|
| Search By component is rendered. | Search By component is rendered where it's suppose to and changes style for smaller screens. | Checked that search by component was rendered on the pages that it should and that the styles changed depending on the if it was a desktop or mobile device. | The search by component rendered on the pages it should and styles were adjusted to mobile devices. | Pass |
| Search by links work. | The search by component has four links that when one is clicked it will take the user to another page, which has filtered the posts to the specific character category which the user clicked on. | Clicked on the links. | Each time I was taken to a new page, where the posts on display were only of that specific character category. | Pass |
| Active link changes colour. | When the user clicks on one of the search links, the active link will be a different colour to inform the user that they are on that page. | Clicked on the links. | Each time the active link was changed to a different colour. | Pass |
| No posts image and message. | If when clicked on one of the links and no posts are available, an image and message will appear informing the user that there are no posts and to refine their search. | Clicked on links with no posts. | Each time image and message appeared. | Pass |
| `Popular Profiles`|
| Popular profiles component is rendered. | Popular profiles component is rendered where it's suppose to and changes style for smaller screens. | Checked that popular profiles component was rendered on the pages that it should and that the styles changed depending on the if it was a desktop or mobile device. | The popular profiles component rendered on the pages it should and styles were adjusted to mobile devices. | Pass |
| Spinner when loading. | When the popular profiles component is being loaded, a spinning icon is in it's place, informing the user that it's loading. | Loaded the pages where popular profiles component should be. | Each time spinning icon was on display whilst popular profiles data was loading. This then disappeared once loaded. | Pass |
| Profile image links. | If the user clicks on the profile images of one of the users in the popular profiles component, the user will be navigated to that specific users profile page. | Clicked on different profile images. | Each time was taken to the specific profile page of the user who's profile image I had clicked. | Pass |
| Follow & Unfollow Buttons appear logged in. | When a user is logged in, in the popular profiles component there will now be follow or unfollow buttons next to each profile. These let the user follow of unfollow a specific user. | Logged in to an account. | Follow and unfollow buttons were on display. | Pass |
| Follow & Unfollow buttons change when clicked. | If a user clicks on either a follow or unfollow button, the button will automatically then change to opposite value it originally was and change styles to suit. | Clicked on follow and unfollow buttons. | Each time when clicked, follow changed unfollow and vice versa. Styles were also changed. | Pass |
| Follow & Unfollow buttons change when hovered over. | When a user hovers over a follow or unfollow button, that button will change colour to inform the user they are hovering over that button. | Hovered over all follow and unfollow buttons. | Each time, that specific button changed colour when hovered over. | Pass |
|`Feed page`|
| Feed page shows posts of the other users that user is following. | When a user loads the feed page, this should work the same as the homepage but this time the posts on display will be filtered to only the posts of the users that the current user is following. | Logged in and loaded the feed page. | This functioned the same as the homepage and only displayed posts from the users I was following. | Pass |
| No posts image and message. | If when loading the feed page and no posts are available, an image and message will appear informing the user that there are no posts and to refine their search. This will occur when current user is not following any users. | Logged into an account which was not following any other users. | Each time image and message appeared. | Pass |
|`Liked page`|
| Liked page shows a list of posts which the current user has liked. | When a user loads the liked page, this should work the same as the homepage but this time the posts on display will be filtered to only the posts to which that current user has liked. | Logged in and loaded the liked page. | This functioned the same as the homepage and only displayed posts to which that current user had liked. | Pass |
| No posts image and message. | If when loading the liked page and no posts are available, an image and message will appear informing the user that there are no posts and to refine their search. This will occur when current user hasn't liked any posts. | Logged into an account which had not liked any posts. | Each time image and message appeared. | Pass |
|`Posts`|
| Logged in User is able to create post. | When a user is logged in the are able to navigate to the add a post and if form is filled out correctly, they can successfully create a post. | Logged in as a user, filled out add a post form correctly. | Successfully created a post. | Pass |
| Form must be filled out correctly. | User must fill out the all the form fields and correctly to fill create a post. Error messages will be displayed to help user fill out form correctly. | Tried filling out form incorrectly and leaving fields blank. | Each time I was unable to create a post and error messages would appear to help me complete form correctly. | Pass |
| User is able to post an image or video. | When creating a post the user is able to post an image or a video by selecting which media file they would like to post. | Completed add a post form several times each time changing my selection to attempt to post images and videos. | Each time I successfully posted an image or video. | Pass |
| User can only post one media file at a time. | When creating a post, the user is only able to post one media file per post. | Tried selecting multiples images or videos to post. | I was unable to post multiple media files. | Pass |
| Image must be certain size. | When posting an image, the image must be a under a certain size, width and height. If not, then the user will be unable to create the post and an error message will appear informing the user of the error. | Tried posting images that were to large, to high and to wide. | Each time I was unable to create the post and error message appeared informing me of the error. | Pass |
| Video must be a certain length. | When posting a video, the video must be under one minute long. If not then the post will be unsuccessful and an error message will appear informing the user of this error. | Tried posting a video which was over one minute long. | Unable to create the post and error message appeared informing me of this error. | Pass |
| Space bar only isn't accepted in form. | If the user tries to only provide whitespace in any of the form fields then the post will be unsuccessful and error messages will appear informing the user of the error. | Tried submitting form with only whitespace in text fields. | Form was unsuccessful and error messages appeared informing me of errors. | Pass |
| Switching between image and video. | If a user has selected an image to post, but then decided to post a video and switched media files, when switching the previous media file has been deleted so that the form is still only submitting one media file. | First selected an image to post, then switched and selected a video to post and vice versa. | Each time the previous media file was deleted and the post was successful. | Pass |
| Media file must be selected. | User is unable to make a post without an image or video file being selected. Error message will appear informing the user of the error. | Tried submitting the form without selecting an image or video. | Form was unsuccessful and error message appeared informing me of the error. | Pass |
| Success message and redirected to homepage. | When a user has successfully created a post, an alert message will appear informing the user they have successfully created their post and they are re-directed to the homepage. | Create many posts. | Each time alert message appeared informing me of successful post and I was re-directed back to the homepage. | Pass |
| Posts are rendered. | Posts render correctly on the pages they are suppose to and are styled as planned with all the correct information. | Loaded all different pages where post should be rendered. | Posts were rendered and styled as they should be. | Pass |
| Clicking on media file or comment icon for link to full post page. | If the user clicks on the media file of a post or the comment icon of that post, the user will be taken to that specific posts page. | Clicked on several different posts media files and comment icons. | Each time I was navigated to that specific posts page. | Pass |
| Liked icon present. | Each post rendered should have a liked icon rendered with it giving the user option to like the post with a number next to displaying how many likes this post has had. | Loaded pages where posts were present. | Every post had a like icon with a number displaying how many likes post has had. | Pass |
| Logged in users can like a post. | Only a logged in user is able to like a post, when liked the like icon changes so user knows they have liked post. If user is not logged in the overlay message appears over the icon informing user they must be logged in. | Tried liking a post logged in and logged out. | When logged in I was successfully able to like a post and like icon changed. When logged out a message appeared saying I must be logged in. | Pass |
| Logged in users can unlike a post. | Only when logged in can a user unlike a post they had already liked by clicking on the liked icon again. Once click the like icon will change back t it's original state. | Logged in and liked a post and tried un liking same post. | Each time I was able to unlike a post and like icon changed back to it's original state. | Pass |
| Like number increases and decreases. | Each time a post is liked or unliked the like number next to the like icon increments and decrements by one accordingly. | Logged in and liked and unliked posts. | Each time I liked a post the number incremented by one, each time I unliked a post the number decremented by one. | Pass |
| User can't like their own post. | When logged in a user is unable to like their own post. Message will appear above like icon informing user of this. | Logged in and tried to like my own post. | Each time I was unable to like my own post and message appeared above icon informing me of this. | Pass |
| Comment icon present. | Each post rendered should have a comment icon rendered with it showing to the user how many comments this post has had. This should increment and decrement by one with each comment created or deleted. | Loaded posts, then created and deleted comments. | Comment icon was present on all posts. Number correctly displayed how many comments there were and incremented and decremented by one accordingly with each comment created and deleted. | Pass |
| Report icon appears when logged in. | When a user is logged the user can see the report icon on the post. Clicking this re-directs to the report form so that the user is able to file a report if they wish. | Viewed posts logged out and logged in. | When logged out the report icon was not present. When logged in report icon was present and when clicked navigated me to report form. | Pass |
| Profile image re-directs to profile page. | The profile image of the owner of the specific post, if clicked will navigate the user to the specific users profile. | Clicked on numerous different posts profile images. | Each time I was re-directed to that specific users profile page. | Pass |
| Video posts do not play automatically. | When a video has been posts, the video will not start playing until the video play button has been clicked. | Made video posts. | Each video post did not play automatically and played fine once play button was pressed. | Pass |
| Form buttons change to spinner when submitting. | When the user clicks the post button on either the post create or post edit forms, the buttons will now no longer be displayed and be replaced with the spinning icon. This lets the user know what their form is being submitted and it prevents them from trying to submit the form again. If form fails error messages will appear and buttons will be rendered again. | Submitted numerous forms for the post create and post edit form. | Each time the form was being submitted, the buttons were no longer rendered and replaced with the spinning icon. If the form was unsuccessful the errors messages would appear with the buttons now rendered again. | Pass |
|`Main post page`|
| Post selected is rendered. | When clicked of a specific post, the user is re-directed to the specific page for that page and post is displayed correctly. | Clicked on many different posts. | Each time I was successfully navigated to the specific posts page. | Pass |
| If owner and logged in, user can edit post. | If user is logged and is the owner of the post, a three dot icon will appear in the top right of the post. Clicking this will reveal an edit icon and when clicked will navigate user to the post edit form. | Logged in user and found that users post. | Three dot icon appeared and was able to navigate to the edit form. | Pass |
| Edit post successfully. | If a user wants to edit a post, the edit post form functions the same as the add a post form but this time all the form fields are loaded with the existing data, so user can easily change what is necessary. Once submitted user is redirected back to that specific profile page with success message. | Loaded many different posts and went to edit form. | Each time the edit from functioned the same as add post form and form fields were loaded with existing data. Any changes were successful and on submission I was re-directed back to the specific post page with success message on display. | Pass |
| User cannot edit another's post. | A user is unable to edit the post of another users. | Went to the edit form of a specific post and user and copied the URL. Then logged in as a different user and tried pasting in that URL. | When I pasted URL in, I was redirected to homepage and unable to edit another's post. | Pass |
| User can delete their own post. | When a user is logged in and is the owner of the specific post, a three dot icon appears at the top right of the post. If clicked a drop down menu appears and in that is a delete icon. If clicked this will allow the user to delete their own post. | Logged in as a user and went to a post of that user. Clicked on the delete icon. | Post has successfully been deleted and removed all comments with it. | Pass |
| Comments displayed if any. | If there have been any comments with this post, they will be displayed underneath the post itself. | Clicked on post I knew had comments. | Comments were on display underneath the post and correctly styled. | Pass |
| Comment form logged in. | If the user is logged in and on the main post page, the user can see a comment form above all the comments. If filled out correctly user can create their own comment which will then appear at the top of the comments. | Logged in as a user and attempted to fill out comment form. | Once logged in comment form was rendered correctly. Once filled out successfully I was able to submit my comment which appeared at the top of the comments list. | Pass |
| Comment form must be filled out correctly. | Comment form must be filled out correctly and if not, error messages will be displayed informing user of the error. | Filled out form incorrectly. | Was unable to submit form and error messages appear informing me of error. | Pass |
| Agree icon toggle. | When the user is creating a comment, they are able to click on the agree icon and this will change state to show they agree, they can also click again for it to return back to it's original state to show disagree. This can be toggled continuously and posted either state. | Loaded comment form and toggled agree icon. | I was able to continuously toggle the agree icon and post if any state. | Pass |
| Logged in no comments. | If user is logged in and there are no comments, underneath the comment form there will be a unique message informing user there are no comments but to be the first to do so. | Logged in as user and went to post with no comments. | Comment form was present and underneath was message saying no comments but be the first. | Pass |
| Logged out no comments. | If a user is logged out and no comments have been made, a message will be displayed informing the user there isn't any comments. | When logged out went to post with no comments. | No comments were present but message was on display informing me there was no  comments yet. | Pass |
| User can edit their own comment. | If user is logged in and the owner of a comment, a three dot icon will appear at the top right of the comment. If clicked a drop down menu will appear with an edit icon present. When edit icon clicked this will render the edit form which works exactly the same as the create comment form, except the fields are pre-populated with existing data. Once changed and saved the form disappears and the changes are seen. | Went to the comment edit form and edited my comment. | Edit comment form was rendered and fields were pre-populated with existing data. Once I saved changed, the form disappeared and my changes were there to be seen. | Pass |
| Updated at date changes when edited. | When a comment has successfully been edited, the date of the comment has now changed to the time it was last updated. | Updated a comment. | The date had changed to the time I had updated the comment. | Pass |
| User can delete comment. | When a user is logged in and the owner of a comment, a three dot icon appear at the top of the comment, once clicked a drop down menu appears. In this menu a delete icon is present and when clicked will delete the comment. | Logged in a navigated my way to the delete comment icon. | Once clicked my comment was successfully deleted and removed from display. | Pass | 
| Profile image on comment, link to profile page. | If a user clicks on the profile image on the comment, the user will be re-directed to that specific users profile page. | Clicked on many different profile images on comments. | Each time was re-directed to that specific users profile page. | Pass |
| Infinite scroll for comments. | When page first loads the first ten comments are on display, but as the user scrolls down the next ten comments will be loaded. This saves the user having to click to next page. | Loaded page and scrolled down. | First ten comments were first loaded and as I scrolled down more comments were being loaded. | Pass |
|`Profile Page`|
| Profile renders that users posts. | When a user goes to a profile page, posts should be rendered but only the posts by the user who's profile page it is. | Went to numerous profile pages. | The only posts on display were from the user of who's profile page it was. | Pass |
| Message if no posts. | If no posts have been made by this specific user and image and message will appear informing user that this user hasn't made any posts yet. | Went to profile page of user who hasn't made any posts. | Image and message informing me this user hasn't made any posts was on display. | Pass |
| Profile information. | When on a users profile page, the user should be able to see information about that specific user. This should involve profile image, username, favourite character (if selected), how many posts they've made, how many followers, how many people they are following and an about me section. | Went to many different profiles. | Each profile had all the users information on display.| Pass |
| If logged in follow or unfollow button present. | If user is logged in and it isn't their own profile page, in the profile information section there should now be a follow or unfollow button present. | Logged in and went to another users profile. | Follow or unfollow button was present. | Pass |
| Follow button functionality. | If follow button is present and clicked, this changes to unfollow and vice versa. This also changes the state of the button in the popular profiles component if that profile is on display there. What ever the state is in one section will match the other section. | Clicked follow and unfollow buttons. | When buttons were clicked they switched state correctly. They also updated the button in the popular profiles section and vice versa so both buttons always matched. | Pass |
| Followers value increments and decrements. | When a user clicks the follow or unfollow buttons the users profile information saying followers should increment and decrement by one accordingly. | Clicked follow and unfollow button on different profile pages and in popular profiles component. | Each time I clicked on a follow or unfollow button for a users profile, whether it be on the users profile information section or the popular profiles sections, I could see that users Followers number increment and decrement by one correctly. | Pass |
| User own Profile page following. | If a user is on their own profile page and click to follow or unfollow another user, they should see their following value increment and decrement by one accordingly. | Logged in and went to current users profile page. Then clicked follow and unfollow buttons for other users. | Each time follow or unfollow was clicked my current users following number value incremented ad decremented by one accordingly. | Pass |
| User can edit their own profile information. | If a user is logged in and go the their own profile page, at the top right of the profile information a three dot icon should appear, if clicked an edit profile option should appear and if clicked will take user to the edit profile form. | Logged in as user and navigated to current user profile page. | Three dot icon was present and was able to navigate to edit profile page. | Pass |
| Successfully edit profile. | When user loads the edit profile form, all form fields will be pre-populated with existing data if any. The user is able to easily change what they wish and once saved user will be directed back to their profile page with a success message and changes on display. | Filled out edit profile form successfully. | Changes were successfully updated to be seen and alert message also on display. | Pass |
| Edit profile form to be filled out correctly. | Edit profile form must be filled correctly or error message will be displayed informing user or error. | Filled out edit profile form incorrectly. | Unable to update profile and error messages appear informing me of error. | Pass |
| User can edit their username. | If a user is logged in and go to their own profile page, at the top right of the profile information a three dot icon should appear, if clicked a change username option should appear and if clicked will take user to the change username form. | Logged in as user and navigated to current user profile page. | Three dot icon was present and was able to navigate to change username page. | Pass |
| Successfully edit username. | When user loads the change username form, all form fields will be pre-populated with existing data. The user is able to easily change what they wish and once saved user will be directed back to their profile page with a success message and changes on display. | Filled out change username form successfully. | Changes were successfully updated to be seen and alert message also on display. | Pass |
| Edit username form to be filled out correctly. | Edit username form must be filled correctly or error message will be displayed informing user of error. | Filled out edit username form incorrectly. | Unable to update username and error messages appear informing me of error. | Pass |
| User can edit their password. | If a user is logged in and go to their own profile page, at the top right of the profile information a three dot icon should appear, if clicked a change password option should appear and if clicked will take user to the change password form. | Logged in as user and navigated to current user profile page. | Three dot icon was present and was able to navigate to change password page. | Pass |
| Successfully edit password. | When user loads the change password form the user is able to easily change what they wish and once saved user will be directed back to their profile page with a success message and changes on display. | Filled out change password form successfully. | Changes were successfully updated to be seen and alert message also on display. | Pass |
| Edit password form to be filled out correctly. | Edit password form must be filled correctly or error message will be displayed informing user of error. | Filled out edit password form incorrectly. | Unable to update password and error messages appear informing me of error. | Pass |
| Profile Information adjusts to smaller screens. | When the user is viewing the profile information in different screen sizes, it is displayed in the correct way. | Viewed the profile page in different screen sizes. | Each screen sizes the profile page layout was correct. | Pass |
| `Report`|
| Submit a report | When a user has loaded the report page by clicking on any report icon, if they fill out form successfully they will be redirected back to the page they were on with an alert message informing them report was successful. | Filled out report form successfully. | Report was successful, I was re-directed back to previous page with alert message saying report was successful. | Pass |
| Report form to be filled out correctly. | Report form must be filled correctly or error message will be displayed informing user of error. | Filled out report form incorrectly. | Unable to submit report and error messages appear informing me of error. | Pass |
| Report reports correct post id. | When submitting a report I wanted to make sure that the post where the report was made included the correct post id, so that the admin knew where to find the issue. | Made many reports, each time checking the API list for post id number and the admin panel to also check report was being loaded with correct post id number. | Each time correct post id number was being loaded with report. | Pass |
| User can load their own reports. | When a user is logged in and goes to their own profile page, in the dropdown menu they will have an option of my reports. Clicking this will take them to the my reports page and will display a list of all the reports. If no reports the user will be informed they have no reports. | Logged in as different users, one with many reports made and one with none, then went to their own profile pages and loaded the my reports page. | On the user who had made reports I could see a list of all the reports the user had made and on the user with no reports made, I was informed that no reports had been made. | Pass |
| Only see reports of the logged in user. | When the user loads the my reports page, the user should only be able to see their own reports and not of any other user. | Logged in as many different users and went to the my reports page. | Each time I was only able to view the reports of the user I was logged in as. | Pass |
| User can edit report. | When a logged in user is on their my reports page, each report should have a dropdown menu and in there the user should be able to click on the edit icon which will take them to the edit report page and when filled the edit form out correctly should have successfully updated their report. | Logged in as different users and tried editing different reports. | Each time I was successfully able to edit each report with a success alert message when doing so. | Pass |
| Only edit if report not resolved. | The user is only able to have the option to edit a report if the report is not resolved, if the report is resolved the edit option from the dropdown menu is not on display. | Logged in as users and tried editing reports that were resolved by clicking on dropdown menu. | Each time I clicked on the dropdown menu of a resolved report, the edit icon was not on display. | Pass |
| User redirected if trying to edit resolved report. | If a user tries to access the edit report form of a report which has been resolved via the URL link, the user will be redirected back to the homepage. | Pasted in the URL for the edit report form for a resolved report. | Each time I was redirected to the homepage. | Pass |
| User redirected if trying to edit another users report. | If a user tries to access the edit report form of another user via the URL link, the user will be redirected back to the homepage. | Pasted in the URL for the edit report form for another user report. | Each time I was redirected to the homepage. | Pass |
| User can delete report. | When a logged in user is on their my reports page, each report should have a dropdown menu and in there the user should be able to click on the delete icon which will successfully delete their report. | Logged in as different users and tried deleting different reports. | Each time I was successfully able to delete each report with a success alert message when doing so. | Pass |
| Edit report form to be filled out correctly. | Edit report form must be filled correctly or error message will be displayed informing user of error. | Filled out edit report form incorrectly. | Unable to submit report and error messages appear informing me of error. | Pass |
|`Admin`|
| Admin is able to view all posts, comments, profiles and reports. | As admin, the admin is able to view and find all posts comments, profiles and reports. | Logged in as admin. | I was able to find any post, comment, profile or report. | Pass |
| Deal with reports. | As admin a list of all reports are on display in orders of reports not resolved. As admin I can then view the issues and correct them as I see fit through the admin panel. Once done I can change the report to resolved. | Made many reports and logged in as admin and attempted to resolve the issue. | Reports were in order of not resolved first and I was able to resolve the issue through the admin panel and mark report as resolved. | Pass |

[Back to top](#strongest-avenger-react)

## Validators

### Lighthouse

<details>

<summary>Desktop</summary>

Homepage:

![Desktop Lighthouse Homepage](docs/readme_screenshots/desktop-lighthouse-homepage.png)

Feed page:

![Desktop Lighthouse Feed Page](docs/readme_screenshots/desktop-lighthouse-feed.png)

Liked page:

![Desktop Lighthouse Liked Page](docs/readme_screenshots/desktop-lighthouse-liked.png)

Sign in page:

![Desktop Lighthouse Sign In Page](docs/readme_screenshots/desktop-lighthouse-signin.png)

Sign up page:

![Desktop Lighthouse Sign Up Page](docs/readme_screenshots/desktop-lighthouse-signup.png)

Profile page:

![Desktop Lighthouse Profile Page](docs/readme_screenshots/desktop-lighthouse-profile.png)

Full post page:

![Desktop Lighthouse Full Post Page](docs/readme_screenshots/desktop-lighthouse-full-post.png)

Create post page:

![Desktop Lighthouse Create post Page](docs/readme_screenshots/desktop-lighthouse-create-post.png)

Edit post page:

![Desktop Edit Post Page](docs/readme_screenshots/desktop-lighthouse-edit-post.png)

Report page:

![Desktop Lighthouse Report Page](docs/readme_screenshots/desktop-lighthouse-report.png)

</details>

<details>

<summary>Mobile</summary>

Homepage:

![Mobile Lighthouse Homepage](docs/readme_screenshots/mobile-lighthouse-homepage.png)

Feed page:

![Mobile Lighthouse Feed Page](docs/readme_screenshots/mobile-lighthouse-feed.png)

Liked page:

![Mobile Lighthouse Liked Page](docs/readme_screenshots/mobile-lighthouse-liked.png)

Sign in page:

![Mobile Lighthouse Sign In Page](docs/readme_screenshots/mobile-lighthouse-signin.png)

Sign up page:

![Mobile Lighthouse Sign Up Page](docs/readme_screenshots/mobile-lighthouse-signup.png)

Profile page:

![Mobile Lighthouse Profile Page](docs/readme_screenshots/mobile-lighthouse-profile.png)

Full post page:

![Mobile Lighthouse Full Post Page](docs/readme_screenshots/mobile-lighthouse-full-post.png)

Create post page:

![Mobile Lighthouse Create post Page](docs/readme_screenshots/mobile-lighthouse-create-post.png)

Edit post page:

![Mobile Edit Post Page](docs/readme_screenshots/mobile-lighthouse-edit-post.png)


Report page:

![Mobile Lighthouse Report Page](docs/readme_screenshots/mobile-lighthouse-report.png)

</details>

[Back to top](#strongest-avenger-react)

### ESLint JavaScript

Most of the JavaScript code validation was done through the Gitpod ide problems tab and with the help of the prettier code formatting extension and ESLint running through the production of the app.

All JavaScript files were then validated using ESLint JavaScript validator, which reported back no issues. 


[Back to top](#strongest-avenger-react)


### W3C CSS Validator

W3C CSS Validator was used to validate the site's CSS code. All style pages return with no errors found:

![W3C CSS Validator](docs/readme_screenshots/css-validator.png)

Only warnings that were present were where I've styled the scroll bar in the App.module.css file and this wasn't deemed an issue.

[Back to top](#strongest-avenger-react)

## Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards. The site was also tested on multiple browsers and devices.

Browser test table:

| Browser Tested | Actual Result | Pass / Fail |
| --- | --- | --- |
| Chrome | As Expected | Pass |
| Firefox | As Expected | Pass |
| Edge | As Expected | Pass |
|Samsung | As Expected | Pass |

Devices tested and devices using google tools:

| Device Tested | Actual Result | Pass / Fail |
| --- | --- | --- |
| Acer Laptop | As expected | Pass |
| Samsung 22 inch Screen | As expected | Pass |
| i Phone SE | As expected | Pass |
| i Phone XR | As expected | Pass |
| i Phone 12 Pro | As expected | Pass |
| i Phone 14 Pro Max | As expected | Pass |
| Pixel 7 | As expected | Pass |
| Samsung Galaxy S8 | As expected | Pass |
| Samsung S20 Ultra | As expected | Pass |
| iPad Mini | As expected | Pass |
| iPad Air | As expected | Pass |
| iPad Pro | As expected | Pass |
| Surface Pro 7 | As expected | Pass |
| Surface Duo | As expected | Pass |
| Galaxy Fold | As expected | Pass |
| Samsung Galaxy A51/71 | As expected | Pass |
| Nest Hub | As expected | Pass |
| Nest Hub Max | As expected | Pass |

[Back to top](#strongest-avenger-react)

## Bugs & Fixes

| Bug | Issue | Resolution |
| --- | --- | --- |
| Error claiming more than one media file was being posted. | When trying to make a post I was getting an error message saying that only one media file could be posted even though I was posting just one media file. | I found out that I had put a constraint in the post model API, this constraint was not letting me make a post as it thought there was more than one media file, even though I was checking this in my serializers.py file, which found the post ok. I used pqsl to remove the constraint as just deleting if from the code and migrating didn't remove the constraint. Once the constraint was fully removed the issue was resolved. |
| Switching media files in post and changing media file type. | When making a post and attempting to change the media file type from image to a video or video to an image once already uploading a media file, the change would not be accepted as the backend was receiving two media files which is not allowed. | To resolve this, in the code I made sure to re-set which ever field wasn't being used to an empty string. |
| Edit post wasn't re-posting media file if unchanged. | When editing a post, if I only changed the text fields and not the media files, the server would think that there wasn't a media file present, even though I could see the media file rendered. | To solve this I used blob in the code which allowed the existing media file to be used in the post if it wasn't changed. |
| Editing comment form wouldn't pre-populate the agree data. | When editing a comment, the comment form wouldn't pre-populate the agree icon to be the correct state to what was originally selected. | To solve this I had to add a prop agreeProp with the value of a agree so it pre-populated the agree value in the edit form. This resolved the issue. |
| New page wouldn't reset the scroll position. | When scrolling down on a page, if I then clicked on a link to go to another page, the scroll position would continue over to the next page. This was not the best approach for what I wanted. | To resolve this I added code in the app.js file which reset the scroll position back to the top every time a page loaded. This resolved the issue. |
| Trying to post large video files would result in error. | When trying to post large video files, the post would take a long time to try to submit, then be unsuccessful with no warning but have an abort error in the console. | After speaking to tutor advice, I now display an alert message when this happens so the user is aware the report has been unsuccessful and that they should make sure the video file is shorter than one minute long. I was also added the spinner icon to replace the form buttons when submitting so the user is aware when the form is trying to be submitted. | 


