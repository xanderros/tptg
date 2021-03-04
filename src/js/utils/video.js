import Player from '@vimeo/player';

// Vimeo video
const videos = document.querySelectorAll('.video');

if (videos) {
  for (let i = 0; i < videos.length; i++) {
    let video = videos[i];

    const iframe = video.querySelector('.video__frame');
    const player = new Player(iframe);
    const button = video.querySelector('.video__button');

    button.addEventListener('click', (e) => {
      e.preventDefault();

      player.play();

      video.classList.add('video_play');
    });
  }
}