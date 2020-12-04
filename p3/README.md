# Project 2

- By: Christopher Cianelli
- Production URL: <http://e28p2.hesccian.me>

## Pages summary

- [Home](http://e28p2.hesccian.me/math)
- [Addition](http://e28p2.hesccian.me/math/practice/addition)
- [Subtraction](http://e28p2.hesccian.me/math/practice/subtraction)
- [Multiplication](http://e28p2.hesccian.me/math/practice/multiplication)
- [Division](http://e28p2.hesccian.me/math/practice/division)
- [Flashcards Home](http://e28p2.hesccian.me/flashcards)
- [Create Flash Cards](http://e28p2.hesccian.me/flashcards/createflashcards)
- [Edit Flash Card](http://e28p2.hesccian.me/flashcards/editflashcards)
- [Review Flash Cards](http://e28p2.hesccian.me/flashcards/reviewflashcards)

## SFC summary

- FlashInputField.vue
- HeaderMain.vue
- HeaderScores.vue
- PracticeDifficultyInputs.vue
- PracticeDifficultyLabel.vue
- PracticeTemplate.vue
- MathLinks.vue
- MathTemplateLayout.vue
- NavLink.vue
- VLearnNav.vue
- Modal.vue
- SignOn.vue (Not implemented in this project but was created)
- CreateFlashCard.vue
- EditFlashCard.vue
- EditFlashCardsHome.vue
- FlashHome.vue
- ReviewFlashCards.vue
- MathPracticeAdd.vue
- MathPracticeDivision.vue
- MathPracticeExponents.vue
- MathPracticeMultiply.vue
- MathPracticeSubtract.vue
- MathHome.vue
- NotFound.vue (Catch all if user enters route that is not enabled on the server.)

## Server interaction

- This application stores the users' attempts and correct answers per math subject.
- This application also allows the user to create flash cards and edit/review them.
- The scores and flash card data are saved in a mongoDB database.

## Outside resources

- TailwindCSS (CSS Framework)
- Axios (Promise based HTTP client for the browser and node.js)
- ExpressJS (NodeJS Server Module)
- MongoDB (database for backend)
- MongoDB nodeJS Driver (driver to interact with mongoDB using nodeJS)
- dotENV (module to store and read .env files)
- argon2 (NodeJS hashing Module)
- [Favicon](https://pixabay.com/illustrations/learning-hint-school-subject-3245793/)
- [Logo](https://pixabay.com/illustrations/businessman-cartoons-training-607831/)
- [Calculator Image](https://pixabay.com/vectors/school-school-supplies-education-1555910/)
- [Posted Note Image](https://pixabay.com/vectors/note-post-it-reminder-sticky-note-147951/)

## Notes for instructor

- Created a new droplet in digital ocean to practice. I utilized a NodeJS droplet which uses a Nginx web server.
