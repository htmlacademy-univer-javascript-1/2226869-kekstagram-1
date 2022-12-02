import {isEscapeKey} from './module/util.js';

const bigPicture = document.querySelector('.big-picture');
const commentList = bigPicture.querySelector('.social__comments');
const newCommentTemplate = commentList.querySelector('.social__comment');
const closeButton = bigPicture.querySelector('.big-picture__cancel');


const loaderComments = bigPicture.querySelector('.comments-loader');
const countComment = bigPicture.querySelector('.social__comment-count');
const  numberOfComments = document.querySelector('.comments-count');

const createComment = (sample, comment, dataComment) => { //создание одного комментария
  const oneComment = sample.cloneNode(true);
  oneComment.querySelector('.social__text').textContent = dataComment['message'];
  oneComment.querySelector('img').src = dataComment['avatar'];
  oneComment.querySelector('img').alt = dataComment['name'];
  comment.appendChild(oneComment);
};

//метод для смены информации о фотографии
const changeBigPicture = function (newPicture) {
  bigPicture.querySelector('img').src = newPicture.url;
  bigPicture.querySelector('.likes-count').textContent = newPicture.likes;
  bigPicture.querySelector('.social__caption').textContent = newPicture.description;


  const comments = newPicture.comment;

  //очщяем список комментариев чтобы заполнить его новыми.
  while (commentList.firstChild) {
    commentList.removeChild(commentList.firstChild);
  }
  comments.forEach((comment) => {
    const newComment = newCommentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__picture').alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;

    commentList.append(newComment);

    let tempCount = 0;

    const commentLi = commentList.querySelector('li'); // шаблон

    numberOfComments.textContent = newPicture.comment.length.toString();  // всего комментариев

    if(newPicture.comment.length <= 5) { // если коментариев <= 5
      for(let k = 0; k < newPicture.comment.length; k++) {
        createComment(commentLi, commentList, newPicture.comment[k]);
      }
      countComment.textContent = newPicture.comment.length.toString();
    } else { // если их > 5, то появляется кнопка и мы печатает первые 5 комментариев
      loaderComments.classList.remove('hidden');
      for(let k = 0; k < newPicture.comment.length; k++){
        createComment(commentLi,commentList, newPicture.comment.length[k]);
      }
      tempCount = 5;
      countComment.textContent = tempCount;
    }

    loaderComments.addEventListener('click', () => {
      if(tempCount + 5 <= newPicture.comment.length) { // если мы не дошли до конца списка комментариев, то печатаем след 5
        for(let k = tempCount; k < tempCount + 5; k++){
          createComment(commentLi, commentList, newPicture.comment[k]);
        }
        tempCount += 5;
        countComment.textContent = tempCount;
      } else {
        for (let k = tempCount; k <= newPicture.comment.length - tempCount; k++) {
          createComment(commentLi, commentList, newPicture.comment[k]);
          countComment.textContent = newPicture.comment.length.toString();
        }
        loaderComments.classList.add('hidden');
      }
    });
  });

  bigPicture.classList.remove('hidden');

};

//закрытия полноэкранной фотографии при клике на клопку
closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

//закрытия полноэкранной фотографии при нажтии Esc
document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});


export {changeBigPicture};
