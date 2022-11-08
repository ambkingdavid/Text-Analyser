// USER INTERFACE LOGIC


$(document).ready(function () {
    $(".submit").click(function () {

        let wordFind = $(".findWord").val();

        let userPassageInput = $(".input").val();

        let userRefinedText = adjustText(userPassageInput);

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

        let userRefinedText = adjustText(userPassageInput);

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