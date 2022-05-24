// Store cart items in local storage with key: "items"

const url="https://grocery-masai.herokuapp.com/items"
fetch(url)
.then(function(res)
{
    return res.json()
})
.then(function(res){
    console.log(res.data)
    display(res.data)
})
.catch(function(err)
{
    console.log(err)
})

const items=JSON.parse(localStorage.getItem("items"))||[]


function display(data)
{
    data.map(function(elem){
        let box=document.createElement("div")
        box.setAttribute("id","box")

    let image=document.createElement("img")
    image.src=elem.image;

    let name=document.createElement("h3")
    name.innerText=elem.name

    let price=document.createElement("h3")
    price.innerText=elem.price

    let btn=document.createElement("button")
    btn.setAttribute("id","add_to_cart")
    btn.innerText="Add To Cart"
    btn.addEventListener("click",function(){
       items.push(elem)
       localStorage.setItem("items",JSON.stringify(items))
       document.querySelector("#item_count").innerText=items.length
    })


    box.append(image,name,price,btn)
    document.querySelector("#items").append(box)
    })
    
}
document.querySelector("#item_count").innerText=items.length


