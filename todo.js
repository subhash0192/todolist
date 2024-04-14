const text = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
let arr = [];

function loadTask(){
    let li = document.createElement("li");
    for(let item of arr){
            li.innerHTML = "";
            li.innerHTML = item;
            listcontainer.appendChild(li);
            let btn = document.createElement("button");
            btn.textContent = "Edit";
            btn.id ="editbtn";
            li.appendChild(btn);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
}


function addTask(){
    if(text.value === ''){
        alert("you must write something!");
    }
    else{
        arr.push(text.value);
        loadTask();
       
    }
    text.value='';
    save();
   
}








        // let arr = [];
        // arr.push(text.value);
        // for(let item of arr){
        //     let li = document.createElement("li");
        //     li.innerHTML = item;
        //     listcontainer.appendChild(li);
        //     let btn = document.createElement("button");
        //     btn.textContent = "Edit";
        //     btn.id ="editbtn";
        //     li.appendChild(btn);
        //     let span = document.createElement("span");
        //     span.innerHTML = "\u00d7";
        //     li.appendChild(span);
        // }
       
        
        // let btn = document.createElement("button");
        // btn.textContent = "Edit";
        // btn.id ="editbtn";
        // li.appendChild(btn);
        // let span = document.createElement("span");
        // span.innerHTML = "\u00d7";
        // li.appendChild(span);
 
var a = 12;


listcontainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // if(e.target.className === "checked"){   
        //     document.getElementById("editbtn").style.display = 'none';
        // }
        // if(e.target.className !== "checked"){
        //     document.getElementById("editbtn").style.display = 'block';
        // }
        save();
    }
    else if(e.target.tagName === "SPAN"){
        
        e.target.parentElement.remove();
       
        save();
    }
    else if(e.target.tagName === "BUTTON"){
        let newValue = prompt("enter new Value");
        while(newValue === ''){
           newValue = prompt("can't store empty!. enter something");
            if(newValue !== ''){
                break;
            }
            else{
                continue;
            }
        }
        if(newValue === null){
            return;
        }
        let val = e.target.parentElement.firstChild.nodeValue;
        for(let i=0;i<arr.length;i++){
           
            if(arr[i] === val){
                arr[i] = newValue;
                e.target.parentElement.firstChild.nodeValue = arr[i];
            }
           
        }
        save();
    }
},false);



function save(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function get(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
get();
