import './drawThumbnails.js';
import './bigPicture.js';
import './validetion.js';
import './loaderForm.js';
import './addEffect.js';
import {drawThumbnails} from './drawThumbnails.js';
import {onFail} from './util.js';
import {getData} from './api.js';


let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  drawThumbnails(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const getAllData = () => photos;

getData(onSuccess, onFail);

export {getAllData};
