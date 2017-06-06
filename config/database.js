const development = {
  username: 'root',
  password: null,
  database: 'jtester_development',
  host: '127.0.0.1',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
};

const test = {
  username: 'root',
  password: null,
  database: 'jtester_test',
  host: '127.0.0.1',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
};

const production = (process.env.DATABASE_URL) ? {
  url: process.env.DATABASE_URL,
} : {
  username: 'root',
  password: null,
  database: 'jtester_production',
  host: '127.0.0.1',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
};

module.exports = {
  development,
  test,
  production,
};
