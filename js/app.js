let slideIndex = 0,
    slidePlay = true,
    slides = document.querySelectorAll('.slide');

    console.log(slides.length)

    // let arr = [1,2,3,4,5];

// console.log(arr)


let prev = document.querySelector('.prev')
let next = document.querySelector('.next')



const hideAllSlide = () => {

    slides.forEach((e) => {
        // console.log(e)
        e.classList.remove('active')
    })

}

const showSlide = () => {
    hideAllSlide()
    slides[slideIndex].classList.add('active')
    // console.log('asd')
}

const nextSlide = () => {

    if (slideIndex + 1 === slides.length) {
        slideIndex = 0
        // console.log(`if ${slideIndex}`)
    } else {
        slideIndex = slideIndex + 1
        // console.log(`else ${slideIndex}`)
    }

}

const prevSlide = () => {
    if (slideIndex - 1 < 0) {
        slideIndex = slideIndex + slides.length - 1
        console.log(`if ${slideIndex}`)
    } else {
        slideIndex = slideIndex - 1
        console.log(`else ${slideIndex}`)
    }
}

// showSlide()


next.addEventListener('click', () => {
    
    nextSlide()
    showSlide()
    
})

prev.addEventListener('click', () => {
    prevSlide()
    showSlide()
})