/* Quotations */
const quotationsList = [{quot: "It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.", name: "Vincent Van Gogh"},
{quot:"I dream my painting and I paint my dream.", name: "Vincent Van Gogh"},
{quot:"Be clearly aware of the stars and infinity on high. Then life seems almost enchanted after all.", name: "Vincent Van Gogh"},
{quot:"...and then, I have nature and art and poetry, and if that is not enough, what is enough?", name: "Vincent Van Gogh"},
{quot:"There is nothing more truly artistic than to love people.", name: "Vincent Van Gogh"},
{quot:"Normality is a paved road: It’s comfortable to walk, but no flowers grow on it.", name: "Vincent Van Gogh"},
{quot:"If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced.", name: "Vincent Van Gogh"},
{quot:"I try more and more to be myself, caring relatively little whether people approve or disapprove.", name: "Vincent Van Gogh"},
{quot:"Everything you can imagine is real.", name: "Pablo Picasso"},
{quot:"Every child is an artist. The problem is how to remain an artist once he grows up.", name: "Pablo Picasso"},
{quot:"Art washes away from the soul the dust of everyday life.", name: "Pablo Picasso"},
{quot:"Others have seen what is and asked why. I have seen what could be and asked why not.", name: "Pablo Picasso"},
{quot:"Painting is just another way of keeping a diary.", name: "Pablo Picasso"},
{quot:"If I paint a wild horse, you might not see the horse... but surely you will see the wildness!", name: "Pablo Picasso"},
{quot:"I am always doing that which I can not do, in order that I may learn how to do it.", name: "Pablo Picasso"},
{quot:"A true artist is not one who is inspired, but one who inspires others.", name: "Salvador Dali"},
{quot:"I am not strange. I am just not normal.", name: "Salvador Dali"},
{quot:"The thermometer of success is merely the jealousy of the malcontents.", name: "Salvador Dali"},
{quot:"What is important is to spread confusion, not eliminate it.", name: "Salvador Dali"},
{quot:"Surrealism is destructive, but it destroys only what it considers to be shackles limiting our vision.", name: "Salvador Dali"},
{quot:"One day it will have to be officially admitted that what we have christened reality is an even greater illusion than the world of dreams.", name: "Salvador Dali"},
{quot:"Everything alters me, but nothing changes me.", name: "Salvador Dali"}]

let quotationRandom;
function randNum() {
    quotationRandom = Math.round(Math.random()*21);
}

setInterval(function() {
    randNum();
    document.getElementById("quotationParagraph").innerHTML = quotationsList[quotationRandom].quot;
    document.getElementById("quotationArtist").innerHTML = quotationsList[quotationRandom].name;
}, 2000);

// home slider
let circles = document.querySelectorAll(".circle");
circles.forEach(circle => {
    circle.addEventListener('click', function () {
        if(!(circle.classList.contains('active'))) {
            circle.classList.add('active');
            let dataId = circle.getAttribute("dataId");
            changeCircles(this, dataId);
        }
  })    
});

let dataCount = 0;

window.onload = function() {
    slider();
};

setInterval(slider, 4000);

function slider() {
    dataCount += 1;
    if(dataCount == 1) {
        document.getElementById("artistImg").src = '../img/artist1.png';
        document.getElementById("artistName").style.color = 'var(--orange)';
        document.getElementById("artistName").style.textShadow = '0 0 2px var(--orange), 0 0 10px var(--orange)';
        document.getElementById("artistName").innerHTML = 'Vincent van Gogh';
        for(i=0; i<circles.length; i++) {
            circles[i].style.backgroundColor = 'var(--orange)';
        }
    }
    if(dataCount == 2) {
        document.getElementById("artistImg").src = '../img/artist2.png';
        document.getElementById("artistName").style.color = '#33C4FF';
        document.getElementById("artistName").style.textShadow = '0 0 2px #33C4FF, 0 0 10px #33C4FF';
        document.getElementById("artistName").innerHTML = 'Pablo Picasso';
        for(i=0; i<circles.length; i++) {
            circles[i].style.backgroundColor = '#33C4FF';
        }
    }
    if(dataCount == 3) {
        dataCount = 0;
        document.getElementById("artistImg").src = '../img/artist3.png';
        document.getElementById("artistName").style.color = 'white';
        document.getElementById("artistName").style.textShadow = '0 0 2px #33C4FF, 0 0 10px #white';
        document.getElementById("artistName").innerHTML = 'Salvador Dalí';
        for(i=0; i<circles.length; i++) {
            circles[i].style.backgroundColor = 'white';
        }
    }   
}

function changeCircles(circle) {
    let dataId = circle.getAttribute('data-id');
    if(dataId == 1) {
        document.getElementById("artistImg").src = '../img/artist1.png';
        document.getElementById("artistName").style.color = 'var(--orange)';
        document.getElementById("artistName").style.textShadow = '0 0 2px var(--orange), 0 0 10px var(--orange)';
        document.getElementById("artistName").innerHTML = 'Vincent van Gogh';
        for(i=0; i<circles.length; i++) {
            circles[i].style.backgroundColor = 'var(--orange)';
        }
    }
    if(dataId == 2) {
        document.getElementById("artistImg").src = '../img/artist2.png';
        document.getElementById("artistName").style.color = '#33C4FF';
        document.getElementById("artistName").style.textShadow = '0 0 2px #33C4FF, 0 0 10px #33C4FF';
        document.getElementById("artistName").innerHTML = 'Pablo Picasso';
        for(i=0; i<circles.length; i++) {
            circles[i].style.backgroundColor = '#33C4FF';
        }
    }
    if(dataId == 3) {
        document.getElementById("artistImg").src = '../img/artist3.png';
        document.getElementById("artistName").style.color = 'white';
        document.getElementById("artistName").style.textShadow = '0 0 2px #33C4FF, 0 0 10px #white';
        document.getElementById("artistName").innerHTML = 'Salvador Dalí';
        for(i=0; i<circles.length; i++) {
            circles[i].style.backgroundColor = 'white';
        }
    }   
}

// header scroll
window.addEventListener('scroll', function() {
    document.getElementById("header").classList.toggle("headerSticky", window.scrollY > 0);  
});

// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

AOS.init();


