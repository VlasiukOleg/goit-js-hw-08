import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_TIME_KEY = 'videoplayer-current-time';

const timeUpdate = function (time) {
  const { seconds } = time;

  localStorage.setItem(STORAGE_TIME_KEY, seconds);
};

player.on('timeupdate', throttle(timeUpdate, 1000));

player.setCurrentTime(localStorage.getItem(STORAGE_TIME_KEY));
