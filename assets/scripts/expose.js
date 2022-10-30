// expose.js

window.addEventListener('DOMContentLoaded', init);
var image;
var horn;
var volume;
var audio;
var image_v;
var button;
const jsConfetti = new JSConfetti();

function init() {
  image = document.querySelector('img');
  horn = document.getElementById('horn-select');
  audio = document.querySelector('audio');
  volume = document.querySelector('input');
  image_v = document.querySelectorAll('img')[1];
  button = document.querySelector('button');
  // TODO
}
init();
console.log(audio);
horn.addEventListener('input', function(){
  for(var i = 0; i < horn.length; i++) {
    if (horn.selectedIndex == 1) {
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';

    } else if (horn.selectedIndex == 2) {
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';

    } else if (horn.selectedIndex == 3) {
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  }
});
volume.addEventListener('input', function () {
  if (volume.value == 0) {
    image_v.src = 'assets/icons/volume-level-0.svg';
  } else if (volume.value >=1 && volume.value < 33) {
    image_v.src = 'assets/icons/volume-level-1.svg';
  } else if (volume.value >=33 && volume.value < 67) {
    image_v.src = 'assets/icons/volume-level-2.svg';
  } else {
    image_v.src = 'assets/icons/volume-level-3.svg';
  }
});
button.addEventListener('click', function() {
  audio.volume = 0.01 * volume.value;
  audio.play();
  if (horn.selectedIndex == 3 && volume.value != 0) {
    jsConfetti.addConfetti();
  }
})
