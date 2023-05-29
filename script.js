// <img src="images/dzen.png" alt="Письма мастера дзен" width="400"
//      height="341">>
images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg']

const footer = document.querySelector('.gallery')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const container = document.querySelector('.img')

let currentIndex = 0

// кнопка вперед
let nextImg = () => {
    if (currentIndex === images.length - 1) {
        putImg(0);
        currentIndex = 0;
    } else {
        putImg(currentIndex+1);
        currentIndex += 1
    }
}

// кнопка назад
let prevImg = () => {
    if (currentIndex === 0) {
        putImg(images.length - 1);
        currentIndex = images.length - 1
    } else {
        putImg(currentIndex-1);
        currentIndex -= 1
    }
}


// вставка первой картинки в область просмотра
let putImg = (index) => {
    container.innerHTML = `<img src="assets/${images[index]}" alt="picture">`
}

// заполнение галерии снизу картинками
let openGallery = images => {
    images.forEach(image => {
        let figure = document.createElement('figure')
        figure.classList.add('footimg')
        figure.innerHTML = `<img src="assets/${image}" alt="picture">`
        footer.insertAdjacentElement('beforeend', figure)
    })
}

// загрузка страницы
document.addEventListener('DOMContentLoaded', () => {
    openGallery(images);
    putImg(currentIndex);
})

next.addEventListener('click', () => {
    nextImg();
})

prev.addEventListener('click', () => {
    prevImg();
})

