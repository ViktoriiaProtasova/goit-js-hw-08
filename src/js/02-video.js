import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeupdate = throttle(
  function (event) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(event));
  },
  1000,
  { trailing: false }
);

try {
  const savedSettings = localStorage.getItem('videoplayer-current-time');
  const parsedSettings = savedSettings ? JSON.parse(savedSettings) : null;
  if (parsedSettings && parsedSettings.seconds) {
    player.setCurrentTime(parsedSettings.seconds);
  }
} catch (error) {
  console.error('An error occurred:', error);
}

player.on('timeupdate', onTimeupdate);
