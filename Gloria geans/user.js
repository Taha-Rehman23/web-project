//link.rel = 'stylesheet';
//link.type = 'text/css';
//link.href = 'user.css';

/*
function showMenu(foodType) {
    var menuContainer = document.querySelector('.menu-container');
    var menuList = document.querySelector('.menu-list');
    
    // Clear the previous menu items
    menuList.innerHTML = '';
  
    // Add sub-items based on the selected food type
    if (foodType === 'pizza') {
      menuList.innerHTML += '<li>Margherita <button class="btn">Taco</button></li>';
      menuList.innerHTML += '<li>Pepperoni</li>';
      menuList.innerHTML += '<li>Hawaiian</li>';
    } else if (foodType === 'burger') {
      menuList.innerHTML += '<li>Cheeseburger</li>';
      menuList.innerHTML += '<li>Chicken Burger</li>';
      menuList.innerHTML += '<li>Veggie Burger</li>';
    } else if (foodType === 'sushi') {
      menuList.innerHTML += '<li>California Roll</li>';
      menuList.innerHTML += '<li>Salmon Nigiri</li>';
      menuList.innerHTML += '<li>Spicy Tuna Roll</li>';
    } else if (foodType === 'taco') {
      menuList.innerHTML += '<li>Beef Taco</li>';
      menuList.innerHTML += '<li>Chicken Taco</li>';
      menuList.innerHTML += '<li>Vegetable Taco</li>';
    }
  
    // Show the menu container
    menuContainer.style.display = 'block';
  }


  function showMenu(type)
  {

    var pizza = document.getElementById("pizza");
    pizza.style.display = 'none';


  }
    */
  var count =0;

  function add()
  {
    var adding = document.getElementById('no');
    adding.innerHTML= ++count;
    adding.style = '';
cost();
  }

  function sub()
  {
if(count > 0)
{
    var adding = document.getElementById('no');
    adding.innerHTML= --count;
    cost();
}

  }

function cost()
{
  var cost = document.getElementById('cost');
  cost.innerHTML= count*250;
}


