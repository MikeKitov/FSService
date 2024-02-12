const fs = require('fs');

// Пути к файлам
const filePath1 = 'C:/Users/Кирилл/Desktop/Стажировка/FileSystem/FileSystem/fs/file.txt';
const filePath2 = 'C:/Users/Кирилл/Desktop/Стажировка/FileSystem/FileSystem/fs/file2.txt';

// Функция для чтения файла через callback
function readFileCallback(filePath, callback) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

// Использование callback функций для чтения файлов
readFileCallback(filePath1, (err, fileContent1) => {
  if (err) {
    console.error('Ошибка чтения файла 1:', err);
  } else {
    console.log('Содержимое файла 1:', fileContent1);

    readFileCallback(filePath2, (err, fileContent2) => {
      if (err) {
        console.error('Ошибка чтения файла 2:', err);
      } else {
        console.log('Содержимое файла 2:', fileContent2);
      }
    });
  }
});