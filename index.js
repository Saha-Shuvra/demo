const menuIcon = document.getElementById("menu__icon");
const menu = document.getElementById("manu");

menuIcon.addEventListener("click",function(){
    if(manu.className == "hidden"){
        manu.classList.remove("hidden");
    }
    else{
        manu.classList.add("hidden");
    }
})