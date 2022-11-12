import {createUser} from './module/data';
import {createBigPicture} from './bigPicture';


const userTemp = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const patternUserFragment = document.createDocumentFragment();

function createThumbnail(user) {
  const thumbnail = userTemp.cloneNode(true);
  thumbnail.querySelector('.picture__img').setAttribute('src', user.url);
  const pictureInfo = thumbnail.querySelector('.picture__info');
  pictureInfo.querySelector('.picture__comments').textContent = user.comment;
  pictureInfo.querySelector('.picture__likes').textContent = user.likes;
  return thumbnail;
}

const drawThumbnails = () => {
  for (const user of createUser()) {
    const thumbnail = createThumbnail(user);
    createBigPicture(thumbnail, user);
    patternUserFragment.append(thumbnail);
  }
  pictures.append(patternUserFragment);
};

export {drawThumbnails};
