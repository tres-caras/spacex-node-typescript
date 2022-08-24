module.exports = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  dropSchema: true,
  logging: false,
  synchroize: true,
  //   migrationsRun: true,

  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  //   migrations: ["src/database/migrations/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    // migrationsDir: "src/database/migrations",
  },
};
