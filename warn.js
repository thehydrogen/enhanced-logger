const chalk = require('chalk');

module.exports = (msg, type) => {
    if (msg) {
        if (type) {
            console.log(chalk.blue(`⚠ ${type}: ${msg}`));
        } else if (!type) {
            console.log(chalk.blue(`⚠ ${msg}`));
        }
    } else {
        throw new Error('No message was provided.');
    }
};
