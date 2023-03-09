
function addtask(){

    let list=document.createElement("li");
    list.setAttribute("class","list");
    let h2=document.createElement("h2");
    let ul=document.getElementById("taskstodo");
    let btn=document.createElement("button");
    btn.textContent="Remove";
    btn.setAttribute("class","edit");
    let btn1=document.createElement("button");
    btn1.textContent="Mark";
    btn1.setAttribute("class","mark");
    // btn1.setAttribute("onclick","markasdone()");
    let input2=document.createElement("h3");
    input2.setAttribute("class","input");
    input2.textContent=document.getElementById("addtext").value;
let ul1=document.getElementById("donetasks");
// let list2=document.getElementsByClassName("list");
let list1=document.createElement("li");
list1.setAttribute("class","list1");
let btn2=document.createElement("button");
btn2.setAttribute("class","delete");
btn2.textContent="Delete";
list1.appendChild(input2);
list1.appendChild(btn2);
    btn1.addEventListener("click",function(){
        ul.removeChild(list);
        ul1.appendChild(list1);

    })
    
    h2.textContent="Tasks to do";
    let btns=document.createElement("div");
    btns.setAttribute("class","btns");
    btns.appendChild(btn);
    btns.appendChild(btn1);
    let input=document.createElement("h3");
    input.setAttribute("class","input");
    input.textContent=document.getElementById("addtext").value;
    list.appendChild(input);
    list.appendChild(btns);
    if(input.textContent==""){
        alert("Please enter some task");
    }
    else{
    ul.appendChild(list);
    }
    btn2.addEventListener("click",function(){
        ul1.removeChild(list1);
        })
    btn.addEventListener("click",function(){
        ul.removeChild(list);
        
    }) 
}
// function markasdone(){
//     let input2=document.createElement("h3");
//     input2.setAttribute("class","input");
//     input2.textContent=document.getElementById("addtext").value;
// let ul=document.getElementById("donetasks");
// let list2=document.getElementsByClassName("list");
// let list1=document.createElement("li");
// list1.setAttribute("class","list1");
// let btn2=document.createElement("button");
// btn2.setAttribute("class","delete");
// btn2.textContent="Delete";
// list1.appendChild(input2);
// list1.appendChild(btn2);
// ul.appendChild(list1);
// alert("Congrats, You have finished you task succesfully")
// let list=document.createElement("li");
//     list.setAttribute("class","list");
// btn2.addEventListener("click",function(){
// ul.removeChild(list1);
// })    
// }