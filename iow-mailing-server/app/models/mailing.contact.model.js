const sql = require("./db.js");
const constant = require("./constant.js");

const Contact = function(contact) {
    console.log(contact);
    this.code = contact.ADCOcode;
    this.name = contact.ADCONAME;
    this.org = contact.ADORNAME;
    this.altname = contact.ADCONAME2;
    this.firstname = contact.ADCOFIRSTNAME;
    this.firstnameExtra = contact.ADCOFIRSTNAME2;
    this.countrycode = contact.COADCNCODEX;
    this.source = contact.COADCNCODEX;
    this.civility = contact.ADCOCIVILITY;
    this.fullName = contact.ADCOADDRES1;
    this.address2 = contact.ADCOADDRES2;
    this.address3 = contact.ADCOADDRES3;
    this.orgAddress = contact.ADORADRESS1;
    this.orgAddress2 = contact.ADORADRESS2;
    this.orgAddress3 = contact.ADORADRESS3;
    this.orgAddress4 = contact.ADORADRESS4;
    this.orgAddress5 = contact.ADORADRESS5;
    this.orgAddress6 = contact.ADORADRESS6;
    this.website = contact.ADORWEBSITE;
    this.position = contact.ADCOPOS;
    this.dep = contact.ADCOPOSDEPT;
    this.postalcode = contact.ADORCP;
    this.mail = contact.ADCOEMAILPOS;
    this.mail2 = contact.ADCOemail2;
    this.mail3 = contact.ADCOemail3;
    this.skype = contact.ADCOSKYPE;
    this.mobile = contact.ADCOTELMOB;
    this.phone = contact.ADCOTELDIRECT;
    this.phone2 = contact.ADCOTELSEC;
    this.fax = contact.ADCOFAX;

};

Contact.findById = (id, result) => {
    sql.query("SELECT * FROM T_adcontact WHERE ADCOcode = '?'",
        [id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, new Contact(res[0]));
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

Contact.getAll = (name, limit, result) => {
    let rows = limit && limit < constant.MAX_ROWS ? limit : constant.DEFAULT_ROW_NUMBER;
    sql.query("SELECT * " +
        "FROM T_adcontact c, T_adorga o " +
        "WHERE c.coadorcode = o.adorcode " +
            "AND (ADCOADDRES1 LIKE ? OR ADCOEMAILPOS LIKE ?) " +
        "LIMIT ?",
        ['%' + name + '%', '%' + name + '%', rows],
        (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res.map(o => new Contact(o)));
    });
};

module.exports = Contact;