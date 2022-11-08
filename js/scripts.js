

// function mostOccuringWord(wordArray, countArray, countArrayCopy) {

//     if (wordArray[0] === "" && wordArray.length === 1) {
//         return 0;
//     }
//     else {

//         countArrayCopy.sort();
//         let removeDuplicatecount = removeDuplicate(countArrayCopy);
//         let top1WordCount;
//         let top2WordCount;
//         let top3WordCount = removeDuplicatecount[removeDuplicatecount.length - 3];
//         if (removeDuplicatecount.length == 1) {
//             top1WordCount = removeDuplicatecount[removeDuplicatecount.length - 1];
//         }
//         else if (removeDuplicatecount.length == 2) {
//             top1WordCount = removeDuplicatecount[removeDuplicatecount.length - 1];
//             top2WordCount = removeDuplicatecount[removeDuplicatecount.length - 2];
//         }
//         else {
//             top1WordCount = removeDuplicatecount[removeDuplicatecount.length - 1];
//             top2WordCount = removeDuplicatecount[removeDuplicatecount.length - 2];
//             top3WordCount = removeDuplicatecount[removeDuplicatecount.length - 3];
//         }

//         let top1OccuringWord = [];
//         let top2OccuringWord = [];
//         let top3OccuringWord = [];

//         let top1CountOccurence = [];
//         let top2CountOccurence = [];
//         let top3CountOccurence = [];

//         countArray.forEach(function (element, index) {

//             if (element === top1WordCount) {
//                 top1CountOccurence.push(index);
//             }


//             else if (element === top2WordCount) {
//                 top2CountOccurence.push(index);
//             }


//             else if (element === top3WordCount) {
//                 top3CountOccurence.push(index);
//             }

//         })

//         top1CountOccurence.forEach(function (countIndex) {
//             wordArray.forEach(function (words, index) {
//                 if (countIndex === index) {
//                     top1OccuringWord.push(words);
//                 }
//             })
//         })

//         top2CountOccurence.forEach(function (countIndex) {
//             wordArray.forEach(function (words, index) {
//                 if (countIndex === index) {
//                     top2OccuringWord.push(words);
//                 }
//             })
//         })

//         top3CountOccurence.forEach(function (countIndex) {
//             wordArray.forEach(function (words, index) {
//                 if (countIndex === index) {
//                     top3OccuringWord.push(words);
//                 }
//             })
//         })

//         if (removeDuplicatecount.length == 1) {
//             return top1OccuringWord + " : " + top1WordCount + "<br>"
//         }
//         else if (removeDuplicatecount.length == 2) {
//             return top1OccuringWord + " : " + top1WordCount + "<br>"
//                 + top2OccuringWord + " : " + top2WordCount
//         }
//         else {
//             return top1OccuringWord + " : " + top1WordCount +
//                 "<br>" + top2OccuringWord + " : " + top2WordCount +
//                 "<br>" + top3OccuringWord + " : " + top3WordCount;
//         }
//     }
// }






// testing function for inculde

// function wordInclude(sentence, word) {
//     let w = "";
//     let p = "";
//     for (let i = 0; i < sentence.length; i++) {

//         if (sentence[i] === word[0]){
//             for (let j = i; j < i + word.length; j++){
//                 w += "<b>" + sentence[j] + "</b>"
//             }
//             w +=" "
//         }
//         else{

//         }

//     }
//     return w;
// }



//function to mask offensive words in a sentence
// function maskOffensiveWords(text) {
//     let sentence = seperateWords(text);
//     let wordsArray = sentence.split(" ");
//     let offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
//     let maskedSentence = ""
//     if (sentence !== "") {
//         offensiveWords.forEach(function (element1, index1) {
//             wordsArray.forEach(function (element2, index2) {
//                 if (element1.toLowerCase() === element2.toLowerCase() && element2[0].toLowerCase() === "z") {
//                     maskedSentence = maskedSentence.concat("z****s")
//                 }
//                 else if (element1.toLowerCase() === element2.toLowerCase() && element2[0].toLowerCase() === "m") {
//                     maskedSentence = maskedSentence.concat("m*******r");
//                 }
//                 else if (element1.toLowerCase() === element2.toLowerCase() && element2[0].toLowerCase() === "b") {
//                     maskedSentence = maskedSentence.concat("b*******i");
//                 }
//                 else if (element1.toLowerCase() === element2.toLowerCase() && element2[0].toLowerCase() === "l") {
//                     maskedSentence = maskedSentence.concat("l********p");
//                 }
//                 else {
//                     maskedSentence = maskedSentence.concat(element2)
//                 }

//                 if (index2 !== wordsArray.length - 1) {
//                     maskedSentence = maskedSentence.concat(" ")
//                 }
//             })
//         })
//         return maskedSentence;
//     }
//     else {
//         return "";
//     }
// }









