function findSetting() {
    const path = require('path');
    const glob = require('glob');
    
    const projectPath = './';
    const files = glob.sync('**/settings.json', { cwd: projectPath });
    
    if (files.length > 0) {
      const filePath = path.resolve(path.join(projectPath, files[0]));
      return filePath;
    } else {
      console.log('Файл settings.json не найден в проекте');
    }
}

module.exports = findSetting;