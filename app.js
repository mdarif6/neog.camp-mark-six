var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")


var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) {

    return serverURL + "?" + "text=" + text
}


function clickHandler(){
 
    // outputDiv.innerText = "ajldjfoq " + textInput.value

var inputText = textInput.value

fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => console.log(json.contents.translated))

}

btnTranslate.addEventListener("click", clickHandler)

    