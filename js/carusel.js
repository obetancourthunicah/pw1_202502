/*
1. inicializar el componente

*/

document.addEventListener(
    "DOMContentLoaded",
    ()=>{
        const trackObject = document.querySelector(".carusel-track");
        const slideObjects = [...document.querySelectorAll(".carusel-slide")];
        const maxSlide = slideObjects.length;
        let currentSlide = 0;
        let transitionDirection = 1; // 1,  -1
        const waitTime = 3000;

        let iterationId = null;
        let counter = 0;
        const caruselInit = () => {
            tick();
        }

        const tick = ()=>{
            iterationId = setTimeout(
                ()=>{
                    counter++;
                    console.log("Iterations:", counter);
                    tick();
                },
                waitTime
            );
        }

        caruselInit();
    }
    //binding (this)
);


