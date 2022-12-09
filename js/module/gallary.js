import {drawThumbnails} from '../drawThumbnails.js';
import {changeBigPicture} from '../bigPicture.js';

export const onClick = function(pic){
  document.body.classList.add('modal-open');
  changeBigPicture(pic);
};

drawThumbnails(onClick);
