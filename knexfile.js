module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/travelapp'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
