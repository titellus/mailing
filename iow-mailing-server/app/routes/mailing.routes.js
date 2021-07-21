module.exports = app => {
    const contacts = require("../controllers/mailing.contact.controller.js");
    app.get("/contacts", contacts.findAll);
    app.get("/contacts/:id", contacts.findOne);
};