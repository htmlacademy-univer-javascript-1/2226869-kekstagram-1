const TIME_DELAY = 500;

const debounce = (callback) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), TIME_DELAY);
  };
};

const checkMaxLength = (string, maxLen) => string.length <= maxLen;


const isEscapeKey = (evt) => evt.key === 'Escape';

function getRandomNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

const getRandomElements = (array, elementsCount) => {
  const elementNumbers = [];
  const randomArray = [];
  for(let i = 0; i < array.length; i++){
    const number = getRandomNumber(0, array.length - 1);
    if(elementNumbers.indexOf(number) === -1){
      randomArray.push(array[number]);
      elementNumbers.push(number);
    }
    if(randomArray.length === elementsCount){
      break;
    }
  }
  return randomArray;
};
const onFail = () => {
  const messageAlert = document.createElement('div');
  messageAlert.style.position = 'absolute';
  messageAlert.style.left = 0;
  messageAlert.style.top = 0;
  messageAlert.style.right = 0;
  messageAlert.style.textAlign = 'center';
  messageAlert.style.fontSize = '30px';
  messageAlert.style.backgroundColor = 'red';
  messageAlert.style.padding = '10px 5px';
  messageAlert.textContent = 'Ошибка загрузки данных';
  document.body.append(messageAlert);
};

export const openModal = (modal, parent) => {
  modal.classList.remove('hidden');
  parent.classList.add('modal-open');
};

export const closeModal = (modal, parent) => {
  modal.classList.add('hidden');
  parent.classList.remove('modal-open');
};

export {
  checkMaxLength,
  isEscapeKey,
  getRandomElements,
  debounce,
  onFail
};

