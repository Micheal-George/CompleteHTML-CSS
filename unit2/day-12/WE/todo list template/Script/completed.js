var completeD =JSON.parse(localStorage.getItem("completedata"))

completeD.map(function(el){
    var table=document.createElement("tr")
    var td1=document.createElement("td")
    var td2=document.createElement("td")
    var td3=document.createElement("td")
   
    td1.innerText=el.Name
    td2.innerText=el.Qty
    td3.innerText=el.Prio
    table.append(td1,td2,td3)
    document.querySelector("tbody").append(table)
})