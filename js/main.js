const randomInt = function (min, max) {
  if (min < 0 || max < 0) {
    return 'Числа должны быть только полжительные, включая ноль.';
  }
  if (max < min) {
    return 'Неверный формат входных данных: диапозон должен быть от меньшего числа к большему.';
  }
  return Math.floor(Math.random() * (max - min) + min);
};

// eslint-disable-next-line no-console
console.log(randomInt(-1, 3));
// eslint-disable-next-line no-console
console.log(randomInt(10, 5));
// eslint-disable-next-line no-console
console.log(randomInt(0, 10));

/**   Искользуемая литература
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */


const checkMaxLength = (string, maxLen) => string.length <= maxLen;

// eslint-disable-next-line no-console
console.log(checkMaxLength('This is a string', 20));
// eslint-disable-next-line no-console
console.log(checkMaxLength('and one more line', 15));
