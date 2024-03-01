const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('expensetrack','root','Pintu@8328',{
    dialect:'mysql',
    host:'localhost'
})

module.exports= sequelize