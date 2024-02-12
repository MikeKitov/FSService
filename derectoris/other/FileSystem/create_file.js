const fs = require('fs');

// Путь к файлу
const filePath = 'C:/Users/Кирилл/Desktop/Стажировка/FileSystem/FileSystem/fs/file.txt';

// Создание файла (если он не существует)
fs.openSync(filePath, 'w');