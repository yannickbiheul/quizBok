let inputName = document.querySelector('.inputName');
let submitName = document.querySelector('.submitName');
let namePlayer = document.querySelector('.namePlayer');
let scorePlayer = document.querySelector('.scorePlayer');

submitName.adddEventListener('click', function() {
    namePlayer = inputName.value;
})