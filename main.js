"use strict";
{
  {
    /* Задача 1 Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива. */

    const arr = [1, 5, 8, 4, 2, 3, 2, 4, 5];
    console.log(
      [1, 5, 8, 4, 2, 3, 2, 4, 5].reduce((acc, item) =>
        item % 2 === 0 ? (acc = acc + item ** 2) : (acc = acc)
      )
    );

    /* Задача 2 Напишите функцию, которая пишет в консоль число в заданном диапазоне, в случае, если оно успешно делится или не делится с остатком или без остатка в зависимости от параметров. */

    const fn1 = function (c, b, ...a) {
      const arr2 = [];
      if (c === 0) {
        a.map((item) => (item % b === 0 ? arr2.push(item) : item === 0));
        console.log(arr2);
      } else {
        a.map((item) => (item % b === 0 ? item === 0 : arr2.push(item)));
        console.log(arr2);
      }
    };
    fn1(0, 5, 3, 2, 4, 6, 3, 12, 43, 13, 52, 60, 20, 25);

    /* Выйдите из цикла, изменив только две отмеченные строки. Результат в консоли сейчас останавливается на 9 9. Должен на 5 4. */

    for (let i = 0; i < 6; i++) {
      //! Эту строку можно изменить
      for (let j = 0; j < 10; j++) {
        if (i === 5 && j === 5) {
          break; //! Эту строку можно изменить
        }

        console.log(i, j);
      }
    }

    /* Задача 1.1.1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль. */

    function delta(item) {
      item < 0
        ? console.log(`Число ${item} отрицательное`)
        : console.log(`Число ${item} положительное`);
    }
    delta(-4);

    /* Задача 1.1.2 Дана строка. Выведите в консоль длину этой строки. */

    const str = "sdkmflsad;fkdssdf";
    console.log(str.length);

    /* Дана строка. Выведите в консоль последний символ строки. */

    const str1 = "sdkmflsad;fkdssdf";
    console.log(str[str.length - 1]);

    /* Дано число. Проверьте, четное оно или нет. */

    const num = 218;
    num % 2 === 0
      ? console.log(`${num} четное`)
      : console.log(`${num} нечетное`);

    /* Даны два слова. Проверьте, что первые буквы этих слов совпадают. */

    const word1 = "Hello";
    const word2 = "Hi";
    word1[0] === word2[0]
      ? console.log("Первые буквы совпадают")
      : console.log("Первые буквы не совпадают");

    /* Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву. */

    const word3 = "Печать";
    word3[word3.length - 1] === "ь"
      ? console.log(word3[word3.length - 2])
      : console.log(word3[word3.length - 1]);

    /* Дано число. Выведите в консоль первую цифру этого числа. */

    const num1 = 24;
    const str2 = String(num1);
    console.log(str2[0]);

    /* Дано число. Выведите в консоль последнюю цифру этого числа. */

    const num2 = 73;
    const str3 = String(num2);
    console.log(str3[str3.length - 1]);

    /* Дано число. Выведите в консоль сумму первой и последней цифры этого числа. */

    const num3 = 56;
    const str4 = String(num3);
    console.log(Number(str4[str3.length - 1]) + Number(str4[0]));

    /* Дано число. Выведите количество цифр в этом числе. */

    const num4 = 76543;
    console.log(String(num4).length);

    /* Даны два числа. Проверьте, что первые цифры этих чисел совпадают. */

    const num5 = 123;
    const num6 = 1534;
    String(num5)[0] === String(num6)[0]
      ? console.log("первые цифры этих чисел совпадают")
      : console.log("первые цифры этих чисел не совпадают");

    /* Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки. */

    const str5 = "Работа";
    str5.length > 1
      ? console.log(str5[str5.length - 2])
      : console.log("Строка менее 2 символов");

    /* Даны два целых числа. Проверьте, что первое число без остатка делится на второе. */

    const num7 = 540;
    const num8 = 13;
    num7 % num8 === 0
      ? console.log(
          `Число ${num7} делится на ${num8} без остатка с результатом ${
            num7 / num8
          }`
        )
      : console.log(
          `Число ${num7} делится на ${num8} с остатком ${
            num7 % num8
          } и результатом ${Math.floor(num7 / num8)}`
        );
  }

  /* Выведите в консоль все целые числа от 1 до 100. */

  for (let i = 1; i < 101; i++) {
    console.log(i);
  }

  /* Выведите в консоль все целые числа от -100 до 0. */
  let i = -100;
  while (i < 1) {
    console.log(i);
    i++;
  }

  /* Выведите в консоль все целые числа от 100 до 1. */
  i = 100;
  do {
    console.log(i);
    i--;
  } while (i >= 1);

  /* Выведите в консоль все четные числа из промежутка от 1 до 100. */

  for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }

  /* Выведите в консоль все числа кратные трем в промежутке от 1 до 100. */

  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }

  /* Найдите сумму всех целых чисел от 1 до 100. */
  let sum = 0;
  for (let i = 1; i < 101; i++) {
    sum += i;
  }
  console.log(sum);

  /* Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100. */

  sum = 0;
  for (let i = 1; i < 101; i++) {
    i % 2 == 0 ? (sum = sum) : (sum += i);
  }
  console.log(sum);

  /* Даны два целых числа. Найдите остаток от деления первого числа на второе. */

  let num1 = 50;
  let num2 = 4;
  console.log(`Остаток от деления ${num1} на ${num2} равняется ${num1 % num2}`);

  /* Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки. */

  const str1 = "Going to Home";
  for (i = str1.length - 1; i >= 0; i--) {
    console.log(str1[i]);
  }

  /* Дан массив с числами. Найдите сумму квадратов элементов этого массива. */

  const arr = [1, 567, 3, 6, 4, 8, 456, 34, 98];
  console.log(arr.reduce((acc, item) => (acc += item ** 2), 0));

  /* Дан массив с числами. Найдите сумму квадратных корней элементов этого массива. */

  const arr1 = [16, 4];
  console.log(arr1.reduce((acc = 0, item) => (acc = acc + Math.sqrt(item)), 0));

  /* Дан массив с числами. Найдите сумму положительных элементов этого массива. */

  const arr2 = [1, -567, -3, 6, 4, 8, -456, 34, -98];
  console.log(
    arr2.reduce((acc, item) => (item > 0 ? (acc += item) : (acc = acc)), 0)
  );

  /* Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти. */

  const arr3 = [1, 567, 3, 6, 4, 8, 456, 10, 34, 98];
  console.log(
    arr2.reduce(
      (acc, item) => (item > 0 && item < 10 ? (acc += item) : (acc = acc)),
      0
    )
  );

  /* Получите массив букв этой строки. */

  const str = "abcde";
  const arr4 = str.split("");
  console.log(arr4);

  /* Получите массив цифр этого числа. */

  const num = 12345;
  const arr5 = String(num)
    .split("")
    .map((item) => Number(item));
  console.log(arr5);
  console.log("-----------------------------");
  const arr6 = Array.from(String(num), Number);
  console.log(arr6);
}

/* Переверните его: */

const num = 12345;
const str = String(num).split("");
console.log(Number(str.reverse().join("")));

/* Найдите сумму цифр этого числа. */

const num1 = 12345;

console.log(
  String(num1)
    .split("")
    .map((item) => Number(item))
    .reduce((acc, item) => (acc += item))
);

/* Заполните массив целыми числами от 1 до 10. */

const arr = [];

for (let i = 1; i < 11; i++) {
  arr.push(i);
}
console.log(arr);

/* Заполните массив четными числами из промежутка от 1 до 100. */

const arr1 = [];

for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    arr1.push(i);
  }
}
console.log(arr1);
