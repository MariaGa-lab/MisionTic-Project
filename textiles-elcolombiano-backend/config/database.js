require('dotenv').config();

const MONGODB_User = process.env.DB_USER;
const MONGODB_Password = process.env.DB_PASSWORD;
const MONGODB_Host = process.env.DB_HOST;

module.exports = {
  MONGODB_URI: `mongodb+srv://${MONGODB_User}:${MONGODB_Password}@${MONGODB_Host}`
}