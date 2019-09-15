module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'assembly@',
  database: 'tdd-api',
  dialect: 'postgres',
  operetorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}