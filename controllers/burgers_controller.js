// Import Express and burger.js
const express = require("express");
const burger = require("../models/burger.js");
const connection = require("../config/connection.js");

// Create the `router` for the app
module.exports = function (app) {

    app.get("/", function (req, res) {
        connection.query("SELECT * FROM burgers;", function (err, data) {
            if (err) throw err;

            res.send(
                views.app(
                    views.burgers({ burgers: data })
                )
            )
        });
    });

    app.post("/", function (req, res) {
        const burger = req.body.burger;
        connection.query("INSERT INTO burgers (burger) VALUES (?)", [burger], function (err, data) {
            if (err) {
                throw err;
            }
            res.redirect("/");
        })
    });

    app.put("/api/burgers/:id"), function (req, res) {
        const sanitizeHtml = escapeHtml(req.body.burger);
        connection.query("UPDATE burgers SET burger = ? WHERE id = ?", [sanitizedHtml, req.params.id], function (err, result) {
            if (err) {
                return res.status(500).end();
            }
            else if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        });
    }

};  