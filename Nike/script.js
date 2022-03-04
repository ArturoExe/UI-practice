const menu=document.querySelector('.menu');
const close=document.querySelector('.close');
const nav=document.querySelector('nav');

menu.addEventListener('click',()=>{
nav.classList.add('open-nav');
});

close.addEventListener('click',()=>{
    nav.classList.remove('open-nav');
});




gsap.from(`li`,{
    opacity:0,
    delay:.9,
    stagger:0.5
});


gsap.from(`a.logo`,{
y:"-100",
ease:"bounce",
delay:1

}); 