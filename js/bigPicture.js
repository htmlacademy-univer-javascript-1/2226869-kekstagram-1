const bigPicture = document.querySelector('.big-picture');
const picImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const picLike = bigPicture.querySelector('.likes-count');
const picDescription = bigPicture.querySelector('.social__caption');
const picComments = bigPicture.querySelector('.comments-count');
const picBlockComment = bigPicture.querySelector('.social__comments');

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
};

bigPicture.querySelector('.social__comment-count').classList.add('hidden');
bigPicture.addEventListener('click', closeBigPicture);
document.addEventListener('keydown', (evnt) => {
  if (evnt.keyCode === 27) {
    closeBigPicture();
  }
});

const patternComment = (comment) =>
  '<li class="social__comment">\n' +
  '    <img\n' +
  '        class="social__picture"\n' +
  `        src="${comment.avatar}"` +
  `        alt="${comment.name}"` +
  '        width="35" height="35">\n' +
  `    <p class="social__text">${comment.message}}</p>\n` +
  '</li>';


const displayComments = (comments) => {
  picBlockComment.innerHTML = '';
  comments.forEach((comment) => {
    const pattern = patternComment(comment);
    picBlockComment.insertAdjacentHTML('afterbegin', pattern);
  });
};

const createBigPicture = (picture, user) =>
  picture.addEventListener('click', () => {
    picImg.setAttribute('src', user.url);
    picLike.textContent = user.likes;
    picComments.textContent = user.comment;
    picDescription.textContent = user.description;
    displayComments(user.comment);
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });

export {createBigPicture};
