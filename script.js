const root = document.documentElement;
root.style.setProperty('--bg-clr', '#081b29');
root.style.setProperty('--second-bg-clr', '#112e42');
root.style.setProperty('--text-clr', '#c5c5c5');
root.style.setProperty('transition', '.5s');


const viewWid = window.innerWidth;


if( viewWid < 1020){
    const otherSkills =  document.querySelector('.other-skills');
    const skillsContainer = document.querySelector('.skills-container');
    const width_1 = otherSkills.getBoundingClientRect().width;
    const width_2 = skillsContainer.getBoundingClientRect().width;
    const newWidth = Math.max(width_1, width_2);
    
    otherSkills.style.width = newWidth + 'px';
    skillsContainer.style.width = newWidth + 'px';
    
    const skillsOnlyChild =  document.querySelector('.skills');
    skillsOnlyChild.style.flexDirection = 'column';
    skillsOnlyChild.style.alignItems = 'center';
    skillsOnlyChild.style.paddingInline = '0';

    
}

if(viewWid < 387){
    const btn_1 = document.getElementById('btn1');
    const btn_2 = document.getElementById('btn2');
    const width_01 = btn_1.getBoundingClientRect().width;
    const width_02 = btn_2.getBoundingClientRect().width;
    const $newWidth = Math.max(width_01, width_02);
    
    btn_1.style.width = $newWidth + 'px';
    btn_1.style.marginBottom = '20px';
    btn_2.style.width = $newWidth + 'px';
    btn_2.style.marginLeft = '4px';

    if(viewWid < 362){
        btn_2.style.marginLeft = '0px';
        btn_2.style.position= 'relative';
        btn_2.style.left = '50%';
        btn_2.style.transform = `translateX(-50%)`;
        btn_1.style.position= 'relative';
        btn_1.style.left = '50%';
        btn_1.style.transform = `translateX(-50%)`; 
    }
}

const animate = document.querySelector('.skills-container');
const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if(entry.isIntersecting){
    entry.target.classList.add('animate');
    }
}, 
{ threshold : 0.8}
);

observer.observe(animate);


const sections = document.getElementsByTagName('section');
const secObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('view');
            }
    })
    
}, 
{ threshold : 0.1}
);

  for(i = 0; i < sections.length; i++){
    secObserver.observe(sections[i]);
    console.log(sections[i]);
  }

const slider = document.querySelector('.slider');
const containers = Array.from(slider.children); 


const contWidth = 100;


containers.forEach((slide, index) => {
    
    slide.style.left = `${(contWidth * index)}vw`;
    
});


const moveToSlide = (slider, currentSlide, targetSlide) => {
    
    slider.style.transition = "transform 1s ease"; 
    slider.style.transform = `translateX(-${targetSlide.style.left})`;


    currentSlide.classList.remove('current');
    targetSlide.classList.add('current');
};

let autoPlay;

const startPlaying = () => {
    autoPlay = setInterval(() => {
        const currentSlide = slider.querySelector('.current');
        const nextSlide = currentSlide.nextElementSibling || containers[0]; // Loop back to the first slide if the current one is the last

        moveToSlide(slider, currentSlide, nextSlide);
    }, 3000);
};

const stopPlaying = () => {
    clearInterval(autoPlay);
};


startPlaying();


slider.addEventListener('mouseenter', stopPlaying);
slider.addEventListener('mouseleave', startPlaying);




function toggleMenu(){
    const menu = document.querySelector('.hamburger');

    menu.classList.toggle('cross');

    const nav = document.querySelector('.header .nav');

   let currentHeight = nav.getBoundingClientRect().height;

   currentHeight = parseInt(currentHeight, 10);
   
   if(currentHeight === 0){
    currentHeight = '166px'

   }
   else{
    currentHeight = '0'
   }
   

   nav.style.height = currentHeight;
}

const navMenu = document.querySelector('.header .nav-br');

const menuLinks = Array.from(navMenu.children);

menuLinks.forEach(link => {
   link.addEventListener('click', () =>{
    menuLinks.forEach(link => {
        link.classList.remove('active');
   });
    link.classList.add('active');
    const viewWid = window.innerWidth;
    if( viewWid < 550){
            toggleMenu();
        }
    
   }) 
})



const theme = document.querySelector('.theme');
const circle = document.querySelector('.circle');

theme.addEventListener('click',() => {
    const isDarkMode = root.style.getPropertyValue('--bg-clr') === '#081b29';

    if(isDarkMode){
        root.style.setProperty('--bg-clr', 'fff');
        root.style.setProperty('--second-bg-clr', '#d6dbdd');
        root.style.setProperty('--text-clr', '000');
        theme.style.background = 'black';
        circle.style.background = 'white';
        circle.style.left = '.2rem'
    }
    else{
        root.style.setProperty('--bg-clr', '#081b29');
        root.style.setProperty('--second-bg-clr', '#112e42');
        root.style.setProperty('--text-clr', '#c5c5c5');
        theme.style.background = `var(--main-clr)`;
        circle.style.background = 'black';
        circle.style.left = '2.8rem'
    }
})




             