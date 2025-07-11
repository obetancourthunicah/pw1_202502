/*
1. inicializar el componente

*/

document.addEventListener(
    "DOMContentLoaded",
    ()=>{
        const lensObject = document.querySelector(".carusel");
        const trackObject = document.querySelector(".carusel-track");
        const slideObjects = [...document.querySelectorAll(".carusel-slide")];
        const maxSlide = slideObjects.length;
        let currentSlide = 0;
        let transitionDirection = 1; // 1,  -1
        const waitTime = 5000;

        let iterationId = null;
        const caruselInit = () => {
            createNavigation();
            tick();
        }

        const tick = ()=>{
            iterationId = setTimeout(
                ()=>{
                    let nextSlide = currentSlide + transitionDirection;
                    moveTo(nextSlide);
                },
                waitTime
            );
        }
        const moveTo = (slideIndex) => {
            let nextSlide = slideIndex
            if (iterationId) {
                clearInterval(iterationId);
            }
            if (nextSlide >= maxSlide){
                nextSlide = nextSlide - 2;
                transitionDirection = -1;
            }
            if (nextSlide < 0) {
                nextSlide = 1;
                transitionDirection = 1;
            }
            currentSlide = nextSlide;
            trackObject.style.transform = `translateX(-${(currentSlide)*100}vw)`;
            tick();
        }

        const createNavigation = ()=>{
            const btnPrevious = document.createElement("DIV");
            const btnNext = document.createElement("DIV");
            const dotSection = document.createElement("SECTION");

            btnPrevious.innerHTML = "&lt;";
            btnPrevious.classList.add("carusel-btn-pre");
            btnNext.innerHTML = "&gt;";
            btnNext.classList.add("carusel-btn-nxt");

            btnPrevious.addEventListener("click", (e)=>{
                e.preventDefault();
                e.stopPropagation();
                moveTo(currentSlide - 1)
            });

            btnNext.addEventListener("click", (e)=>{
                e.preventDefault();
                e.stopPropagation();
                moveTo(currentSlide + 1)
            });


            dotSection.classList.add("carusel-dots");

            slideObjects.forEach( (_, index)=>{
                const dot = document.createElement("DIV");
                dot.classList.add("carusel-dot");
                dot.addEventListener("click", (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    moveTo(index);
                })
                dotSection.appendChild(dot);
            });

            lensObject.appendChild(btnPrevious);
            lensObject.appendChild(btnNext);
            lensObject.appendChild(dotSection);

        }

        caruselInit();
    }
    //binding (this)
);


