
function pizza(size, toppings, crust, number, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.number = number;
  this.delivery = delivery;

  var pizzaSize, deliveryCost;

  $(document).ready(function () {
    $("#order").click(function () {
      $(".popup").toggle();
      $("#order").hide()
    })
    $(".close_btn").click(function () {
      $(".popup").hide();
      $("#orderBtn").show()
    })

    $("#form").submit(function (event) {
      event.preventDefault();

      var inputtedSize = $('#pizza-size').val();
      var inputtedToppings = $('#toppings').val();
      var inputtedCrust = $('#pizza-crust').val();
      var inputtedNumber = parseInt($('#number-of-pizza').val());
      var inputtedDelivery = $('#delivery').val();

      
      var Pizza = new Pizza(inputtedSize, inputtedToppings, inputtedCrust, inputtedNumber, inputtedDelivery);


      if (pizza.pizza - size == "small") {
        pizzaSize = 800;
      } else if (pizza.pizza - size == "medium") {
        pizzaSize = 1000;
      } else if (pizza.pizza - size == "large") {
        pizzaSize = 1500;
      } else {
        value = 0;
      }


      if (pizza.pizza-crust == "stuffed") {
      } else if (pizza.pizza-crust == "glutenfree") {
      } else if (pizza.pizza-crust == "crispy") {
      } else {
        value = 0;
      }


      if (pizza.toppings == "brocollini") {
      } else if (pizza.toppings == "potato") {

      } else if (pizza.toppings == "bacon") {

      }
      else if (pizza.toppings == "anchovies") {

      } else if (pizza.toppings == "pepperoni") {

      } else if (pizza.toppings == "garlic") {

      } else if (pizza.toppings == "sausage") {

      } else if (pizza.toppings == "chicken") {

      } else if (pizza.toppings == "margherita") {

      } else if (pizza.toppings == "capricciosa") {

      }

      else {
        value = 0;
      }
    
    })

      if (pizza.delivery == "yes") {
        deliveryCost = 200;
        alert(" Delivery cost is " + deliveryCost);
        var location = prompt("Please indicate your location");
        alert("your order will be delivered to " + location);
      } else {
        deliveryCost = 0;
        $("#loc").hide();
      }

      var total;
      total = price + deliveryCost;

      $("#showDetails").show();
      $("#num").html(inputtedNumber);
      $("#top").html(inputtedToppings);
      $("#crts").html(inputtedCrust);
      $("#price").html(total);
      $("#location").html(location);

    })





  }