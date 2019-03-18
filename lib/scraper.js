let axios = require( 'axios');
let cheerio = require( 'cheerio' );
let database = require( '../lib/db' );


//grab html from github
module.exports.getHTML = async function(url) {
    let {data: html} = await axios.get(url);
    return html;
}

module.exports.getBlogs = async function (html) {
    const $ = cheerio.load(html);
    let idCount = 0;
    let blogs = [];

    //loop over the UL and grab the first child, 
    //delete the first child, 
    //and repeat until UL is empty.
    while($('.markdown-body').find('li').html() !== null) {  
        let currentChild = $('.markdown-body ul').children().first();
        blogs.push({id: idCount, name: currentChild.find('a').html(), url: currentChild.find('a').attr('href'),});
        $('.markdown-body ul').children().first().remove();
        idCount++
    }
    //returns an array of all blogs.
    return blogs;
}

module.exports.runCron = async function () {
    let HTML = await this.getHTML("https://github.com/jkup/awesome-personal-blogs/blob/master/readme.md");
    let blogs = await this.getBlogs(HTML);

    database.db
    .set('blogs', blogs)
    .set('total', blogs.length)
    .set('updated', Date.now())
    .write()

    console.log('done');
}
