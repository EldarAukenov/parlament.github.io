// Анимация появления для всех секций
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) { // Срабатывание анимации на 100px выше видимой области
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Проверка видимости при загрузке
});
document.addEventListener("DOMContentLoaded", function() {
    const buttonContainers = document.querySelectorAll('.anchor-button-container');

    buttonContainers.forEach(container => {
        const button = container.querySelector('.anchor-button');
        const content = container.querySelector('.anchor-text');

        button.addEventListener('click', function() {
            // Закрыть все контенты, но не трогать кнопки
            const isActive = container.classList.contains('active');

            if (!isActive) {
                // Закрываем все другие контенты и удаляем класс "active" с других кнопок
                const allContainers = document.querySelectorAll('.anchor-button-container');
                allContainers.forEach(c => {
                    if (c !== container) {  // Не трогаем текущий контейнер
                        c.classList.remove('active');
                        const contentToClose = c.querySelector('.anchor-text');
                        contentToClose.style.maxHeight = '0';
                    }
                });
            }

            // Переключаем класс "active" для текущего контейнера
            container.classList.toggle('active');

            // Управляем maxHeight для отображения/скрытия контента
            if (container.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0";
            }
        });
    });
});
// Получаем все кнопки с классом video-toggle-button
const buttons = document.querySelectorAll('.video-toggle-button, .toggle-video-button');

// Добавляем обработчик событий для каждой кнопки
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Получаем id секции с видео
        const targetId = this.getAttribute('data-target');
        const videoSection = document.querySelector(targetId);

        // Переключаем видимость видео с плавным раскрытием/сворачиванием
        if (videoSection.style.maxHeight) {
            // Если видео открыто, скрываем
            videoSection.style.maxHeight = null;
        } else {
            // Если видео закрыто, открываем
            videoSection.style.maxHeight = videoSection.scrollHeight + "px";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newsItem = this.parentElement;
            const newsContent = newsItem.querySelector('.news-content');

            // Переключение класса "active" у контейнера
            newsItem.classList.toggle('active');

            // Если контейнер активен, задаем max-height для контента и увеличиваем его размер, иначе убираем
            if (newsItem.classList.contains('active')) {
                newsContent.style.maxHeight = newsContent.scrollHeight + "px";
                newsItem.style.transform = "scale(1.1)"; // Увеличение контейнера
            } else {
                newsContent.style.maxHeight = null;
                newsItem.style.transform = "scale(1)"; // Возвращаем к исходному размеру
            }
        });
    });
});

