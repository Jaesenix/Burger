// Import (require) `connection.js` into `orm.js`
const connection = require("./connection.js");

const tableName = "burgers_db";

/* In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
selectAll() */
const orm = {
    getBurger: function(callback) {
        const selectAll = "SELECT * FROM " + tableName;
        connection.query(selectAll, function(err, result) {
            callback(result);
        });
    },

    // insertOne()
    addBurger: function(burger, callback) {
        const insertOne = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
        burger.complete = burger.complete || 0;
        connection.query(insertOne, [
            burger.text, burger.complete
        ], function(err, result) {
            callback(result);
        });
    },

    // updateOne()
    editBurger: function(burger, callback) {
        const updateOne = "UPDATE " + tableName + " SET text=? WHERE id=?";
        connection.query(updateOne, [
            burger.text, burger.id
        ], function(err, result) {
            callback(result);
        });
    }
};

// Export the ORM object in `module.exports`
module.exports = orm;