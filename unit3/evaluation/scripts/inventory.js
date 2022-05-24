var productData=JSON.parse(localStorage.getItem("data"))

productData.map(function(elem,index)    //mapping elements from localstorage
{
var box=document.createElement("div")
box.setAttribute("id","box")

var image=document.createElement("img")
image.src=elem.img_url;

var brand=document.createElement("h2")
brand.innerText=elem.Brand;

var name=document.createElement("h3")
name.innerText=elem.Name

var price=document.createElement("h3")
price.innerText=elem.Price;

var btn=document.createElement("button")
btn.innerText="Remove"
btn.setAttribute("id","remove_product")
btn.addEventListener("click", function(){
    removeFun(index,btn)
})

box.append(image,brand,name,price,btn)     //mapped datas are appending to the div box
document.querySelector("#products_data").append(box)   //box is appending to the main div

})

function removeFun(index,btn)      //function to remove data from localstorage as well as from inventory
{
    productData.splice(index,1)
    localStorage.setItem("data",JSON.stringify(productData))
    window.location.reload();
}