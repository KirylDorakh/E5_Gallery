// <img src="images/dzen.png" alt="Письма мастера дзен" width="400"
//      height="341">>
images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg']

const footer = document.querySelector('.gallery')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const container = document.querySelector('.img')

// кнопка вперед
let nextImg = () => {

}

// кнопка назад
let prevImg = () => {

}


// вставка первой картинки в область просмотра
let putFirstImg = () => {
    const firstImg = document.querySelector('.footimg')

    container.innerHTML = `${firstImg.outerHTML}`
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
    putFirstImg();
})

