document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const grid = document.getElementById('games-grid');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    let gameInterval = null;

    body.classList.add(localStorage.getItem('theme') || 'light-theme');

    themeToggleBtn.addEventListener('click', () => {
        const isLight = body.classList.contains('light-theme');
        const newTheme = isLight ? 'dark-theme' : 'light-theme';
        body.classList.replace(isLight ? 'light-theme' : 'dark-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    const gamesData = [
        { id: 1, title: "Tetris", category: "logic", desc: "Упорядочивайте блоки.", img: "3bc0dc4f773759c4d7391c28fbe28238.png"},
        { id: 2, title: "Minesweeper", category: "logic", desc: "Найдите все мины.", img: "сапёр.png" },
        { id: 3, title: "Snake", category: "arcade", desc: "Старая добрая змейка.", img: "Zmeyka-01.jpg" },
        { id: 4, title: "2048", category: "logic", desc: "Сложите числа.", img: "logo200.png" }
    ];

    function renderGames(filter = 'all') {
        grid.innerHTML = '';
        const filtered = filter === 'all' ? gamesData : gamesData.filter(g => g.category === filter);
        
        filtered.forEach(game => {
            const card = document.createElement('article');
            card.className = 'game-card';
            card.innerHTML = `
                <h3>${game.title}</h3>
                <img src="${game.img}" alt="${game.title}">
                <p>${game.desc}</p>
                <a href="SNAKE.html" class="play-now-button">ИГРАТЬ</a>
            `;
            grid.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGames(btn.dataset.category);
        });
    })
})