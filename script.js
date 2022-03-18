const sections = document.querySelectorAll('section');
const aNav = document.querySelectorAll('ul li a');


window.addEventListener('scroll', ()=>{
    let current ='';
    sections.forEach( section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute('id');
        }
    })
    })


const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('header');
const menuMobile = document.querySelector('.nav_mobile');
const overlay = document.querySelector('.overlay');


btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ //Close hamburger menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        menuMobile.classList.add('fade-out');
        menuMobile.classList.remove('fade-in');
        
        
    }
    else{ //Open hamburger menu
        header.classList.add('open'); 
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        menuMobile.classList.add('fade-in');
        menuMobile.classList.remove('fade-out');
}
})
