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
  const parsedSettings = JSON.parse(savedSettings);

  player
    .setCurrentTime(parsedSettings.seconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
      }
    });
} catch (error) {
  console.error('An error occurred:', error);
}

player.on('timeupdate', onTimeupdate);
