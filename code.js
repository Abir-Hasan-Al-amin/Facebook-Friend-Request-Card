const btn =document.querySelector("button");
const s= document.querySelector("#s");
btn.addEventListener('click',e=>{
    if(s.innerHTML=="Stranger"){
        s.innerHTML="Friends";
        s.style.color="green";
        btn.innerHTML ="Remove";
        btn.style.backgroundColor="silver";
    }else{
        s.innerHTML="Stranger";
        s.style.color="red";
        btn.innerHTML ="Add Friend";
        btn.style.backgroundColor="rgb(10, 139, 237)";
    }
});