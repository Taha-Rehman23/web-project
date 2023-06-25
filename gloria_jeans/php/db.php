<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "gloria_jeans";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: ".$conn->connect_error);
    }

    // create categories table if not exists
    $sql = "CREATE TABLE IF NOT EXISTS categories (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    )";
    $conn->query($sql);

    // create products table if not exists
    $sql = "CREATE TABLE IF NOT EXISTS products (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        price FLOAT NOT NULL,
        category_id INT(6) UNSIGNED NOT NULL
    )";
    $conn->query($sql);

    // create orders table if not exists
    $sql = "CREATE TABLE IF NOT EXISTS orders (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        user_id INT(6) UNSIGNED NOT NULL,
        total_price FLOAT NOT NULL
    )";
    $conn->query($sql);

    // create order_products table if not exists
    $sql = "CREATE TABLE IF NOT EXISTS order_products (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        order_id INT(6) UNSIGNED NOT NULL,
        product_id INT(6) UNSIGNED NOT NULL,
        quantity INT(6) UNSIGNED NOT NULL
    )";
    $conn->query($sql);

    // insert categories if not exists
    $sql = "SELECT * FROM categories";
    $result = $conn->query($sql);
    if ($result->num_rows == 0) {
        $sql = "INSERT INTO categories (name) VALUES ('Coffee')";
        $conn->query($sql);
        $sql = "INSERT INTO categories (name) VALUES ('Tea')";
        $conn->query($sql);
        $sql = "INSERT INTO categories (name) VALUES ('Fast Food')";
        $conn->query($sql);
        $sql = "INSERT INTO categories (name) VALUES ('Cakes')";
        $conn->query($sql);
        $sql = "INSERT INTO categories (name) VALUES ('Drinks')";
        $conn->query($sql);

    }

    // insert products if not exists
    $sql = "SELECT * FROM products";
    $result = $conn->query($sql);
    if ($result->num_rows == 0) {
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Cappuccino', 10, 1)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Espresso', 18, 1)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Latte', 12, 1)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Simple', 5, 2)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Kashmiri', 10, 2)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Tandoori', 16, 2)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Sandwich', 20, 3)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Zinger', 25, 3)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Fries', 10, 3)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Chocolate', 50, 4)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Pineapple', 80, 4)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Custom', 30, 4)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Coke', 5, 5)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Sprite', 8, 5)";
        $conn->query($sql);
        $sql = "INSERT INTO products (name, price, category_id) VALUES ('Fanta', 12, 5)";
        $conn->query($sql);
    }
?>
