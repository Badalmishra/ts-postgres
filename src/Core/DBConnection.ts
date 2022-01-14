import { Sequelize } from "sequelize";
class DBConnection {
    public connection: Sequelize;
    constructor() {
        this.connection =
            new Sequelize('template_db', 'template_user', 'template_password',
                {
                    host: 'localhost',
                    port: 4321,
                    dialect: 'postgres'
                })
    }
    public authenticate() {
        return this.connection.authenticate()
    }
}
const dbConnection = new DBConnection()

export default dbConnection