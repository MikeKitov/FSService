// Функция, которая возвращает промис
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

// Последовательный запуск функций с помощью промисов
delay(1000)
  .then(() => {
    console.log("Функция 1");
    return delay(2000);
  })
  .then(() => {
    console.log("Функция 2");
    return delay(3000);
  })
  .then(() => {
    console.log("Функция 3");
    throw new Error("Ошибка");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Finally блок");
  });
