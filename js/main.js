const randomInt = function (min, max) {
  if (min < 0 || max < 0) {
    throw new Error('Числа должны быть только полжительные, включая ноль.');
  }
  if (max < min) {
    throw new Error('Неверный формат входных данных: диапозон должен быть от меньшего числа к большему.');
  }
  return Math.floor(Math.random() * (max - min) + min);
};

randomInt(0, 10);

/**   Искользуемая литература
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */

const checkMaxLength = (string, maxLen) => string.length <= maxLen;

checkMaxLength('This is a string', 20);

