CREATE TABLE IF NOT EXISTS customers (
  customer_id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(250) NOT NULL

);

CREATE TABLE IF NOT EXISTS products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(50) NOT NULL,
  product_image VARCHAR(250),
  product_description text,
  price decimal NOT NULL
);

CREATE TABLE IF NOT EXISTS customer_order (
  customer_order_id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(customer_id),
  paid boolean
);

CREATE TABLE IF NOT EXISTS order_items (
  order_item_id SERIAL PRIMARY KEY,
  customer_order_id INT REFERENCES customer_order(customer_order_id),
  product_id INT REFERENCES products(product_id),
  qty INT,
  price decimal
);

-- Dummy Data
INSERT INTO products (
product_name,
product_image,
product_description,
price
)VALUES(
'Handsome Squidward',
'https://i.kym-cdn.com/entries/icons/original/000/003/047/omg.jpg',
'Squidward stuff',
12.50
);