// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
var img;
var voiceSelect;
var txtarea;
var button;
let voices = [];

function init() {
  // TODO
  img = document.querySelector('img');
  voiceSelect = document.getElementById('voice-select');
  button = document.querySelector('button');
  txtarea = document.querySelector('textarea');

};
init();
function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
populateVoiceList();
console.log(voices.length);
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

button.addEventListener('click', function(){
  const utterThis = new SpeechSynthesisUtterance(txtarea.value);
  utterThis.voice = voices[voiceSelect.selectedIndex];
  img.src = 'assets/images/smiling-open.png';
  synth.speak(utterThis);
  utterThis.addEventListener('end', function() {
    img.src = 'assets/images/smiling.png';
  })
});