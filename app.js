var btnTranslate = document.querySelector(".btn-translate");
var textInput = document.querySelector(".txt-input");
var outputDiv = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured ", error);
  alert("somthing wrong with your server");
}

function clickHandler() {
  var inputText = textInput.value; //taking input

  // calling server for precessing}

  //   callback

  fetch(getTranslationURL(inputText))
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var translatedText = data.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
