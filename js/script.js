const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');
const pageSections = document.querySelectorAll('.page-section');

// Переключение мобильного меню
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Навигация между страницами
navLinksItems.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        // Скрыть все секции
        pageSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Показать целевую секцию
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Закрыть мобильное меню
        navLinks.classList.remove('active');
    });
});

// Обработка формы Google Forms
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // НЕ отменяем отправку - форма сама отправится в Google Forms
        
        // Показываем уведомление после отправки
        setTimeout(() => {
            alert('✅ Сообщение отправлено! Спасибо, мы свяжемся с тобой скоро!');
            contactForm.reset(); // Очищаем форму
        }, 1000);
    });
}

// Плавный скролл для хедера
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(138, 43, 226, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#8A2BE2';
        header.style.backdropFilter = 'none';
    }
});

// Анимации появления элементов
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Анимация для лягушки
const rainbowCard = document.querySelector('.rainbow-frog-card');
if (rainbowCard) {
    rainbowCard.addEventListener('mouseenter', function() {
        console.log('Лягушка-Путешественница активирована! 🐸');
    });
}

// Инициализация - показать главную страницу
document.getElementById('home').classList.add('active');
