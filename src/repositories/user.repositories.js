import { de } from "zod/locales";
import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS users(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         usename Text NOT NULL UNIQUE,
         email Text NOT NULL UNIQUE,
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
  
  function findUserByEmailRepository(email) {
    return new Promise((resolve, reject) => {
      db.get(
        `
          SELECT id, usename, email, avatar
          FROM users
          WHERE email = ?
        `,
        [email],
        (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });
  }

  function findUserByIdRepository(id) {
    return new Promise((resolve, reject) => {
      db.get(
        `
          SELECT id, usename, email, avatar
          FROM users
          WHERE id = ?
        `,
        [id],
        (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });
  }

  function findAllUserByRepository(){
    return new Promise((resolve, reject) => {
      db.all(`
        SELECT id, usename, email, avatar FROM users
        `, [], (err, rows) => {
          if(err){
            reject(err)
          } else {
            resolve(rows)
          }
        })
    })
  }

  function updateUserRepository(id, user) {
    return new Promise((resolve, reject) => {
      const {usename, email, password, avatar} = user
      db.run(
        `
          UPDATE user SET 
          usename =?, 
          email=?, 
          password =?, 
          avatar =?,
          WHERE id = ?,
        `,
        [usename, email, password, avatar, id],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve({id, ...user});
          }
        }
      );
    });
  }

  async function deleteUserRepository(id) {
    return new Promise((resolve, reject) => {
      db.run(
        `
          DELETE FROM users
          WHERE id = ?
        `,
        [id],
        function(err) {
          if (err) {
            reject(err);
          } else {
            resolve({message: `User with id ${id} deleted successfully`});
          }
        }
      );
    });
  }
  
export default {
    createUserRepository,
    findUserByEmailRepository,
    findUserByIdRepository,
    findAllUserByRepository,
    updateUserRepository,
    deleteUserRepository
}