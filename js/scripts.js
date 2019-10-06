
window.onload = initPage;

function initPage() {
    initDropdowns();
    initResultButton();

    function initDropdowns() {
        var itemsMarkup = "";
        var itemLen = smz3Items.length;

        for (var i = 0; i < itemLen; i++) {
            if (smz3Items[i].name === "[ Zelda Items ]" || smz3Items[i].name === "[ Metroid Items ]") {
                itemsMarkup += "<option style='font-weight: 700' value=" + smz3Items[i].rating + ">" + smz3Items[i].name + "</option>";
            } else {
                itemsMarkup += "<option value=" + smz3Items[i].rating + ">" + smz3Items[i].name + "</option>";
            }
        }

        var dropdowns = document.getElementsByClassName('item-dropdown');

        for (var i = 0; i < dropdowns.length; i++) {
            var currentDropDown = document.getElementById('item' + (i + 1));
            currentDropDown.innerHTML = "<option value='0'>- Item " + (i + 1) + " -</option>" + itemsMarkup;
        }
    }

    function initResultButton() {
        var resultBtn = document.getElementById('resultsButton');
        resultBtn.addEventListener('click', getRating);
    }
}


function getRating () {
    var dropdowns = document.getElementsByClassName('item-dropdown');
    var rating = 0;
    var allFieldsSelected = true;

    for ( var i = 0; i < dropdowns.length; i++) {
        var selectedItemValue = dropdowns[i].options[dropdowns[i].selectedIndex].value;
        if (selectedItemValue !== "0") {
            rating += Number(selectedItemValue);
        } else {
            allFieldsSelected = false;
            break;
        }
    }

    var scoreContainer = document.getElementById('scoreContainer');
    var scoreDisplayWrapper = document.getElementById('scoreDisplayWrapper');
    var scoreDisplayContainer = document.getElementById('scoreDisplayContainer');
    var scoreDisplay = document.getElementById('scoreDisplay');
    var scoreMessage = document.getElementById('scoreMessage');
    var errorMessage = document.getElementById('errorMessage');

    if (allFieldsSelected) {
        var classList = scoreDisplayContainer.classList;
        while (classList.length > 0) {
            classList.remove(classList.item(0));
        }

        rating /= dropdowns.length;
        if (rating > 6) {
            scoreDisplayContainer.classList.add('green-message');
            if (rating === 10) {
                scoreMessage.innerText = "The Hypest Cave possible!";
            } else {
                scoreMessage.innerText = "Hype Cave!";
            }
        }
        else if (rating < 3.5) {
            scoreDisplayContainer.classList.add('red-message');
            scoreMessage.innerText = "Gripe Cave";
        }
        else {
            scoreDisplayContainer.classList.add('yellow-message');
            scoreMessage.innerText = "'Aight Cave.";
        }

        scoreDisplay.innerText =  rating + " / 10";
        errorMessage.style.display = "none";
        scoreDisplayWrapper.style.display = "flex";
    }
    else {
        scoreDisplayWrapper.style.display = "none";
        errorMessage.style.display = "block";
    }
    scoreContainer.style.display = "block";
}