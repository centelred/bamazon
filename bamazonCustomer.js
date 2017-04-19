//Create MYSQL database called 'bamazon_db'

//Create table called 'products'

/*
Create columns (as listed below):
-  item_id
-  product_name
-  dept_name
-  price
-  stock_qty
*/

//Create at least 10 products to populate into the table

//Create a node application called 'bamazonCustomer.js'
var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Curtisx7",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);
    begin();
})

//Display available products upon initial load
var begin = function() {
    connection.query('SELECT * FROM products', function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log('===================================');
            console.log('| ID      | ' + res[i].item_id);
            console.log('-----------------------------------');
            console.log('| PRODUCT | ' + res[i].product_name);
            console.log('-----------------------------------');
            console.log('| PRICE   | ' + res[i].price);
            console.log('-----------------------------------');
            console.log('| STOCK   | ' + res[i].stock_qty);
            console.log('-----------------------------------');
            console.log('| DEPART  | ' + res[i].dept_name);
            console.log('===================================');
            console.log('');
        }
        purchId();
        //quit();

    })
}

/*
Utilize inquirer.prompt to:
-  ask customer what ID to purchase
-  ask customer for quantity
*/
var purchId = function() {
    inquirer.prompt([{
        name: "item_id",
        type: "input",
        message: "To purchase, select item ID.",
        validate: function(value) {
            var valid = value.match(/^[0-9]+$/)
            if (valid) {
                return true
            }

            return 'Please enter a valid Item ID'
        }

    }, {
        name: "stock_qty",
        type: "input",
        message: "Please enter purchase quantity",
        validate: function(value) {
            var valid = value.match(/^[0-9]+$/)
            if (valid) {
                return true
            }

            return 'Please enter a quantity.'
        }
//Have program check availability and throw err if out of stock

/*
If in stock fulfill order:
-  update sql database
-  output total purchase amount
*/

    }]).then(function(answer) {
        connection.query('SELECT * FROM products WHERE item_id = ?', [answer.item_id], function(err, res) {
            console.log(res);
            if (answer.stock_qty > res[0].stock_qty) {
                console.log('Sorry, our inventory is low on this product');
                console.log('Try again later, Bye!');
                quit();
            } else {
                price = res[0].price * answer.stock_qty;
                curDepartment = res[0].dept_name;
                console.log('Total Purchase is $' + price);
                console.log('Thanks for shopping!');
                console.log('');
                var math = res[0].stock_qty - parseInt(answer.stock_qty);
                connection.query('UPDATE products SET stock_qty= ' + math + ' WHERE item_id =' + answer.item_id);
                quit();
            }
        });
    });
};

var quit = function() {
    connection.end();
}

