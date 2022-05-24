var ToDoList=JSON.parse(localStorage.getItem("ToDo"))
var completed=JSON.parse(localStorage.getItem("completedata"))||[]
    ToDoList.map(function(el)
    {
        var table=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        var td4=document.createElement("td")
    
        td1.innerText=el.Name
        td2.innerText=el.Qty
        td3.innerText=el.Prio
        
        var btn=document.createElement("h3")
        btn.innerText="Completed";
        btn.style.color="green"
        td4.append(btn);
        td4.addEventListener("click",function(){
            completedD(el)
        })
        table.append(td1,td2,td3,td4)
        document.querySelector("#body").append(table)
    })

   function  completedD(el)
   {
    completed.push(el)
    localStorage.setItem("completedata",JSON.stringify(completed))
     
    
   }





