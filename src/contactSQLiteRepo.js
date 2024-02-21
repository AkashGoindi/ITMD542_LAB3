const path = require('node:path');
const Contact = require('../src/Contact');
const betterSqlite3 = require('better-sqlite3');

const db = new betterSqlite3(path.join(__dirname, '../data/contacts.sqlite'), { verbose: console.log });

const createStmt = db.prepare("CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT, notes TEXT, date TEXT)");
createStmt.run();

const repo = {
    findAll: () => {
        const stmt = db.prepare("SELECT * FROM contacts");
        const rows = stmt.all();
        let contacts = [];
        rows.forEach((row) => {
            const contact = new Contact(row.id, row.first_name, row.last_name, row.email, row.notes, row.date);
            contacts.push(contact);
        });
        return contacts;
    },
    // findById: (uuid) => {
    //     const stmt = db.prepare("SELECT * FROM contacts WHERE id = ?");
    //     const row = stmt.get(uuid);
    //     return new Contact(row.id, row.first_name, row.last_name, row.email, row.notes, row.text);
    // },
    // create: (contact) => {
    //     const stmt = db.prepare("INSERT INTO contacts (text) VALUES (?)");
    //     const info = stmt.run(todo.text);
    //     console.log(`Contact created with id: ${info.lastInsertRowid}`);
    // },
    // deleteById: (uuid) => {
    //     const stmt = db.prepare("DELETE FROM contacts WHERE id = ?");
    //     const info = stmt.run(uuid);
    //     console.log(`Rows affected: ${info.changes}`);
    // },
    // update: (contact) => {
    //     const stmt = db.prepare("UPDATE todos SET text = ? WHERE id = ?");
    //     const info = stmt.run(contact.text, contact.id);
    //     console.log(`Rows affected: ${info.changes}`);
    // },

};

module.exports = repo;