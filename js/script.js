$(document).ready(function(){
    function pizza(size, pizzaCrust, pizzaToppings,pizzaNumber){
        this.pizzaSize = pizzaSize;
        this.pizzaCrust = pizzaCrust;
        this.pizzaToppings= pizzaToppings;
        this.pizzaNumber = pizzaNumber;
    }

    function pizzaSize(size,price){
        this.size = size;
        this.price = price;
    }

    var smallSize=new Size("small",600)
    var mediumSize=new Size("medium",900)
    var largeSize=new Size("large",1200)

    function pizzaCrust(crust,price){
        this.crust= crust;
        this.price=price;
    }

    var crispy= new pizzaCrust(crust,400)
    var stuffed= new pizzaCrust(crust,600)
    var glutenfree= new pizzaCrust(crust,800)

    function pizzaToppings(toppings,price){
        this.toppings=toppings;
        this.price=price;
    }

    var Brocollini= new pizzaToppings("brocollini", 200);
    var PotatoAndSausage =new pizzaToppings("potato", 100);
    var Bacon= new pizzaToppings("bacon",200);
    var Anchovies = new pizzaToppings("anchovies", 400);
    var MixedSlicedMushroomsAndGarlic = new pizzaToppings("mushroom",200);
    var Pepperoni=new pizzaToppings("pepperoni", 300);
    var GarlicButterPrawnsAndChilli = new pizzaToppings("garlic",340);
    var SausageAndKale =new pizzaToppings("sausage",400);
    var Chicken =new pizzaToppings("chicken",300);
    var Margherita =new pizzaToppings("margherita",300);
    var Capricciosa =new pizzaToppings("capricciosa",200);

    let deliveryFees=700;
})



 $("#Pizza-size").click(function () {
    var optionValue = $("option[name='pizza-size']:selected").val();
    if (optionValue == "large") {
      var pricePerSize = large.price;

      return pricePerSize;
      alert(pricePerSize);
    } else if (optionValue == "medium") {
      var pricePerSize = medium.price;
      return pricePerSize;
      alert(pricePerSize);
    } else if (optionValue == "small") {
      var pricePerSize = small.price;
      return pricePerSize;
      alert(pricePerSize);
    } else {
      alert("select your pizza size");
    }

//     //crust
    var selectedcrusttype = $("option[name='pizza-crust']:selected").val();
    if (selectedcrusttype == "crispy") {
      var pricePerCrust = crispy.price;
      return pricePerCrust;
      alert(pricePerCrust);
    } else if (selectedcrusttype == "stuffed") {
      var pricePerCrust = stuffed.price;
      return pricePerCrust;
      alert(pricePerCrust);
    } else if (selectedcrusttype == "glutenfree") {
      var pricePerCrust = gluttenFree.price;
      return pricePerCrust;
      alert(pricePerSize);
    } else {
      alert("sellect your pizza crust");
    }
//     //toppings
     var selectedtoppings = $("option[name='pizza-toppings']:selected").val();
     if (selectedtoppings == "brocollini") {
       var pricePerToppings = brocollinii.price;
      alert(pricePerToppings);
       return pricePerToppings;
    } else if (selectedtoppings == "potato") {
      var pricePerToppings = potato.price;
      return pricePerToppings;
      alert(pricePerToppings);
    } else if (selectedtoppings == "bacon") {
      var pricePerToppings = bacon.price;
      alert(pricePerToppings);
      return pricePerToppings;
     
    } else if (selectedtoppings == "anchovies") {
      var pricePerToppings = anchovies.price;
      alert(pricePerToppings)
      return pricePerToppings;
      alert(pricePerToppings);
    } else if (selectedtoppings == "mushroom") {
      var pricePerToppings = mushroom.price;
      alert(pricePerToppings);
      return pricePerToppings;
     
    } else if (selectedtoppings == "pepperoni") {
      var pricePerToppings = pepperoni.price;
      alert(pricePerToppings);
      return pricePerToppings;
    } 
    else if (selectedtoppings == "garlic") {
      var pricePerToppings = garlic.price;
      alert(pricePerToppings);
      return pricePerToppings;
    }
    else if (selectedtoppings == "sausage") {
      var pricePerToppings = sausage.price;
      alert(pricePerToppings);
      return pricePerToppings;
    }
    else if (selectedtoppings == "chicken") {
      var pricePerToppings = chicken.price;
      alert(pricePerToppings);
      return pricePerToppings;
    }
    else if (selectedtoppings == "margherita") {
      var pricePerToppings = margherita.price;
      alert(pricePerToppings);
      return pricePerToppings;
    }
    else if (selectedtoppings == "capricciosa") {
      var pricePerToppings = capricciosa.price;
      alert(pricePerToppings);
      return pricePerToppings;
    }
    else
    {
       alert("select your preffered toppings");
    }


    var pizzaNumber = $("#number-of-pizza").val();
    alert(pizzaNumber);

    //prototype
    var totalAmount = function () {
      return (pricePerSize + pricePerToppings + pricePerCrust) * pizzaNumber
    };

    totalAmount();
    var totalAmount1 = totalAmount()
    alert(totalAmount1)
    $(".size1").append(optionValue + "</br>");
    $(".type").append(selectedcrusttype + "</br>");
    $(".topping").append(selectedtoppings + "</br>");
    $(".numb").append(pizzaNumber + "</br>");
    $(".amnt").append(totalAmount1 + "</br>");
    var delivery = $("input[name='delivery']:checked").val();
    if (delivery == "delivered") {
      let charges = totalAmount1 + deliveryFee
      //alert(charges)
      $(".message").show();
    } else if (delivery == "pick-up") {
      alert("your order has been recieved, thank you for shopping with us, please collect your order within the hour")
    }
    else {
      alert("select your delivery mode")
    }
    //
    //  $(".your_location").show( slow, swing)
  });





// function select(){
//     if(value =="delivery"){
//         value= prompt("Please enter location")
//     }
// }