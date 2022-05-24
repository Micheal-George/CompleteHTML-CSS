document.querySelector("#form").addEventListener("submit",myFun)
var todoArr=JSON.parse(localStorage.getItem("ToDo"))||[];
function myFun()
{
    event.preventDefault();
var objTodo={
    Name:document.querySelector("#name").value,
    Qty:document.querySelector("#qty").value,
    Prio:document.querySelector("#priority").value,
};
todoArr.push(objTodo);
localStorage.setItem("ToDo",JSON.stringify(todoArr))


}
