module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
      host: "localhost",
      user: "postgres",
      password: "1",
      database: "subscription_fire",
      charset: "utf8"
    }
  }
};
