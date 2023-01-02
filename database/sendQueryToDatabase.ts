import mysql from "mysql"

require("dotenv").config()

export async function sendQueryToDatabase(query: string, params?: any[]) {

    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })

    return new Promise((resolve, reject) => {

        if (!params) {
            connection.query(query, (err, result) => {
                if (err) reject()
                resolve(result)
                connection.end()
            })
        } else {
            connection.query(query, params, (err, result) => {
                if (err) reject()
                resolve(result)
                connection.end()
            })
        }
    })
}