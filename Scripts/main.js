


document.addEventListener('DOMContentLoaded',()=>{
    const carousel = document.querySelectorAll('.carousel');
let maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
let intervalo = null;
let step = 5;

const start = () => {

intervalo = setInterval(function(){
   carrusel.scrollLeft = carrusel.scrollLeft + step;
   if (carrusel.scrollLeft === maxScrollLeft){
       step = -1;
   } else if (carrusel.scrollLeft === 0){
       step = step * -1;
   }
},10);

};

const stop = () => {
    clearInterval(intervalo);
};

start();
    
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 500,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false,
      
    });

});
