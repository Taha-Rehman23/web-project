<?php
    include 'db.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $data['user_id'] = 0;

    // calculate the total price from the quantity of products and the price of the products
    $data['total_price'] = 100;
    foreach ($data['products'] as $product) {
        $sql = "SELECT * FROM products WHERE id = ".$product['id'];
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $data['total_price'] += $row['price'] * $product['quantity'];
        }
    }

    $sql = "INSERT INTO orders (user_id, total_price) VALUES (".$data['user_id'].", ".$data['total_price'].")";
    $result = $conn->query($sql);
    $order_id = $conn->insert_id;
    foreach ($data['products'] as $product) {
        $sql = "INSERT INTO order_products (order_id, product_id, quantity) VALUES (".$order_id.", ".$product['id'].", ".$product['quantity'].")";
        $result = $conn->query($sql);
    }
    echo json_encode(array('id' => $order_id));
    $conn->close();
?>

