let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

}

var countDownDate = new Date("jan 30,2022 00:00:00").getTime();

var x=setInterval(function() {
    var now=new Date().getTime();
var distance=countDownDate - now;
var days=Math.floor(distance/(1000*60*60*24));
var hours=Math.floor((distance%(1000*60*60*24))/(100*60*60));
var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
var seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById('day').innerText=days+"d";
    document.getElementById('hour').innerText=hours+"h";
    document.getElementById('minute').innerText=minutes+"m";
    document.getElementById('second').innerText=seconds+"s";
    if(distance<0){
        clearInterval(x);
            }

    
}, 1000);