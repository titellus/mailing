const Contact = require("../models/mailing.contact.model");

exports.findAll = (req, res) => {
    Contact.getAll(req.query.name, req.query.limit, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving contacts."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Contact.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found contact with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving contact with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};