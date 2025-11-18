// Простая навигация
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        // Скрыть всё
        document.querySelectorAll('.page-section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Показать нужное
        const target = document.getElementById(targetId);
        if (target) {
            target.style.display = 'block';
        }
    });
});

// Показать главную при загрузке
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home').style.display = 'block';
});

// Мобильное меню
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
