// import dependencies
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// create connection to database using MySQL - updated for heroku deployment
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        'heroku_38885dec9669aa4',
        'b5e9045344105d',
        'f9085371',
        {
            host: 'us-cdbr-east-05.cleardb.net',
            dialect: 'mysql',
            port: 3306
        }
    );
}

// export connection
module.exports = sequelize;