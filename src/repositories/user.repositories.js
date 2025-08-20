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

   function createUserRepository(newUser) {
    return new Promise((resolve, reject) => {
        const { usename, email, password, avatar } = newUser;
        db.run(
            `INSERT INTO users (usename, email, password, avatar)
             VALUES (?, ?, ?, ?)`,
            [usename, email, password, avatar],
            function(err) { 
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID, ...newUser });
                }
            }
        );
    });
}


export default {
    createUserRepository
}