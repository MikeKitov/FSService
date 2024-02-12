const fs = require('fs');

// Путь к папке
const folderPath = 'C:/Users/Кирилл/Desktop/Стажировка/FileSystem/FileSystem/fs';

// Получение свойств папки (размер, дата создания и т.д.)
const folderProperties = fs.statSync(folderPath);
console.log(folderProperties);

// Получение содержимого папки
const folderContents = fs.readdirSync(folderPath);
console.log(folderContents);