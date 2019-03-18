let cron = require( 'node-cron');

let scraper = require('./scraper');

cron.schedule('* * * * *', () => {
    console.log('running thing');

    scraper.runCron();
});