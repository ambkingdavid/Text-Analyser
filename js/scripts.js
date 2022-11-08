// business logic

//function to check for duplicate words

function removeDuplicate(array) {
    return [...new Set(array)];
}

//function to convert array elements to lowercase

function arrayToLowerCase(array) {
    let joinedArray = array.join(" ")
    joinedArray = joinedArray.toLowerCase();
    return joinedArray.split(" ");
}








function sentenceCount(inputField) {
    if (inputField !== "") {
        let arrayOfWords = inputField.split(" ");
        let newPassage;
        let newWordArray = [];
        arrayOfWords.forEach(function (word) {
            if (word !== "" && word !== "." && isNaN(word)) {
                newWordArray.push(word);
            }
        })
        newPassage = newWordArray.join(" ");
        let sentenceArray = newPassage.split(".");
        let sentences = sentenceArray.join("");
        let words = sentences.split(" ");
        if (words.length === 1 && words[0] === "") {
            return 0;
        }
        else {
            return words.length
        }
    }
    else {
        return 0;
    }
}






// get highest occurrence of word - word array is all lower case_

function mostOccuringWord(wordArray, countArray, countArrayCopy) {

    if (wordArray[0] === "" && wordArray.length === 1) {
        return 0;
    }
    else {

        countArrayCopy.sort();
        let removeDuplicatecount = removeDuplicate(countArrayCopy);
        let top1WordCount;
        let top2WordCount;
        let top3WordCount = removeDuplicatecount[removeDuplicatecount.length - 3];
        if (removeDuplicatecount.length == 1) {
            top1WordCount = removeDuplicatecount[removeDuplicatecount.length - 1];
        }
        else if (removeDuplicatecount.length == 2) {
            top1WordCount = removeDuplicatecount[removeDuplicatecount.length - 1];
            top2WordCount = removeDuplicatecount[removeDuplicatecount.length - 2];
        }
        else {
            top1WordCount = removeDuplicatecount[removeDuplicatecount.length - 1];
            top2WordCount = removeDuplicatecount[removeDuplicatecount.length - 2];
            top3WordCount = removeDuplicatecount[removeDuplicatecount.length - 3];
        }

        let top1OccuringWord = [];
        let top2OccuringWord = [];
        let top3OccuringWord = [];

        let top1CountOccurence = [];
        let top2CountOccurence = [];
        let top3CountOccurence = [];

        countArray.forEach(function (element, index) {

            if (element === top1WordCount) {
                top1CountOccurence.push(index);
            }


            else if (element === top2WordCount) {
                top2CountOccurence.push(index);
            }


            else if (element === top3WordCount) {
                top3CountOccurence.push(index);
            }

        })

        top1CountOccurence.forEach(function (countIndex) {
            wordArray.forEach(function (words, index) {
                if (countIndex === index) {
                    top1OccuringWord.push(words);
                }
            })
        })

        top2CountOccurence.forEach(function (countIndex) {
            wordArray.forEach(function (words, index) {
                if (countIndex === index) {
                    top2OccuringWord.push(words);
                }
            })
        })

        top3CountOccurence.forEach(function (countIndex) {
            wordArray.forEach(function (words, index) {
                if (countIndex === index) {
                    top3OccuringWord.push(words);
                }
            })
        })

        if (removeDuplicatecount.length == 1) {
            return top1OccuringWord + " : " + top1WordCount + "<br>"
        }
        else if (removeDuplicatecount.length == 2) {
            return top1OccuringWord + " : " + top1WordCount + "<br>"
                + top2OccuringWord + " : " + top2WordCount
        }
        else {
            return top1OccuringWord + " : " + top1WordCount +
                "<br>" + top2OccuringWord + " : " + top2WordCount +
                "<br>" + top3OccuringWord + " : " + top3WordCount;
        }
    }
}






// funtion to bold occurence of a Word in a text

function search(passage, word) {
    let passageArray = passage.split(" ");
    let regExpVariable = new RegExp(`${word}`, 'gi');
    let newPassage = "<p>"
    for (let i = 0; i < passageArray.length; i++) {

        if ((passageArray[i].toLowerCase()).includes(word.toLowerCase())) {

            let newWord = passageArray[i].replace(regExpVariable,  "<b class=\"text-danger fs-5\">" + word + "</b>");
            newPassage = newPassage.concat(newWord);
        }
        else {
            newPassage = newPassage.concat(passageArray[i])
        }

        if (i !== passageArray.length - 1) {
            newPassage = newPassage.concat(" ")
        }
    }
    return newPassage + "</p>";
}

// Function to count the instance of a word in a text

function wordInstanceCount(passage, word) {
    let passageArray = passage.split(" ");

    let instanceCount = 0
    for (let i = 0; i < passageArray.length; i++) {

        if ((passageArray[i].toLowerCase()).includes(word.toLowerCase())) {
            instanceCount++;
        }
    }
    return instanceCount;
}

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

// bold wordsearch function

function wordSearch(sentence, word) {

}

//function 2

function paragraphWordArray(paragraph) {
    let sentence = seperateWords(paragraph);
    let noWords = []
    if (sentence !== "") {
        let wordsArray = splitValidPassage(sentence);
        return wordsArray;
    }
    else {
        return noWords;
    }


}


//function 3

//split plain passage by words into an array

function splitValidPassage(passage) {
    let word = passage.split(" ");
    let wordArray = wordTrimmer(word);

    if (wordArray.length === 1 && word[0] === "") {
        return 0;
    }
    else {
        return wordArray; // returns an array
    }
}

