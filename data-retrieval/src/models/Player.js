module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.CHAR(2)
  })
}

