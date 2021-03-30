/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const dotenv = require('dotenv');

module.exports = async () => {
  dotenv.config({ path: path.join(__dirname, '../.env') });
};
