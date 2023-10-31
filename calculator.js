
let str="";
let buttons=document.querySelectorAll(".btns")
let input=document.querySelector("#input")

let arr=Array.from(buttons);

   for(btn of arr){
    btn.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            str=eval(str);
            input.value=str
        }
        else if(e.target.innerText=="AC"){
            str="";
            input.value=str;
        }
        else if(e.target.innerText=="Del"){
           str=str.slice(0,str.length-1);
            input.value=str;
         }
        else{
            str=str+e.target.innerText;
            input.value=str;
        }
    })
   }
