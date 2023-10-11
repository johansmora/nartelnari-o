import { Sequelize } from "sequelize";

const sequelize = new Sequelize('nartelnuevo','root','',{
    host: 'localhost',
    dialect:'mysql',
});
export default sequelize;