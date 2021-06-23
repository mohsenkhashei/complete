import * as Sequelize from "sequelize";
import { DataTypes } from "sequelize";
import sequelize from "sequelize/types/lib/sequelize";

//extending
class User extends Sequelize.Model {
    username!: string;
}
export const InitUser = (sequelize: Sequelize.Sequelize) => {
    User.init(
        {
            username: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE
        }, {
            sequelize, tableName: "Users"
        }
    )
};

// define
// const User = sequelize.define('User', {
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
     // don't forget to enable timestamps!
//   timestamps: true,

  // I don't want createdAt
//   createdAt: false,

  // I want updatedAt to actually be called updateTimestamp
//   updatedAt: 'updateTimestamp'
// })