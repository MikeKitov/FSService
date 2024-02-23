const findSetting = require("./findSettings");
const fs = require("fs");

// Функция для проверки пути
function checkPath(path) {

    const settingsData = fs.readFileSync(findSetting());
    const settings = JSON.parse(settingsData);
    
    const {goodPaths, badPaths, invisiblePaths, goodPathsRegex, badPathsRegex, invisiblePathsRegex} = settings;
  
    // Регулярное выражение разрешенных путей
    const goodPathsRegexs = new RegExp(goodPathsRegex);
  
    // Регулярное выражение запрешенных путей
    const badPathsRegexs = new RegExp(badPathsRegex);
  
    // Регулярное выражение невидимых путей путей
    const invisiblePathsRegexs = new RegExp(invisiblePathsRegex);
  
    if (invisiblePathsRegexs.test(path)) {
      return "Путь не найден";
    }
  
    if (badPathsRegexs.test(path)) {
      return "Путь запрешен";
    }
  
    if (goodPathsRegexs.test(path)) {
      return "Путь разрешен";
    }
  
    for (let i = 0; i < invisiblePaths.length; i++) {
      const allowedPath = invisiblePaths[i];
  
      const regex = new RegExp(
        "^" + allowedPath + ".*$",
        "i"
      );
      if (regex.test(path)) {
        return "Путь не найден";
      }
    }
  
    for (let i = 0; i < badPaths.length; i++) {
      const allowedPath = badPaths[i];
  
      const regex = new RegExp(
        "^" + allowedPath + ".*$",
        "i"
      );
      if (regex.test(path)) {
        return "Путь запрешен";
      }
    }
  
    for (let i = 0; i < goodPaths.length; i++) {
      const allowedPath = goodPaths[i];
  
      const regex = new RegExp(
        "^" + allowedPath + ".*$",
        "i"
      );
      if (regex.test(path)) {
        return "Путь разрешен";
      }
    }
  
    return "Путь не найден";
  }

module.exports = checkPath;