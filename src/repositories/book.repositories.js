import db from "../config/database.js"

db.run(`CREATE TABLE IF NOT EXISTS book (
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users(Id)
    )`);

function createBookReposetory(newBook, userId) {
    return new Promise((resolve, reject) => {
        const { title, author} = newBook;
        db.run(
            `INSERT INTO books (title, author,userId) VALUES (?,?,?)`,
            [title, author, userId],
            function(err) {
                if (err) {
                    reject(err)
                } else {
                    resolve({id:this.lastID, ...newBook})
                }
            }
        )
    })
}

function findAllBookRepository() {
    return new Promise((resolve, reject) =>{
        db.all(`SELECT * FROM book`, [], (err, rows) =>{
            if (err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

export default {
    createBookReposetory,
    findAllBookRepository
}