document.querySelector("form").addEventListener("submit",todolist)
function todolist()
{
    event.preventDefault();
    var itemname=document.querySelector("#name").value
    var quantity=document.querySelector("#qty").value
    var priority=document.querySelector("#priority").value
    var table=document.createElement("tr")
    var td1=document.createElement("td")
    td1.innerText=itemname;
    var td2=document.createElement("td")
    td2.innerText=quantity;
    var td3=document.createElement("td")
    td3.innerText=priority;
    table.append(td1,td2,td3)
    document.querySelector("tbody").append(table);
}