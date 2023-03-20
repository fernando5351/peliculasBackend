const { Client } = require('pg');

async function connection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'schiffer',
    password: 'Fernando19@20',
    database: 'peliculas'
  });

  client.connect;
  return client;
}
module.exports = connection;
