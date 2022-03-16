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
    aNav.forEach(a =>{
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })

})

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('header');
const menuMobile = document.querySelector('.nav_mobile')
const body = document.querySelector('body')


btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ //Close hamburger menu
        header.classList.remove('open');
        menuMobile.classList.add('fade-out');
        menuMobile.classList.remove('fade-in');
        body.classList.remove('noscroll');


    }
    else{ //Open hamburger menu
    header.classList.add('open'); 
    menuMobile.classList.add('fade-in');
    menuMobile.classList.remove('fade-out');
    body.classList.add('noscroll');
}
})