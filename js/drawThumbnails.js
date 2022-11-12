import {createUser} from './module/data';


const userTemp = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const patternUserFragment = document.createDocumentFragment();

const draw = () => {
  for (const user of createUser()) {
    const thumbnail = userTemp.cloneNode(true);
    thumbnail.querySelector('.picture__img').setAttribute('src', user.url);
    const pictureInfo = thumbnail.querySelector('.picture__info');
    pictureInfo.querySelector('.picture__comments').textContent = user.comment;
    pictureInfo.querySelector('.picture__likes').textContent = user.likes;
    patternUserFragment.append(thumbnail);
  }
  pictures.append(patternUserFragment);
};

export {draw};
