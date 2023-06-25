<?php
    include 'db.php';
    $sql = "SELECT * FROM categories";
    $result = $conn->query($sql);
    $categories = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $category = array();
            $category['id'] = $row['id'];
            $category['name'] = $row['name'];
            $category['products'] = array();
            $sql = "SELECT * FROM products WHERE category_id = ".$row['id'];
            $result2 = $conn->query($sql);
            if ($result2->num_rows > 0) {
                while($row2 = $result2->fetch_assoc()) {
                    $product = array();
                    $product['id'] = $row2['id'];
                    $product['name'] = $row2['name'];
                    $product['price'] = $row2['price'];
                    array_push($category['products'], $product);
                }
            }
            array_push($categories, $category);
        }
    }
    echo json_encode($categories);
    $conn->close();
?>
