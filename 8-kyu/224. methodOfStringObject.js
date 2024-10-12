// https://www.codewars.com/kata/57280481e8118511f7000ffa
// Training JS #18: Methods of String object--concat() split() and its good friend join()

function splitAndMerge(string, separator) {
  let words = string.split(" ");
  let newSentence = "";
  for (let i = 0; i < words.length; i++) {
    newSentence += (i !== 0 ? " " : "") + words[i].split("").join(separator);
  }
  return newSentence;
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("My name is John", "-"));
