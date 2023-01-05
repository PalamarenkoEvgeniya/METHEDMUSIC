const audio = new Audio();
const tracksCard = document.getElementsByClassName('track');
const player = document.querySelector('.player');
const pauseBtn = document.querySelector('.player__controller_pause');
const stopBtn = document.querySelector('.player__controller_stop');

const playMusic = (event) => {
  const trackActive = event.currentTarget;

  audio.src = trackActive.dataset.track;
  audio.play();

  pauseBtn.classList.remove('player__icon_play');
  player.classList.add('player_active');

  tracksCard.forEach((track) => {
    track.classList.remove('track_active');
  });

  trackActive.classList.add('track_active')
};

tracksCard.forEach((track) => {
  track.addEventListener('click', playMusic);
});


pauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    pauseBtn.classList.remove('player__icon_play');
  } else {
    audio.pause();
    pauseBtn.classList.add('player__icon_play');
  }
});

stopBtn.addEventListener('click', () => {
  audio.src = '';
  player.classList.remove('player_active');
})
