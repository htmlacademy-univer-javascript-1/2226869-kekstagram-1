import {isEscapeKey} from './module/util.js';

const form = document.querySelector('.img-upload__form');

const imgUpload = form.querySelector('[name="filename"]');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const closeForm = form.querySelector('#upload-cancel');
const submit = form.querySelector('.img-upload__submit');
const hashtags = form.elements.hashtags;

const pristine = new Pristine(form);

const regExpression = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const validateLength = (value) => value.length >= 2 && value.length <= 20;

export const validateHashtag = (listHashtags) => {
  const array = listHashtags.split(' ').map((element) => element.toLowerCase());
  const set = new Set();
  if (array.length > 5) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i])) {
      set.add(array[i]);
    } else {
      return false;
    }
    if (!validateLength(array[i])) {
      return false;
    }
    if (!regExpression.test(array[i])) {
      return false;
    }
  }
  return true;
};

pristine.addValidator(
  hashtags,
  validateHashtag,
  'Hashtags are not valid'
);

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !(evt.target.matches('input') || evt.target.matches('textarea'))) {
    evt.preventDefault();
    closeImgUpload();
  }
};

const openImgUpload = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
};

function closeImgUpload(){
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.querySelector('#upload-file').innerHTML = '';
  document.removeEventListener('keydown', onPopupEscKeydown);
}

imgUpload.addEventListener('click', () => {
  openImgUpload();
});

closeForm.addEventListener('click', closeImgUpload);

submit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {imgUpload, closeForm};
