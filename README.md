1. test : should return the number of words in a passsage and 0 if the input is empty

code: sentenceCount();
Expected output: >= 0

function sentenceCount(inputField) {
    if (inputField !== "") {
        let sentenceArray = inputField.split(".");
        return sentenceArray.length;
    }
    else {
        return 0;
    }
}

2. test : should return the number of words excluding spaces and numbers

code : sentenceCount();
output: >= 0 

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
        if (words.length === 1 && words[0] === ""){
            return 0;
        }
        else{
            return words.length
        }
        
    }

    else {
        return 0;
    }
}

3. 
