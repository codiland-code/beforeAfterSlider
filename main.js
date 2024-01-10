/* BEFORE AFTER SLIDER */

const divisor = document.querySelector('.divisor'),
        handle = document.querySelector('.handle'),
        slider = document.querySelector('#slider');

    function moveDivisor(){
        handle.style.left = slider.value+'%';
        divisor.style.width = slider.value+'%'
    }

    window.onload = function() {
        moveDivisor();
    };
