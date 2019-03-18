let low = require('lowdb');
let FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const database = low(adapter);


database.defaults({ total: 0, updated:  Date.now(),blogs: []}).write()

module.exports.db = database;


