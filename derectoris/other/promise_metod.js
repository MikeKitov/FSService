// Пример работы методов промисов

// Промис, который резолвится через заданное количество миллисекунд
function delay(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

// Пример использования Promise.all()
Promise.all([delay(2000, "Привет"), delay(3000, "мир"), delay(4000, "!")])
  .then((results) => {
    console.log("Promise.all():", results);
  })
  .catch((error) => {
    console.log("Произошла ошибка:", error);
  });

// Пример использования Promise.allSettled()
Promise.allSettled([
  delay(2000, "Привет"),
  Promise.reject("Ошибка!"),
  delay(4000, "мир"),
])
  .then((results) => {
    console.log("Promise.allSettled():", results);
  })
  .catch((error) => {
    console.log("Произошла ошибка:", error);
  });

// Пример использования Promise.race()
Promise.race([delay(2000, "Привет"), delay(3000, "мир"), delay(4000, "!")])
  .then((result) => {
    console.log("Promise.race():", result);
  })
  .catch((error) => {
    console.log("Произошла ошибка:", error);
  });

// Пример использования Promise.any()
Promise.any([
  Promise.reject("Ошибка 1"),
  Promise.reject("Ошибка 2"),
  delay(4000, "Успех!"),
])
  .then((result) => {
    console.log("Promise.any():", result);
  })
  .catch((error) => {
    console.log("Произошла ошибка:", error);
  });

// Пример использования Promise.resolve()
Promise.resolve("Привет!")
  .then((result) => {
    console.log("Promise.resolve():", result);
  })
  .catch((error) => {
    console.log("Произошла ошибка:", error);
  });

// Пример использования Promise.reject()
Promise.reject("Ошибка!")
  .then((result) => {
    console.log("Промис выполнился успешно:", result);
  })
  .catch((error) => {
    console.log("Promise.reject():", error);
  });
