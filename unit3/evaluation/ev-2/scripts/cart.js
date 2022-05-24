
const data=JSON.parse(localStorage.getItem("items"))||[]
 let sum=0;
 
 data.map(function(elem,index)
 {
     sum=sum+elem.price
     let box=document.createElement("div")
     box.setAttribute("id","box")

 let image=document.createElement("img")
 image.src=elem.image;

 let name=document.createElement("h3")
 name.innerText=elem.name

 let price=document.createElement("h3")
 price.innerText=elem.price

 let btn=document.createElement("button")
 btn.setAttribute("id","remove")
 btn.innerText="Remove"
 btn.addEventListener("click",function(){
     data.splice(index,1)
     localStorage.setItem("items",JSON.stringify(data))
     window.location.reload()
 })


 box.append(image,name,price,btn)
 document.querySelector("#cart").append(box)
 })

 document.querySelector("#cart_total").innerText="₹"+sum
 console.log(sum)