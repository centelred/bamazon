CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
dept_name VARCHAR(50) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_qty INT(10) NOT NULL,
primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES('Coboc 3ft Mini HDMI type C to HDMI type A', "Connectors/Cables", '2.99', '435');
INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES('Scotch Shipping Tape 6-pack', "Postage/Shipping", '34.45', '350');
INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES('Cuisinart Waffle Maker', "Home/Kitchen", '77.10', '50');
INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES('Ubiquiti 1080p Security Cam', "Safety/Security", '154.50', '35');
INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES('Samsung 40" DB-E Slim LED Display', "Entertainment", '662.50', '15');
INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES('FIAT 500 RagTop', "Useless Transport", '78.50', '199');
INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES('Steering Wheel Clock', "Useless Display", '28.95', '450');
INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES('Half Eaten Apple', "Used Food", '7.44', '5000');
INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES('Wireless Earbuds', "Tech", '234.56', '500');
INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES('Kendrick Lamar Album DAMN.', "Fire", '500.50', '10000'); 

