const input=document.querySelector("#input-space");
const ul=document.querySelector(".list-items");

function add(){
  if(input.value===''){
    alert("You have to write something!")
  }else{
    let li=document.createElement("li")
    
    li.innerHTML=input.value;
    ul.appendChild(li);
    
    let span=document.createElement("span");
    span.innerText="×";
    
    li.appendChild(span)
    saveData();
}
input.value='';
saveData();
  }
  
  ul.addEventListener("click",function del(e){
    if(e.target.tagName==="LI"){
      e.target.classList.toggle("checked") 
      saveData();
    }else if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
      saveData();
    }
  })
 
 function saveData(){
   localStorage.setItem("data",ul.innerHTML);
 }
 function showTask(){
   ul.innerHTML=localStorage.getItem("data");
 }
 showTask();
  
  
