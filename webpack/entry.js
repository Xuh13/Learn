module.exports = {
    index: './src/index.js'
}
let json = require('./author.json');
document.querySelector('#json').innerHTML = `作者:${json.name},年龄:${json.age},单位:${json.company},职业:${json.job}`