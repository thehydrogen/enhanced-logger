const chalk = require('chalk');

module.exports = (msg, type) => {
    if (msg) {
        if (type) {
            console.log(chalk.blue(`ℹ ${type}: ${msg}`));
        } else if (!type) {
            console.log(chalk.blue(`ℹ ${msg}`));
        }
    } else {
        throw new Error('No message was provided.');
    }
};
