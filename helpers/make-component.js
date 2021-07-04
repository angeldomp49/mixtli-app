const fs = require('fs');
const path = require("path");

const [,,...args] = process.argv;
const componentName = args[0];
const componentDir = 'src/components/'+componentName;

if( !fs.existsSync(componentDir) ){
    fs.mkdirSync(path.join(__dirname, componentDir), { recursive: true });
    console.log('creado');
    console.log(path.join(__dirname, componentDir));
  }

fs.writeFileSync(componentDir+'/index.js', '',function(err){
    console.log(err);
});

console.log('tarea finalizada');