const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default (emails) => {
  const invalidEmails = emails
  .split(",")
  .map((email) => email.trim())
  .filter(email => emailRegex.test(email) === false)

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;

};

// split() 
// The split operation takes the stirng it removes all the comas',' and split all the elements remaining into the seperate elements in a array.

//trim()
// to avoid spaces.

// Lets see how the map() works.
// It takes a value out of the array that we are working with and what ever we return from "email.trim()" these function will added to a new array and that new array is eventually what gets return from map.
// So essentially every single email we trim it we return the trim string, all those trimed email are assembled together and returned from these entire function call ".map(email => email.trim())", So the ends result ends up on emailArray.
