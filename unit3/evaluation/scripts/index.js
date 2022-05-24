//store the products array in localstorage as "data"
var productDAta=JSON.parse(localStorage.getItem("data"))||[]     //if array is empty create new array or getitem from the localstorage

document.querySelector("#submit").addEventListener("click",myFun)

function myFun()
{
    event.preventDefault()
    var form=document.querySelector("#product_form")

    function myProduct(B,N,P,I)
    {                                        //constructor function
        this.Brand=B;
        this.Name=N;
        this.Price=P;
        this.img_url=I
    }

    var p1= new myProduct(form.product_brand.value,form.product_name.value,form.product_price.value,form.product_image.value) //products are created using constructor function
    productDAta.push(p1)
   localStorage.setItem("data",JSON.stringify(productDAta)) //the array productData is added to localstorage with key "data"
    window.location.reload()   //to reload the page, after data is submited the page wll get reloaded and input space will become empty
}