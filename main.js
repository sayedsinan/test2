let nav= document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.remove("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
let navBar=document.querySelector(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})