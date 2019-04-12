'use strict';
require('dotenv').config();

module.exports = {
  'migrationDirectory': 'migrationDirectory',
  'driver': 'pg',
  'host': process.env.MIGRATION_DB_HOST,
  'port': process.env.MIGRATION_DB_PORT,
  'database': process.env.MIGRATION_DB_NAME,
  'username': process.env.MIGRATION_DB_USER,
};
