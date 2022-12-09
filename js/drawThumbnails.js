import {createUser} from './module/data.js';

const photos = Array.from({length: 25}, createUser);

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const drawThumbnails = function(onClick){
  photos.forEach((pic) => {
    const newPicture = pictureTemplate.cloneNode(true);
    newPicture.querySelector('img').src = pic.url;
    newPicture.querySelector('.picture__likes').textContent = pic.likes;
    newPicture.querySelector('.picture__comments').textContent = pic.comment.length;

    newPicture.addEventListener('click', () =>{
      onClick(pic);
    });
    pictureContainer.append(newPicture);
  });
};

export {drawThumbnails};
