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

    var Brocollini= new pizzaToppings("brocollini", 200)
    var PotatoAndSausage =new pizzaToppings("potato", 100)
    var Bacon= new pizzaToppings("bacon",200)
    var Anchovies = new pizzaToppings("anchovies", 400)
    var MixedSlicedMushroomsAndGarlicm = new pizzaToppings("mushroom",200)
    var Pepperoni=new pizzaToppings("pepperoni", 300)
    var GarlicButterPrawnsAndChilli = new pizzaToppings("garlic",340)
    var SausageAndKale =new pizzaToppings("sausage",400)
    var Chicken =new pizzaToppings("chicken",300)
    var Margherita =new pizzaToppings("margherita",300)
    var Capricciosa =new pizzaToppings("capricciosa",200)
})