 var img = document.getElementById("img1");

 var button = document.getElementById("button1");

 var textarea = document.getElementById("p1");

 var Pizza = {
     imgsrc: "https://www.cicis.com/media/1137/pizza_trad_alfredo.png",

     name: "Pizza.",

     adjective: " & Half Pepperoni",

     verb: "Half Cheese "
 }

 var Spaghetti = {
    imgsrc: "https://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce11.jpg",

    name: "Spaghetti.",

    adjective: " Meatballs &",

    verb: "Italian "
}

var Burger = {
    imgsrc: "http://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger.jpg",

    name: "Burger.",

    adjective: " Cheese ",

    verb: "Double "
}

var IceCream = {
    imgsrc: "https://media.timeout.com/images/103397124/image.jpg",

    name: " Ice cream.",

    adjective: "Chocolate ",

    verb: "Mint "
}

var Salad = {
    imgsrc: "http://www.mypounderspizza.com/uploads/3/7/7/0/3770401/s537760827184916237_p13_i1_w1301.jpeg",

    name: " Salad.",

    adjective: " Green",

    verb: "Caesar "
}

 var lunch = [Pizza, Spaghetti, Burger, IceCream, Salad]
 

 button.addEventListener("click", function(){
   //var image = Math.floor((Math.random() * 4) + 1)
   var x = Math.floor((Math.random() * 4) + 1)
   
   console.log(lunch[x])
   img.src = lunch[x].imgsrc;

   textarea.innerHTML = lunch[x].verb + lunch[x].adjective + lunch[x].name;
   
});

