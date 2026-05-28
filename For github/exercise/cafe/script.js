function reserve() {

    const name =
    document.getElementById('guestName').value;

    const count =
    document.getElementById('guestCount').value;

    const result =
    document.getElementById('guestResult');

    if(name === '' || count === ''){

        result.textContent =
        'Please enter your name and guest count.';

        result.style.color = 'red';

        return;

    }

    result.textContent =
    `✓ Thank you ${name}! Your reservation for ${count} guest(s) has been confirmed.`;

    result.style.color = '#ffb133';

}



function pickRecommend(){

    const drinks = [

        '☕ Cappuccino',
        '🍓 Berry Smoothie',
        '🍵 Matcha Latte',
        '🥤 Iced Coffee',
        '🧋 Caramel Latte'

    ];

    const randomDrink =
    drinks[Math.floor(Math.random() * drinks.length)];

    const recommend =
    document.getElementById('recommendResult');

    recommend.textContent =
    `Today's recommendation: ${randomDrink}`;

}

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {

    nav.classList.toggle('active');

    if(nav.classList.contains('active')){
        menuBtn.innerHTML = '✖';
    }else{
        menuBtn.innerHTML = '☰';
    }

});


const contactForm =
document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {

    e.preventDefault();

    alert(
        'Thank you! Your message has been sent successfully.'
    );

    contactForm.reset();

});

const sections =
document.querySelectorAll('section');

window.addEventListener('scroll', () => {

    sections.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.classList.add('show');
        }

    });

});

const menuBtn =
document.querySelector('.menu-btn');

const nav =
document.querySelector('nav');

menuBtn.addEventListener('click', () => {

    nav.classList.toggle('active');

});

const themeToggle =
document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {

    document.body.classList.toggle('light-mode');

});

window.addEventListener('load', () => {

    document.getElementById('loader')
    .style.display = 'none';

});

const reviews =
document.querySelectorAll('.review');

let currentReview = 0;

setInterval(() => {

    reviews[currentReview]
    .classList.remove('active');

    currentReview =
    (currentReview + 1) % reviews.length;

    reviews[currentReview]
    .classList.add('active');

},3000);
function addToCart(item){

    alert(item + ' added to cart ✓');

}