import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS users(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         usename Text UNIQUE NOT NULL,
         email Text UNIQUE NOT NULL,
         password Text NOT NULL,
         avatar Text
        )
   `)

function createUseRepository(newUser){
    return new Promise((res, rej) => {
        const { usename, email, password, avatar } = newUser
        db.run(`
              INSERT INTO users (usename, email, password, avatar)
              VALUES (?, ?, ?, ?)
            `
            [ usename, email, password, avatar ],
            (err) =>{
                if (err){
                    rej(err)
                } else {
                    res({message: "use create"})
                }
            }
        )
    })
}

export default {
    createUseRepository
}