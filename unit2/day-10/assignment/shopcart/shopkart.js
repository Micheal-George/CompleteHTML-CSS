var data = [
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$25.00",
        strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    }
];

var container=document.createElement("div");
container.setAttribute("class","container");
var main=document.createElement("div");
main.setAttribute("class","main");

data.map(function(el){
var box=document.createElement("div")
box.setAttribute("class","box");
var image=document.createElement("img")
image.setAttribute("id","image");
image.src=el.imgUrl;
var name=document.createElement("h4")
name.setAttribute("id","name")
name.innerText=el.name
var price=document.createElement("h2")
price.setAttribute("id","price")
price.innerText=el.price
var offer =document.createElement("p")
offer.setAttribute("id","offer")
offer.innerText=el.strikedOffPrice
box.append(image,name,price,offer);
main.append(box)
});

container.append(main);
document.querySelector("body").append(container);