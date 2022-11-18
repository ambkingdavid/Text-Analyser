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

//function to mask words in a sentence
function maskText(text) {
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





// USER INTERFACE LOGIC


$(document).ready(function () {
    $(".submit").click(function () {

        let wordFind = $(".findWord").val();

        let userPassageInput = $(".input").val();

        let userRefinedText = maskText(userPassageInput);

        let findWord = search(userRefinedText, wordFind);

        let wordSearchInstanceCount = wordInstanceCount(userRefinedText, wordFind);

        if (wordFind !== "") {
            $(".cards").hide()
            $(".wordSearch").show()
            $(".wordSearchCount").show()
            $(".wordInstance").html(wordFind)
            $(".showPreview").html(findWord);
            $(".searchInstanceCount").html(wordSearchInstanceCount);
        }

    })


    $(".analyze").click(function () {

        let wordFind = $(".findWord").val();

        let userPassageInput = $(".input").val();

        let count = sentenceCount(userPassageInput);
        $(".test").html(count);

        let userWordArray = paragraphWordArray(userPassageInput.toLowerCase());

        let duplicateWordArray = removeDuplicate(arrayToLowerCase(userWordArray));

        let eachWordCountArray = wordCountArray(duplicateWordArray, userWordArray);

        let sortedWordCountArray = sortArrayElement(eachWordCountArray);

        let top3WordArray = top3Words(sortedWordCountArray);

        let userRefinedText = maskText(userPassageInput);

        let findWord = search(userRefinedText, wordFind);

        if ((count !== 0)) {
            $(".top").show();
            $(".no-input").html(top3WordArray);
        }

        $(".cards").hide();
        $(".wordSearch").show();
        $(".showPreview").html(findWord);
    })

    $(".reset").click(function () {
        $(".cards").show();
        $(".wordSearch").hide();
        $(".top").hide();
        $(".wordSearchCount").hide();
    })

})