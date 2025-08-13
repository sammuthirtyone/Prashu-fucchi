document.addEventListener('DOMContentLoaded', function() {
    // Initialize all pages
    initHomePage();
    initLoveLettersPage();
    initMemoriesPage();
    initFunPage();
    initSongPage();
    
    // Create floating elements
    createFloatingElements();
    
    // Play background music
    initMusicPlayer();
});

function initHomePage() {
    if (!document.querySelector('.homepage')) return;
    
    // Daily messages
    const messages = [
        "You're the most beautiful person I know, inside and out",
        "My favorite part of every day is when I get to talk to you",
        "I fall in love with you more every single day",
        "Your smile brightens even my darkest days",
        "I'm so grateful to have you in my life",
        "You make my heart skip a beat every time I see you",
        "I love the way you [specific thing you love about them]",
        "Just thinking about you makes me happy",
        "I can't wait to make more memories with you",
        "You're my favorite notification"
    ];
    
    const messageDisplay = document.getElementById('daily-message-text');
    const newMessageBtn = document.getElementById('new-message-btn');
    
    function showRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageDisplay.textContent = messages[randomIndex];
        createHearts(3);
        animateElement(messageDisplay, 'pulse');
    }
    
    newMessageBtn.addEventListener('click', showRandomMessage);
    showRandomMessage();
}

function initLoveLettersPage() {
    if (!document.querySelector('.loveletters-page')) return;
    
    // Sample love letters data
    const loveLetters = [
        { id: 1, text: "My dearest Prashi, every moment with you feels like a dream come true...", category: "romantic", date: "2023-05-20" },
        { id: 2, text: "Hey cutie! Just wanted to say you're the most amazing girlfriend ever!", category: "sweet", date: "2023-06-14" },
        { id: 3, text: "To my love, remember that time we [shared memory]? That's when I knew...", category: "romantic", date: "2023-07-30" },
        { id: 4, text: "Prashi, you're weirder than me and that's why we're perfect together!", category: "funny", date: "2023-08-15" }
    ];
    
    // Implementation would continue...
}

function initMemoriesPage() {
    if (!document.querySelector('.memories-page')) return;
    
    // Initialize countdown timer
    function updateCountdown() {
        // Set your anniversary date
        const anniversaryDate = new Date(currentDate.getFullYear(), 11, 25); // December 25th
        if (currentDate > anniversaryDate) {
            anniversaryDate.setFullYear(anniversaryDate.getFullYear() + 1);
        }

        const diff = anniversaryDate - new Date();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
        document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Photo gallery implementation would continue...
}

function initFunPage() {
    if (!document.querySelector('.fun-page')) return;
    
    // Memory game implementation
    const memoryGame = {
        init: function() {
            // Game setup code
        },
        // Other game methods
    };
    
    // Love meter game
    const loveMeter = {
        init: function() {
            // Love meter setup
        },
        // Other methods
    };
    
    // Quiz game
    const quizGame = {
        questions: [
            {
                question: "What's my favorite thing about you?",
                options: ["Your smile", "Your kindness", "Your sense of humor", "Everything!"],
                answer: 3
            },
            // More questions...
        ],
        init: function() {
            // Quiz setup
        }
    };
    
    // Initialize games when their cards are clicked
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', function() {
            const game = this.dataset.game;
            // Hide all game containers
            document.querySelectorAll('.game-container').forEach(container => {
                container.classList.add('hidden');
            });
            
            // Show selected game
            document.getElementById(`${game}-game`).classList.remove('hidden');
            
            // Initialize game
            switch(game) {
                case 'memory':
                    memoryGame.init();
                    break;
                case 'love-meter':
                    loveMeter.init();
                    break;
                case 'quiz':
                    quizGame.init();
                    break;
            }
        });
    });
}

function initSongPage() {
    if (!document.querySelector('.song-page')) return;
    
    // Music player implementation
    const musicPlayer = {
        songs: [
            { title: "Our Song", artist: "Artist Name", src: "assets/music/our-song.mp3" },
            // More songs...
        ],
        currentSongIndex: 0,
        init: function() {
            // Player setup
        },
        // Other player methods
    };
    
    musicPlayer.init();
}

function createFloatingElements() {
    // Create floating hearts
    setInterval(() => {
        createHearts(1);
        createStars(1);
    }, 3000);
}

function createHearts(count) {
    const container = document.querySelector('.floating-hearts') || document.body;
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.width = (Math.random() * 30 + 20) + 'px';
        heart.style.height = heart.style.width;
        heart.style.animationDuration = (Math.random() * 4 + 3) + 's';
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}

function createStars(count) {
    const container = document.querySelector('.floating-stars') || document.body;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = '100vh';
        star.style.width = (Math.random() * 20 + 10) + 'px';
        star.style.height = star.style.width;
        star.style.animationDuration = (Math.random() * 5 + 4) + 's';
        container.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 9000);
    }
}

function animateElement(element, animation) {
    element.classList.add(animation);
    setTimeout(() => {
        element.classList.remove(animation);
    }, 1000);
}

function initMusicPlayer() {
    const bgMusic = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    
    // Try to play music on user interaction
    document.body.addEventListener('click', function initMusic() {
        bgMusic.volume = 0.3;
        bgMusic.play().then(() => {
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }).catch(e => {
            console.log("Auto-play prevented:", e);
        });
        document.body.removeEventListener('click', initMusic);
    }, { once: true });
    
    playBtn.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            bgMusic.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
}
