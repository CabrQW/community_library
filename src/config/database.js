 import sqlite3 from 'sqlite3'

 const db = new sqlite3.Database('library_db.sqlite', (error) => {
    if (error){
        console.log('erooe')
    } else {
        console.log('sdjknsdgn')
    }
 })

 export default db