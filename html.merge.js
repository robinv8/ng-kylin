let fs = require('fs');
let pathUtil = require('path');
let filePath = pathUtil.join(__dirname, 'src', 'temp_components');

let fileArray = [];

function fildFile(path) {
  if (fs.statSync(path).isFile()) {
    if (/\.component.ts/.test(path)) {
      fileArray[0] = path;
    }
    if (/\.html$/.test(path)) {
      fileArray[1] = readFile(path)
    }
  } else if (fs.statSync(path).isDirectory()) {
    let paths = fs.readdirSync(path);

    if (fileArray.length === 2) {
      writeFile(fileArray);
      fileArray = [];
    }
    paths.forEach((p) => {
      fildFile(pathUtil.join(path, p));
    });
  }

}

function readFile(file) {
  return fs.readFileSync(file);

}

function writeFile(fileArray) {
  let file = fileArray[0];
  let content = fileArray[1];
  mergeContent(file, content);
  /*fs.writeFile(file, content, function (err) {
    if (err) console.error(err);
    console.log('数据写入的数据');
    console.log('-------------------');
  })*/

}

function mergeContent(file, content) {
  let componentContent = readFile(file);
  var htmlRegex = /templateUrl *:(\s*\'||\"[#]*?\' *,||\" *,)/g;
  console.log(componentContent.toString())
  var test=componentContent.toString().match(htmlRegex)

  if (htmlRegex.test(componentContent)) {
    let contentTemp = componentContent.toString().replace(htmlRegex, (match, urls) => {
      return "template:" + url;
    })
  }


}

fildFile(filePath);
