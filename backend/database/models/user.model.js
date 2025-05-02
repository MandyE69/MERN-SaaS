
const userModel = (sequelize,DataTypes)=>{
   return sequelize.define("user",{
        userName :{
            type : DataTypes.STRING
        },
        password :{
            type : DataTypes.STRING
        },
        email :{
            type : DataTypes.STRING
        }
    })
}

module.exports = userModel