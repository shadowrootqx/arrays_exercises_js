// Task: Write the function camelize(str) that changes dash-separated words like 
// “my-short-string” into camel-cased “myShortString”.

function camelize(word) {
    // Split word to array
    let wordToArr = word.split("-");

    // Loop over the array and capitalize each element except the first
    for (let i = 1; i < wordToArr.length; i++) {
        // Eliminate the first letter
        let sliced = wordToArr[i].slice(1);
        // Substract and capitalise the first letter
        let capital = wordToArr[i].substr(0, 1).toUpperCase();
        // Join the capital letter and rest of the word
        wordToArr[i] = capital.concat(sliced);
    } 

    // Join the elements into a new word
    let camelizedWord = wordToArr.join("");
    
    return camelizedWord;
}