// here we write the logic for the connecting database

const {Sequelize,DataTypes} = require('sequelize');

// Sequelize class ko object create gareko as a sequelize. ani supabase connect gareko currently chai drizzle orm key use gareko
const sequelize = new Sequelize("postgresql://postgres.jzdwrihfcvvjclgekjyg:Fulldatcj1122@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres");


sequelize.authenticate()
    .then(()=>{
        console.log("Authenticated vayo, connected vayo !!")
    })
    .catch((err)=>{
        console.log("error"+ err)
    })

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db