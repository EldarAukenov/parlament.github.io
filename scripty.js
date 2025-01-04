// Список видео
const videos = [
    'videos/video1.mp4',
    'videos/video2.mp4',
    'videos/video3.mp4',
    'videos/video4.mp4',
    'videos/video5.mp4',
    'videos/video1.mp4',
    'videos/video2.mp4',
    'videos/video3.mp4',
    'videos/video4.mp4',
];

// Заполнение сетки с видео
document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.querySelector('.video-grid');

    videos.forEach(videoUrl => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');

        const videoElement = document.createElement('video');
        videoElement.src = videoUrl;
        videoElement.controls = true; // Управление воспроизведением
        videoElement.poster = 'images/placeholder.jpg'; // Постер для видео

        videoItem.appendChild(videoElement);
        videoGrid.appendChild(videoItem);
    });

    // Добавляем анимацию при загрузке
    const container = document.getElementById('page-container');
    container.classList.add('page-transition');
});

// Переход на предыдущую страницу с анимацией
document.getElementById('backBtn').addEventListener('click', function() {
    const container = document.getElementById('page-container');
    container.style.animation = 'pageFlipOut 0.9s linear';  // Применяем анимацию ухода страницы

    container.addEventListener('animationend', function () {
        window.history.back();  // Переход на предыдущую страницу после анимации
    });
});
