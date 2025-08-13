document.addEventListener('DOMContentLoaded', function() {
    // Current Date Display
    const currentDate = new Date();
    document.getElementById('currentDate').textContent = currentDate.toDateString();

    // Love Meter
    const loveMeter = document.getElementById('loveMeter');
    const boostLoveBtn = document.getElementById('boostLove');
    let loveLevel = 100;

    boostLoveBtn.addEventListener('click', function() {
        loveLevel = Math.min(100, loveLevel + Math.floor(Math.random() * 10) + 5);
        loveMeter.style.width = loveLevel + '%';
        loveMeter.textContent = loveLevel + '%';
        createHearts(10);
        playSound('pop');
    });

    // Love Notes
    const loveNotes = [
        "i love you prashi more than all the stars in the sky",
        "i love you prashi like the ocean loves the shore - endlessly",
        "i love you prashi more than yesterday but less than tomorrow",
        "i love you prashi like flowers love spring  blooming just for you",
        "i love you prashi like time loves eternity  without end",
        "i love you prashi like the moon loves the night silently and completely",
        "i love you prashi like fire loves oxygen - needing you to exist",
        "i love you prashi like the heart loves its beat impossible to live without",
        "i love you prashi like dreams love sleep  coming alive when you close your eyes",
        "i love you prashi like the earth loves the sun  revolving around you"
    ];

    const randomNoteBtn = document.getElementById('randomNote');
    const noteDisplay = document.getElementById('noteDisplay');

    randomNoteBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * loveNotes.length);
        noteDisplay.textContent = loveNotes[randomIndex];
        createHearts(5);
        playSound('ding');
    });

    // Memory Game
    const gameBoard = document.getElementById('gameBoard');
    const movesDisplay = document.getElementById('moves');
    const timerDisplay = document.getElementById('timer');
    const restartBtn = document.getElementById('restartGame');

    const emojis = ['💖', '🌸', '🌈', '🎀', '🍭', '🧁', '🎁', '🦄'];
    let cards = [...emojis, ...emojis];
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let moves = 0;
    let matches = 0;
    let timer;
    let seconds = 0;
    let isPlaying = false;

    function shuffleCards() {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    function createBoard() {
        shuffleCards();
        gameBoard.innerHTML = '';
        moves = 0;
        matches = 0;
        seconds = 0;
        movesDisplay.textContent = 'Moves: 0';
        timerDisplay.textContent = 'Time: 0s';
        clearInterval(timer);
        isPlaying = false;

        cards.forEach((emoji, index) => {
            const card = document.createElement('div');
            card.classList.add('game-card');
            card.dataset.index = index;
            card.dataset.emoji = emoji;
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        if (!isPlaying) {
            startTimer();
            isPlaying = true;
        }

        this.classList.add('flipped');
        this.textContent = this.dataset.emoji;

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;
        moves++;
        movesDisplay.textContent = `Moves: ${moves}`;

        if (isMatch) {
            disableCards();
            matches++;
            if (matches === emojis.length) {
                clearInterval(timer);
                setTimeout(() => {
                    alert(`You won in ${moves} moves and ${seconds} seconds!`);
                }, 500);
            }
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        playSound('match');
        createHearts(3);
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            timerDisplay.textContent = `Time: ${seconds}s`;
        }, 1000);
    }

    restartBtn.addEventListener('click', createBoard);

    // Photo Gallery
    const addPhotoBtn = document.getElementById('addPhoto');
    const galleryContainer = document.querySelector('.gallery-container');
    const colors = ['#ffb6c1', '#ffc0cb', '#ff69b4', '#ff1493', '#db7093', '#ffa07a'];

    addPhotoBtn.addEventListener('click', function() {
        const newPhoto = document.createElement('div');
        newPhoto.classList.add('gallery-item');
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        newPhoto.style.backgroundColor = randomColor;
        newPhoto.innerHTML = '<i class="fas fa-heart"></i>';
        galleryContainer.appendChild(newPhoto);
        playSound('click');
        createHearts(3);
    });

    // Music Player
    const playBtn = document.getElementById('playBtn');
    const nextBtn = document.getElementById('nextBtn');
    const songTitle = document.getElementById('songTitle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlayingMusic = false;

    const songs = [
        { title: "Our Love Song", src: "assets/music.mp3" }
        // Add more songs as needed
    ];

    let currentSong = 0;

    playBtn.addEventListener('click', function() {
        if (isPlayingMusic) {
            bgMusic.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            bgMusic.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlayingMusic = !isPlayingMusic;
    });

    nextBtn.addEventListener('click', function() {
        currentSong = (currentSong + 1) % songs.length;
        bgMusic.src = songs[currentSong].src;
        songTitle.textContent = songs[currentSong].title;
        if (isPlayingMusic) {
            bgMusic.play();
        }
    });

    // Countdown Timer
    function updateCountdown() {
        // Set your anniversary date here (YYYY, MM-1, DD)
        const anniversaryDate = new Date(currentDate.getFullYear(), 11, 25); // December 25th
        if (currentDate > anniversaryDate) {
            anniversaryDate.setFullYear(anniversaryDate.getFullYear() + 1);
        }

        const diff = anniversaryDate - currentDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Floating Hearts
    function createHearts(count) {
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.width = (Math.random() * 20 + 10) + 'px';
            heart.style.height = heart.style.width;
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.querySelector('.floating-hearts').appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }

    // Sound Effects
    function playSound(type) {
        if (type === 'pop') {
            const pop = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3');
            pop.play();
        } else if (type === 'ding') {
            const ding = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magic-notification-463.mp3');
            ding.play();
        } else if (type === 'click') {
            const click = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3');
            click.play();
        } else if (type === 'match') {
            const match = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3');
            match.play();
        }
    }

    // Initialize
    createBoard();
    setInterval(() => createHearts(1), 3000);
});
