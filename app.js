var inputText = document.querySelector("#translate-input");
var outputText = document.querySelector("#translate-output");
var translateBtn = document.querySelector("#translate-btn");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

translateBtn.addEventListener("click", clickHandler);

function getTranslationUrl(input) {
	return serverUrl + "?" + "text=" + input;
}

function clickHandler() {
	var textInput = inputText.value;

	fetch(getTranslationUrl(textInput))
		.then((response) => response.json())
		.then((json) => {
			var translatedText = json.contents.translated;
			outputText.innerText = translatedText;
		})
		.catch(errorHandler);
}

function errorHandler(error) {
	alert("Something wrong with server ! Try again after sometime..");
}
