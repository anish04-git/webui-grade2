function reserve() {

    const name =
        document.getElementById('guestName').value;

    const count =
        document.getElementById('guestCount').value;

    const result =
        document.getElementById('guestResult');

    if (name === '' || count === '') {

        result.textContent =
            'Please enter your name and guest count.';

        result.style.color = 'red';

        return;

    }

    result.textContent =
        `✓ Thank you ${name}! Your reservation for ${count} guest(s) has been confirmed.`;

    result.style.color = '#ffb133';

}



function pickRecommend() {

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
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.querySelector('.contact-form');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.innerHTML = nav.classList.contains('active') ? '✖' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('active'));
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}


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

        if (top < window.innerHeight - 100) {
            section.classList.add('show');
        }

    });

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

}, 3000);
function addToCart(item) {

    alert(item + ' added to cart ✓');

}

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

});

document.querySelectorAll('section').forEach(section => {

    section.classList.add('hidden');
    observer.observe(section);

});

const text = "Fresh Coffee & Sweet Moments";

let i = 0;

function typeWriter() {
    const typing = document.getElementById('typing');

    if (i === 0) {
        typing.textContent = '';
    }

    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

typeWriter();

let count = 0;

const interval = setInterval(() => {

    count += 10;

    document.getElementById("customers").textContent = count;

    if (count >= 5000) {

        clearInterval(interval);

    }

}, 20);

window.addEventListener('scroll', () => {

    const hero =
        document.querySelector('.hero');

    hero.style.backgroundPositionY =
        window.scrollY * 0.5 + 'px';

});

const cursor =
    document.querySelector('.cursor');

document.addEventListener('mousemove', e => {

    cursor.style.left = e.clientX + 'px';

    cursor.style.top = e.clientY + 'px';

});