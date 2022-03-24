const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("#header nav .toggle")

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

// Click nos itens do menu:

const links = document.querySelectorAll('#header nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

// Mudar o header da pg qnd der o scroll:
function changeHeaderWhenScroll(){
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight   

    if(window.scrollY >= navHeight) {
        //scroll maior que a altura do header
        header.classList.add('scroll')
    } else{
        //menor que a altura do header
        header.classList.remove('scroll')
    }
}

// Testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

// ScrollReveal: show elements while scrolling the page
const scrollReveal= ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, {interval: 100})


// Back to top function
function backToTop(){
    const backToTopButton = document.querySelector(".back-to-top")

    if(window.scrollY >= 800) {
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }    

}

// When Scroll Logic: 
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
})
