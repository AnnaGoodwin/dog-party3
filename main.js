var dogNameInput = document.querySelector('.dog-name-input');
var dogNameButton = document.querySelector('.dog-name-button');
var someDogsText = document.querySelector('.some-dogs-text');

dogNameButton.addEventListener('click', appendText);

function appendText() {
  event.preventDefault();
  someDogsText.innerHTML = dogNameInput.value;
}