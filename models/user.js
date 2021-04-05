'use strict';
const bcrypt = require('bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    email: {
      type: DataTypes.INTT,
      unique: true,
      allowNull: false,
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  user.login = (email, password) => {
    return user.findOne({ where: { email: email }})
      .then(user => {
        if (!user) return null
        return new Promise((resolve, reject) => {
          bcrypt.compare(password, user.password, (error, valid) => {
            if (error || !valid) reject(error)
            resolve(user)
          })
        })
      })
      .catch(error => console.log(error))
  }
  user.beforeCreate((user, options) => {
    return new Promise((resolve, reject) => {
      if (!user.password) {
        reject()
      }
      bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        resolve()
      })
    })
  })
  return user;
};