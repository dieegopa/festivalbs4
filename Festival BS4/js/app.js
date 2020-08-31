//smooth scroll con js
document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
   enlace.addEventListener('click', (e) => {
      e.preventDefault();
       document.querySelector(enlace.getAttribute('href')).scrollIntoView({
           behavior: 'smooth',
           block: 'start'
       });
       
   });
});




//cambia de color el navbar al hacer scroll
window.onscroll = function (e) {
    const scroll = window.scrollY;
    
    const header = document.querySelector('#navegacion_principal');
    
    if(scroll > 300 ){
        header.classList.add('bg-success');
    } else {
        header.classList.remove('bg-success');
    }
}


//countdown
$(document).ready(function(){
    $('#fecha').countdown('2020/09/07', function(e){
       $(this).html(e.strftime('<span> %D </span> Dias  <span> %H </span> Horas <span> %M </span> Minutos <span> %S </span> Segundos ')); 
    });
});