import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';


const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Наталья',
  'Денис',
  'Вероника',
  'Александр',
  'Алексей',
  'Сергей',
  'Ийво',
  'Виктор',
  'Юлия',
  'Люпита',
  'Йоханнес',
  'Эмиль',
  'Полл',
];

const SURNAMES = [
  'Якимушкин',
  'Спицов',
  'Устюгов',
  'Большунов',
  'Непряева',
  'Степанова',
  'Черводкин',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Ступак',
  'Нисканен',
  'Ирвинг',
  'Клебо',
  'Иверсон',
  'Голберг',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Машинка:)',
  'Над пропастью во ржи!',
  'Просто так',
  'Что-то на непонятном)',
  'Какое чудесное небо',
  'Время обеда!',
  'Назад в Лето!',
];

const NUMBER_USERS = 25;

const createUser = () => ({
  id: getRandomPositiveInteger(1, 25),
  url: `photos/${getRandomPositiveInteger(1,25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomPositiveInteger(15, 200),
  comment: [
    {
      id: getRandomPositiveInteger(1, 100000),
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENTS),
      name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`
    }
  ]
});

const create = () => Array.from({length: NUMBER_USERS}, createUser);

export {create, createUser};
