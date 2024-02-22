const path = require('node:path');
const Contact = require('../src/Contact');
const betterSqlite3 = require('better-sqlite3');

const db = new betterSqlite3(path.join(__dirname, '../database/contacts.sqlite'), { verbose: console.log });

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
    findById: (id) => {
        const stmt = db.prepare("SELECT * FROM contacts WHERE id = ?");
        const row = stmt.get(id);
        return new Contact(row.id, row.first_name, row.last_name, row.email, row.notes, row.text);
    },
    create: (contact) => {
        const stmt = db.prepare("INSERT INTO contacts (first_name, last_name, email, notes, date) VALUES (?, ?, ?, ?, ?)");
        const {firstName, lastName, email, notes, date} = contact;
        const info = stmt.run(firstName, lastName, email, notes, date);
        console.log(`Contact created with id: ${info.lastInsertRowid}`);
    },
    deleteById: (id) => {
        const stmt = db.prepare("DELETE FROM contacts WHERE id = ?");
        const info = stmt.run(id);
        console.log(`Rows affected: ${info.changes}`);
    },
    update: (contact) => {
        const stmt = db.prepare("UPDATE contacts SET first_name = ?, last_name = ?, email = ?, notes = ?, date = ? WHERE id = ?");
        const {firstName, lastName, email, notes, date, id} = contact;
        const info = stmt.run(firstName, lastName, email, notes, date, id);
        console.log(`Rows affected: ${info.changes}`);
    },

};

module.exports = repo;