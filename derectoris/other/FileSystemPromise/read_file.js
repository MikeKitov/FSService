const fs = require('fs');

// Пути к файлам
const filePath1 = 'C:/Users/Кирилл/Desktop/Стажировка/FileSystem/FileSystem/fs/file.txt';
const filePath2 = 'C:/Users/Кирилл/Desktop/Стажировка/FileSystem/FileSystem/fs/file2.txt';

// Функция для чтения файла через промисы
function readFilePromisified(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Использование промисов для чтения файлов
readFilePromisified(filePath1)
  .then((fileContent1) => {
    console.log('Содержимое файла 1:', fileContent1);
    return readFilePromisified(filePath2);
  })
  .then((fileContent2) => {
    console.log('Содержимое файла 2:', fileContent2);
  })
  .catch((err) => {
    console.error('Ошибка чтения файлов:', err);
  });