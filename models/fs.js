const checkPath = require("./checkPath");
const findSetting = require("./findSettings");

const fs = require("fs");
const path = require("path");

const settingsData = fs.readFileSync(findSetting());
const settings = JSON.parse(settingsData);

const defaultPath = settings.defaultPath;
/**
 * 
 * @param {*} filepath 
 * @param {*} onlyFolders 
 * @param {*} onlyFiles 
 * @returns 
 */
async function getPathInfo(filepath, onlyFolders = false, onlyFiles = false) {
  try {
    const stats = await fs.promises.stat(filepath);
      
    const info = {
      data: {
        path: filepath,
        name: path.basename(filepath),
        isFolder: stats.isDirectory(),
        size: stats.size,
        created: stats.birthtime,
        updated: stats.mtime,
        children: [],
      },
    };

    if (stats.isDirectory() && !(onlyFolders && onlyFiles)) {
      const files = await fs.promises.readdir(filepath);
          
      const fileStats = await Promise.all(
        files.map((file) => fs.promises.stat(path.join(filepath, file)))
      );

      if (onlyFiles) {
        files = files.filter((file, index) => !fileStats[index].isDirectory());
      } else if (onlyFolders) {
        files = files.filter((file, index) => fileStats[index].isDirectory());
      }

      info.data.children = files.reduce((children, file) => {
        const absolutePath = path.join(filepath, file);
        if (checkPath(absolutePath.replace(/\\/g, '/')) === "Путь разрешен") {
          children.push(path.basename(file));
        }
        return children;
      }, []);
    }

    return info;
  } catch (err) {
    throw err;
  }
}

async function getJsonResponse(directoryPath, onlyFolders = false, onlyFiles = false) {
  if (directoryPath === "") {
    directoryPath = defaultPath;
  }
  directoryPath = path.resolve(directoryPath).replace(/\\/g, '/').replace(/\/\//g, '/');
  try {
    let res = checkPath(directoryPath)
    switch (res) {
      case "Путь не найден":
        throw new Error(res);
      case "Путь запрешен":
        throw new Error(res);
      case "Путь разрешен":
        return await getPathInfo(directoryPath, onlyFolders, onlyFiles);
    }
  } catch (err) {
    let pathInfo;
    if (err != null) {
      pathInfo = {
        error: err.message ? err.message : err.toString(),
	status: 400
      };
    } else {
      pathInfo = {
        data: err,
      };
    }
    return pathInfo;
  }
}

async function main() {
  try {
    const c = await getJsonResponse("")
    console.log(c);
    return c;
  } catch (err) {}
}

//console.log(main())

module.exports = getJsonResponse;