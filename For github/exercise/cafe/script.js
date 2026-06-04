const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const themeToggle = document.getElementById('themeToggle');
const reservationForm = document.getElementById('reservationForm');
const recommendBtn = document.getElementById('recommendBtn');
const contactForm = document.querySelector('.contact-form');
const guestResult = document.getElementById('guestResult');
const recommendResult = document.getElementById('recommendResult');
const cartCount = document.getElementById('cartCount');
const cursor = document.querySelector('.cursor');
const hero = document.querySelector('.hero');
const menuButtons = document.querySelectorAll('.menu-item button[data-item]');
const viewMenuBtn = document.getElementById('viewMenuBtn');
const bookTableBtn = document.getElementById('bookTableBtn');
const statsCounter = document.getElementById('customers');
const statsSection = document.getElementById('reviews');
const sections = document.querySelectorAll('section');
const reviews = document.querySelectorAll('.review');
const text = 'Fresh Coffee & Sweet Moments';

let cartTotal = 0;
let typeIndex = 0;
let currentReview = 0;
let statsAnimated = false;

function updateCartCounter() {
    cartCount.textContent = cartTotal;
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('visible'));

    setTimeout(() => toast.classList.remove('visible'), 2200);
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
}

function addToCart(item) {
    cartTotal += 1;
    updateCartCounter();
    showToast(`${item} added to cart ✓`);
}

function reserve(name, count) {
    if (!name || !count) {
        guestResult.textContent = 'Please enter your name and guest count.';
        guestResult.style.color = 'tomato';
        return;
    }

    guestResult.textContent = `✓ Thanks ${name}! Your reservation for ${count} guest(s) is confirmed.`;
    guestResult.style.color = '#ffb133';
}

function pickRecommend() {
    const drinks = [
        '☕ Cappuccino',
        '🍓 Berry Smoothie',
        '🍵 Matcha Latte',
        '🥤 Iced Coffee',
        '🧋 Caramel Latte'
    ];

    const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
    recommendResult.textContent = `Today's recommendation: ${randomDrink}`;
}

function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function typeWriter() {
    const typing = document.getElementById('typing');

    if (typeIndex === 0) {
        typing.textContent = '';
    }

    if (typeIndex < text.length) {
        typing.textContent += text.charAt(typeIndex);
        typeIndex += 1;
        setTimeout(typeWriter, 80);
    }
}

function moveCursor(event) {
    if (!cursor) return;
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-pressed', String(isLight));
}

function setupIntersectionObserver() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
}

function animateCount(element, target, duration = 2000) {
    const startTime = performance.now();
    const startValue = 0;

    const update = now => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        element.textContent = Math.floor(progress * (target - startValue) + startValue).toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    requestAnimationFrame(update);
}

function setupStatsCounter() {
    if (!statsCounter || !statsSection) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                animateCount(statsCounter, Number(statsCounter.dataset.target || 5000), 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    observer.observe(statsSection);
}

function setupReviewRotation() {
    if (!reviews.length) return;

    setInterval(() => {
        reviews[currentReview].classList.remove('active');
        currentReview = (currentReview + 1) % reviews.length;
        reviews[currentReview].classList.add('active');
    }, 4000);
}

function setupEvents() {
    menuBtn.addEventListener('click', () => {
        const expanded = nav.classList.toggle('active');
        menuBtn.textContent = expanded ? '✖' : '☰';
        menuBtn.setAttribute('aria-expanded', String(expanded));
    });

    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('active')));
    themeToggle.addEventListener('click', toggleTheme);

    if (reservationForm) {
        reservationForm.addEventListener('submit', event => {
            event.preventDefault();
            reserve(reservationForm.guestName.value.trim(), reservationForm.guestCount.value.trim());
        });
    }

    if (recommendBtn) {
        recommendBtn.addEventListener('click', pickRecommend);
    }

    if (viewMenuBtn) {
        viewMenuBtn.addEventListener('click', scrollToMenu);
    }

    if (bookTableBtn) {
        bookTableBtn.addEventListener('click', () => document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' }));
    }

    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        showToast('Thank you! Your message has been sent successfully.');
        contactForm.reset();
    });

    menuButtons.forEach(button => {
        button.addEventListener('click', () => addToCart(button.dataset.item));
    });

    window.addEventListener('scroll', () => {
        if (hero) {
            hero.style.backgroundPositionY = `${window.scrollY * 0.35}px`;
        }
    });

    window.addEventListener('mousemove', moveCursor);
}

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
});

updateCartCounter();
typeWriter();
setupIntersectionObserver();
setupReviewRotation();
setupStatsCounter();
setupEvents();