//function to trim out words from a paragraph

function seperateWords(paragraph) {
    if (paragraph !== "") {
        let arrayOfWords = paragraph.split(" ");
        let newParagraph;
        let newWordArray = [];
        arrayOfWords.forEach(function (word) {
            if (word !== "" && word !== "." && isNaN(word)) {
                newWordArray.push(word);
            }
        })
        newParagraph = newWordArray.join(" ")
        return newParagraph;
        //returns a string
    }
    else {
        return "";
    }
}

// function for trimming words, array is assumed to contain only words and not numbers

function wordTrimmer(arr) {
    let trimmedWordArray = [];
    if (arr.length === 1 && arr[0] === "") {
        return trimmedWordArray;
    }
    arr.forEach(function (e) {
        if ((e[0].toLowerCase() >= 'a' && e[0].toLowerCase() <= 'z') && (e[e.length - 1].toLowerCase() >= 'a' && e[e.length - 1].toLowerCase() <= 'z')) {
            trimmedWordArray.push(e)
        }
        else if ((e[0].toLowerCase() >= 'a' && e[0].toLowerCase() <= 'z') && !(e[e.length - 1].toLowerCase() >= 'a' && e[e.length - 1].toLowerCase() <= 'z')) {
            trimmedWordArray.push(e.slice(0, -1))
        }
        else if (!(e[0].toLowerCase() >= 'a' && e[0].toLowerCase() <= 'z') && (e[e.length - 1].toLowerCase() >= 'a' && e[e.length - 1].toLowerCase() <= 'z')) {
            trimmedWordArray.push(e.slice(1))
        }
    })
    return trimmedWordArray;
}


// function to count how many times each word appears in a paragraph

function wordCountArray(wordArray, elementArray) {

    let arr = [];

    wordArray.forEach(function (value) {
        let count = 0;
        let nCount = [];
        elementArray.forEach(function (nValue) {
            if (value === nValue) {
                count++;
            }
        })
        nCount.push(value, count);
        arr.push(nCount);
    })
    return arr;

}


// function to sort an arrays in another array

function sortArrayElement(array) {
    let newArray = array.sort(function (a, b) {
        return b[1] - a[1];
    })
    return newArray;
}


// function to print top 3 words

function top3Words(arr) {
    let top = "<ol>"
    arr.forEach(function (element, index) {
        if (index <= 2) {
            top +="<li>" + "<b>" + element[0] + "</b>" + " : " + element[1] + "</li>"
        }
        else if (index === 3) {
            top += "</ol>"
        }
    })
    return top;
}

function boldText(text) {
    let sentence = seperateWords(text);
    let wordsArray = sentence.split(" ");
    let offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
    let maskedSentence = ""
    if (sentence !== "") {
        offensiveWords.forEach(function (element1, index1) {
            wordsArray.forEach(function (element2, index2) {
                if (element1.toLowerCase() === element2.toLowerCase() && element2[0].toLowerCase() === "z") {
                    maskedSentence = maskedSentence.concat("z****s")
                }
                else if (element1.toLowerCase() === element2.toLowerCase() && element2[0].toLowerCase() === "m") {
                    maskedSentence = maskedSentence.concat("m*******r");
                }
                else if (element1.toLowerCase() === element2.toLowerCase() && element2[0].toLowerCase() === "b") {
                    maskedSentence = maskedSentence.concat("b*******i");
                }
                else if (element1.toLowerCase() === element2.toLowerCase() && element2[0].toLowerCase() === "l") {
                    maskedSentence = maskedSentence.concat("l********p");
                }
                else {
                    maskedSentence = maskedSentence.concat(element2)
                }

                if (index2 !== wordsArray.length - 1) {
                    maskedSentence = maskedSentence.concat(" ")
                }
            })
        })
        return maskedSentence;
    }
    else {
        return "";
    }
}

function adjustText(text) {
    let sentence = seperateWords(text);
    let wordsArray = sentence.split(" ");
    let offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
    let maskedSentence = ""
    let i;
    if (sentence !== "") {
        for (i = 0; i < wordsArray.length; i++) {
            if (((wordsArray[i].toLowerCase()).includes(offensiveWords[0]))) {
                let word = wordsArray[i].replace(/oink/g, "****");
                maskedSentence = maskedSentence.concat(word);

            }
            else if (((wordsArray[i].toLowerCase()).includes(offensiveWords[1]))) {
                let word = wordsArray[i].replace(/uppetee/g, "*******");
                maskedSentence = maskedSentence.concat(word);
            }
            else if (((wordsArray[i].toLowerCase()).includes(offensiveWords[2]))) {
                let word = wordsArray[i].replace(/iffaron/g, "*******");
                maskedSentence = maskedSentence.concat(word);
            }
            else if (((wordsArray[i].toLowerCase()).includes(offensiveWords[3]))) {
                let word = wordsArray[i].replace(/oopdaloo/g, "********");
                maskedSentence = maskedSentence.concat(word);

            }
            else {
                maskedSentence = maskedSentence.concat(wordsArray[i])
            }

            if (i !== wordsArray.length) {
                maskedSentence = maskedSentence.concat(" ")
            }
        }
        return maskedSentence;
    }
    else {
        return "";
    }
}

function masker(word) {
    let charArray = word.split("")
    let maskedWord = ""

}




