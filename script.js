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