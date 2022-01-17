
function pizza(size, toppings, crust, number, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.number = number;
  this.delivery = delivery;



  $(document).ready(function () {
    $("#order").click(function () {
      $(".popup").toggle();
      $("#order").hide()
    })

    $(".close").click(function () {
      $(".popup").hide();
      $("#order").show()
    })

    $("#form").submit(function (event) {
      event.preventDefault();

      var size = $('#pizza-size').val();
      var toppings = $('#toppings').val();
      var crust = $('#pizza-crust').val();
      var number = $('#number-of-pizza').val();
      var delivery = $('#delivery').val();

      var pizzaSize, pizzaCrust, toppings, number;
      var Pizza = new Pizza(size, toppings, crust, number, delivery);


      if (pizza.pizzaSize == "small") {
        pizzaSize = 800;
      } else if (pizza.pizzaSize == "medium") {
        pizzaSize = 1000;
      } else if (pizza.pizzaSize == "large") {
        pizzaSize = 1500;
      } else {
        value = 0;
      }


      if (pizza.pizzaCrust == "stuffed") {
        pizzaCrust = 200;
      } else if (pizza.pizzaCrust == "glutenfree") {
        pizzaCrust = 300;
      } else if (pizza.pizzaCrust == "crispy") {
        pizzaCrust = 500;
      } else {
        value = 0;
      }


      if (pizza.toppings == "brocollini") {
        toppings = 200;

      } else if (pizza.toppings == "potato") {
        toppings = 100;

      } else if (pizza.toppings == "bacon") {
        toppings = 200;

      }
      else if (pizza.toppings == "anchovies") {
        toppings = 100;

      } else if (pizza.toppings == "pepperoni") {
        toppings = 250;

      } else if (pizza.toppings == "garlic") {
        toppings = 270;

      } else if (pizza.toppings == "sausage") {
        toppings = 400;

      } else if (pizza.toppings == "chicken") {
        toppings = 200;

      } else if (pizza.toppings == "margherita") {
        toppings = 200;

      } else if (pizza.toppings == "capricciosa") {
        toppings = 300;

      }

      else {
        value = 0;
      }

    })
    var total;
    total = (pizzaSize + pizzaCrust + toppings) * number;
    var deliveryCost;
    if (pizza.delivery == "yes") {
      deliveryCost = 200;
      alert(" Delivery cost is " + deliveryCost);
      var location = prompt("Please indicate your location");
      alert("your order will be delivered to " + location);
    } else {
      deliveryCost = 0;
      $("#loc").hide();
    }


    total = price + deliveryCost;

    $("#order-details").show();
    $("#numbr").html(number);
    $("#topping").html(toppings);
    $("#crust").html(crust);
    $("#price").html(total);
    $("#loc").html(location);

  })
}





