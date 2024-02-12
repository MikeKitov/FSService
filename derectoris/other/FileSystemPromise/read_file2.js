const fs = require("fs").promises;

// Пути к файлам
const filePath1 =
  "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/FileSystem/fs/file.txt";
const filePath2 =
  "C:/Users/Кирилл/Desktop/Стажировка/FileSystem/other/FileSystem/fs/file2.txt";

// Функция для чтения файла через промисы
async function readFilePromise(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return data;
  } catch (err) {
    throw new Error("Ошибка чтения файла");
  }
}

// Использование промисов и оператора await для чтения файлов
async function readFiles() {
  try {
    const fileContent1 = await readFilePromise(filePath1);
    console.log("Содержимое файла 1:", fileContent1);

    const fileContent2 = await readFilePromise(filePath2);
    console.log("Содержимое файла 2:", fileContent2);
  } catch (err) {
    console.error(err.message);
  }
}

// Вызов функции для чтения файлов
readFiles();
