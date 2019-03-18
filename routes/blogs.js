var express = require('express');
var router = express.Router();

let database = require('../lib/db');
let scraper = require('../lib/scraper');


/* GET users listing. */
router.get('/',async function(req, res, next) {
  console.log('running...')

    let HTML = await scraper.getHTML("https://github.com/jkup/awesome-personal-blogs/blob/master/readme.md");

    res.json(database.db.getState())

});

module.exports = router;
