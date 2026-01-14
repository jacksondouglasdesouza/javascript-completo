// Listando arquivos com FS e recursão mútua

const fs = require("fs").promises;
const { stats } = require("fs");
const path = require("path");

/*
fs.readdir(__dirname)
   .then((files) => console.log(files))
   .catch((err) => console.log(err));
*/

async function readdir(rootDir) {
   rootDir = rootDir || path.resolve(__dirname);
   const files = await fs.readdir(rootDir);
   walk(files, rootDir);
}

async function walk(files, rootDir) {
   for (const file of files) {
      const fileFullPath = path.resolve(rootDir, file);
      const stats = await fs.stat(fileFullPath);
      //--
      if (/\.git/g.test(fileFullPath)) {
         continue;
      }

      if (/node_modules/g.test(fileFullPath)) {
         continue;
      }

      //--

      if (stats.isDirectory()) {
         readdir(fileFullPath);
         continue;
      }
      /*
      if (!/\.css$/g.test(fileFullPath)) {
         continue;
      }
      */

      console.log(fileFullPath, stats.isDirectory());
   }
}

readdir("C:/CursosProgramacao/JavaScript/");
