const fs = require('fs');

// Путь к файлу
const filePath = 'C:/Users/Кирилл/Desktop/Стажировка/FileSystem/FileSystem/fs/file.txt';

// Чтение файла
const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log(fileContent);