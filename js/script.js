$(function () {

  //Check if User has requested for delivery
  let confirmDelivery = $("#delivery");

  // display the input field for entering the location

  confirmDelivery.on("change", () => {
    let confirmed = confirm("Charges for Delivery will be Ksh. 200/=");
    confirmed ?
      $("#delivery-location").removeClass("d-none") :
      $("#delivery-location").addClass("d-none");
  });

  //Get Order

  let pizzaFlavour = $("#flavour").val();
  let pizzaSize = $("#size").val();
  let crust = $("#crust").val();
  let toppings = $("#toppings").val();
  let quantity = parseInt($("#amount").val());

  let form = $("#makeOrder");

  form.on("submit", (e) => {
    e.preventDefault();
    let location = confirmDelivery[0].checked ? $("#location").val() : "";

    if (confirmDelivery[0].checked && !location) {
      alert("Enter a valid Location");


    } else {
      let order = new clientOrder(
        pizzaFlavour,
        pizzaSize,
        crust,
        toppings,
        location,
        quantity,
      );
      let total =
        (order.pizza.price + order.crust.price + order.toppings.price) *
        order.quantity;

      let deliveryMsg;


      if (location) {
        total = total + order.deliveryCharges;
        deliveryMsg = `Your order will be delivered to your location at, ${order.location}`;
      } else {
        deliveryMsg = "";
      }

       let message = `Your order of ${order.pizza.flavour} of size ${order.pizza.size} with ${order.crust.crust} and ${order.toppings.toppings} toppings will cost a total of ${total}`;


      if (location) {
        alert(message);
        alert(deliveryMsg);

      } else {
        alert(message)
      }
    }
  });
});

/** Create Pizza Flavour, Price, Toppings and Crust Objects */
let pizzaFlavour = {
  veggieTikka: "Veggie Tikka",
  chickenTikka: "Chicken Tikka",
  chickenMushroom: "Chicken Mushroom",
  hawaaian: "Hawaaian",
};



let pizzaPrice = {
  small: 500,
  medium: 800,
  large: 1200,
};

let pizzaCrustName = {
  thick: "stuffed",
  thin: "crispy",
  flatbreadCrust: "gluten-free",
};

let pizzaCrust = {
  thin: 100,
  thick: 150,
  flatbreadCrust: 180,
};

let pizzaToppingsName = {
  brocollini: " Brocollini",
  potato: " Potato and sausage",
  bacon: "Bacon",
  anchovies: "Anchovies",
  mushroom: "Mixed sliced mushrooms and garlic",
  pepperoni: "Pepperoni",
  garlic: "Garlic butter prawns and chilli",
  sausage: "Sausage and kale",
  chicken: "Chicken",
  margherita: "Margherita",
  capricciosa: "Capricciosa",
};

let pizzaToppings = {
  brocollini: 80,
  potato: 80,
  bacon: 80,
  anchovies: 80,
  mushroom: 120,
  pepperoni: 120,
  garlic: 170,
  sausage: 170,
  chicken: 170,
  margherita: 170,
  capricciosa: 170
};

/**Create an Order class */

class clientOrder {
  constructor(flavour, size, crust, toppings, location, quantity) {
    (this.pizza = {
      flavour: pizzaFlavour[flavour],
      size,
      price: pizzaPrice[size],
    }),
      (this.crust = {
        crust: pizzaCrustName[crust],
        price: pizzaCrust[crust],
      }),
      (this.toppings = {
        toppings: pizzaToppingsName[toppings],
        price: pizzaToppings[toppings],
      }),
      (this.location = location),
      (this.quantity = quantity);
  }
}

clientOrder.prototype.deliveryCharges = 200;

let newOrder = new clientOrder(
  "veggieTikka",
  "medium",
  "thinCrust",
  "potato",
  "",
  1
);

