<!DOCTYPE html>
<html>
<head>
  <title>Glorea Jeans</title>
  <script src="user.js"></script>
  <link rel="stylesheet" type="text/css" href="user.css">
</head>
<body>
  <h1>Customer Dashboard</h1>

  <div class="food-bar">
    <button class="food-btn" onclick="showMenu('pizza')">Pizza</button>
    <button class="food-btn" onclick="showMenu('burger')">Burger</button>
    <button class="food-btn" onclick="showMenu('sushi')">Sushi</button>
    <button class="food-btn" onclick="showMenu('taco')">Taco</button>
  </div>


  <div class="menu-container">
    <ul id="menu" class="menu-list">
    <p>special : </p> 
      <button class="add_sub" onclick="add()">+</button>
      <div id="no" class="no">0</div>
      <button class="add_sub" onclick="sub()">-</button>
      <p class="multi">X</p>
      <p class="unitprice">250</p>
      <p class="multi">=</p>
      <div id="cost" class="no">0</div>
    </ul>
  </div>


  <?php
      $conn = new mysqli("localhost","root","","gloriageans");
        $q="select * from products order by price";
      $ds = $conn->query($q);
      int c =0; 

      while($row = $ds->fetch_assoc()){
          echo '<div class = "food-item">';
          echo '<ul class="menu-list">';
          echo "<p>".$row['tea']."</p>";
          echo '<button class="add_sub" onclick="add()">+</button>';
          echo '<div id="no[c]" class="no">0</div>';
          echo '<button class="add_sub" onclick="sub()">-</button>';
          echo '<p class="multi">X</p>';
          echo"<p>".$row['price']."</p>";
          echo '<p class="multi">=</p>';
          echo '<div id="cost" class="no">0</div>';
          echo '</div>';
         echo'</ul>';

        // echo "Name is ".$row['stdName']." Email is ".$row['stdEmail']." Age is ".$row['stdAge']."<br>";
      }
      
        ?>





        

</body>
</html>
