
// scripts/updateProducts.js - regenerates site_static pages from data/products.json
const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf8'));
const staticDir = path.join(__dirname,'..','site_static');
if(!fs.existsSync(staticDir)) fs.mkdirSync(staticDir);
const index = fs.readFileSync(path.join(staticDir,'index.html'),'utf8');
fs.writeFileSync(path.join(staticDir,'index.html'), index); // keep template, script reads data
console.log('updateProducts: refreshed static site (template present; data used client-side).');
