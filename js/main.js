$(function () {
    $('.slider__box').slick()

    $('.menu-btn').on('click', function () {
        $('.menu__list').toggleClass('active')
    })
})