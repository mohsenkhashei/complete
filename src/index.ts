import * as dotenv from "dotenv";
dotenv.config({path: './config/.env'});
import { database } from "./dbConnection"



(async () => {
    await database.sequelize.sync();
})();
