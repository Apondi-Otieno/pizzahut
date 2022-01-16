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
    var MixedSlicedMushroomsAndGarlicm = new pizzaToppings("mushroom",200);
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
      alert(pricePerSize)
    } else if (optionValue == "small") {
      var pricePerSize = small.price;
      return pricePerSize;
      alert(pricePerSize)
    } else {
      alert("sellect your pizza size");
    }

//     //crust
//     var selectedcrusttype = $("input[name='pcrust']:checked").val();
//     if (selectedcrusttype == "crispy") {
//       var pricePerCrust = crispy.price;
//       //return pricePerCrust;
//       //alert(pricePerCrust);
//     } else if (selectedcrusttype == "stuffed") {
//       var pricePerCrust = stuffed.price;
//       //return pricePerCrust;
//       //alert(pricePerCrust)
//     } else if (selectedcrusttype == "gluttenfree") {
//       var pricePerCrust = gluttenFree.price;
//       //return pricePerCrust;
//       //alert(pricePerSize)
//     } else {
//       alert("sellect your pizza crust");
//     }
//     //toppings
//     var selectedtoppings = $("input[name='ptoppings']:checked").val();
//     if (selectedtoppings == "pepperoni") {
//       var pricePerToppings = Pepperoni.price;
//       //alert(pricePerToppings)
//       //return pricePerToppings;
//     } else if (selectedtoppings == "mushroom") {
//       var pricePerToppings = Mushroom.price;
//       //return pricePerToppings;
//       //alert(pricePerToppings)
//     } else if (selectedtoppings == "onion") {
//       var pricePerToppings = Onion.price;
//       //alert(pricePerToppings)
//       //return pricePerToppings;
//       //alert(pricePerToppings)
//     } else if (selectedtoppings == "tomato") {
//       var pricePerToppings = Tomato.price;
//       alert(pricePerToppings)
//       //return pricePerToppings;
//       //alert(pricePerToppings)
//     } else if (selectedtoppings == "freshgarlic") {
//       var pricePerToppings = FreshGarlic.price;
//       //alert(pricePerToppings)
//       //return pricePerToppings;
//       //alert(pricePerToppings)
//     } else if (selectedtoppings == "freshbasil") {
//       var pricePerToppings = FreshBasil.price;
//       //alert(pricePerToppings)
//       //return pricePerToppings;
//     } else {
//       alert("sellect your preffered toppongs");
//     }
//     var pizzaNumber = $("#number").val();
//     //alert(pizzaNumber)
//     //prototype
//     var totalAmount = function () {
//       return (pricePerSize + pricePerToppings + pricePerCrust) * pizzaNumber
//     };
//     totalAmount();
//     var totalAmount1 = totalAmount()
//     // alert(totalAmount1)
//     $(".size1").append(radioValue + "</br>");
//     $(".type").append(selectedcrusttype + "</br>");
//     $(".topping").append(selectedtoppings + "</br>");
//     $(".numb").append(pizzaNumber + "</br>");
//     $(".amnt").append(totalAmount1 + "</br>");
//     var delivery = $("input[name='delivery']:checked").val();
//     if (delivery == "delivered") {
//       let charges = totalAmount1 + deliveryFee
//       //alert(charges)
//       $(".message").show();
//     } else if (delivery == "pick-up") {
//       alert("your order has been recieved, thank you for shopping with us, please collect your order within the hour")
//     }
//     else {
//       alert("select your delivery mode")
//     }
//     //
//     //  $(".your_location").show( slow, swing)
//   });


// });