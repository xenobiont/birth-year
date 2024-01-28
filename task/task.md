# Task

Write a code, that will ask the user (using `window.prompt()` function) for his year of birth and output it to console.

You should foresee the case if user haven't entered the value and ask him to do this again

## `validataData` function should:

- check if the data string, entered by user is valid and throw an error with message 'No data' if user haven't entered the data, and 'Not a valid year' if user entered a non-valid value (e.g., 19922, year1923, 95 etc. - year should be in YYYY format)

- allow to customize messages for 'No data' and 'Not a valid year' errors (as second and third arguments).
