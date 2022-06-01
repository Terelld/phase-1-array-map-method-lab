const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = tutorials.map(tutorial => tutorial.split());


// const firstLetter = 0
// const capitalizeString = titleCased.map(function (){
//   return titleCased.charAt(firstLetter).toUpperCase() + word.slice(1);
// });

// console.log(capitalizeString)
// capitalizeString;

// const reconstructSentences = capitalizeString.map(function (){
//   return function () {
//     capitalizeString.join(' ');
//   }
// })
// reconstructSentences;
function firstLetter(titles) { 
  let singleWords = titles.split(' ')
  return singleWords.map(singleWords => (singleWords[0].toUpperCase()+singleWords.slice(1, singleWords.length))).join(" ")}

function titleCased() {
  return tutorials.map(firstLetter)
}