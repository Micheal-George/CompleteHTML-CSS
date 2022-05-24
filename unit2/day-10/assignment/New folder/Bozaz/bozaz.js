document.querySelector("form").addEventListener("submit",bozaz)
function bozaz()
{
    event.preventDefault();
 var product_category=document.querySelector("#category").value;
 var product_title=document.querySelector("#name").value;
 var product_price=document.querySelector("#price").value;

 var table=document.createElement("tr");
 var td1=document.createElement("td");
 var td2=document.createElement("td");
 var td3=document.createElement("td");

 td1.innerText=product_category;
 td2.innerText=product_title;
 td3.innerText=product_price;

 table.append(td1,td2,td3);
 document.querySelector("tbody").append(table)
}