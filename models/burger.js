// Import `orm.js` into `burger.js
const orm = require("../config/orm.js");
const connection = require("../config/connection.js");

// Create the code that will call the ORM functions using burger specific input for the ORM
const burger = {
    selectWhere: function(column, value) {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM burgers WHERE ?? = ?", [column, value], function(err, data) {
                if(err){
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    },

    selectAndOrder: function(selectColumns, id){
        return new Promise((resolve, reject) => {
            connection.query("SELECT ?? FROM burgers ORDER BY ?? ASC", [selectColumns, id], function(err, data) {
                if(err){
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }
};

// Export burger.js file
module.exports = burger;