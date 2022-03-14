const sections = document.querySelectorAll('section');
const btn = document.querySelectorAll('li button');


window.addEventListener('scroll', ()=>{
    let current ='';
    sections.forEach( section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute('id');
        }
    })
    btn.forEach( button=>{
        button.classList.remove('active');
        if(button.classList.contains(current)){
            button.classList.add('active')
        }
    })
})