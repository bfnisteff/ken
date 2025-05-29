// Romantic Website JavaScript - Complete Functionality
// ===================================================

// Global Variables
let kissCount = 0;
let smileCount = 0;
let currentNoteIndex = 0;
let quizScore = 0;
let timelineAnimating = false;
let backgroundMusicPlaying = false;

// Love messages arrays
const loveMessages = [
    "You are the reason I believe in love at first sight and love that lasts forever.",
    "In your eyes, I found my home. In your heart, I found my love.",
    "Every love story is beautiful, but ours is my favorite.",
    "You're not just my partner, you're my best friend and greatest adventure.",
    "With you, every day feels like a fairytale come true.",
    "You make every ordinary moment extraordinary.",
    "My heart beats in rhythm with yours, creating the most beautiful melody.",
    "You're the answer to every prayer I never knew I was praying.",
    "In a world full of temporary things, you are my constant.",
    "You're not just the love of my life, you're my life itself."
];

const randomLoveNotes = [
    "You make my heart skip a beat! 💓",
    "Thinking of you always brings a smile to my face 😊",
    "You're my favorite notification 📱💕",
    "Distance means nothing when you mean everything 🌍❤️",
    "You're the missing piece I never knew I needed 🧩💖",
    "Every sunrise is more beautiful because of you 🌅💕",
    "You're my favorite hello and hardest goodbye 👋❤️",
    "With you, I'm home no matter where we are 🏠💝",
    "You turn my world into a fairytale ✨👑",
    "My love for you is beyond words, beyond time, beyond everything 💫❤️"
];

const footerMessages = [
    "Every moment with you is a treasure ✨",
    "You make ordinary days extraordinary 🌟",
    "My love for you grows stronger every day 💪❤️",
    "You're my sunshine on cloudy days ☀️",
    "Forever grateful for your love 🙏💕",
    "You're the best part of every day 🌈",
    "In your arms, I've found my paradise 🏝️💕",
    "You're my always and forever ♾️❤️"
];

const loveNotes = [
    {
        date: "Today",
        content: "You make every ordinary moment extraordinary ✨",
        time: "Just now"
    },
    {
        date: "Yesterday", 
        content: "Thank you for being my constant source of happiness 💖",
        time: "Yesterday"
    },
    {
        date: "This Week",
        content: "Your love is my favorite adventure 🌟",
        time: "3 days ago"
    },
    {
        date: "Last Week",
        content: "Every day with you feels like a dream come true 💫",
        time: "1 week ago"
    },
    {
        date: "This Month",
        content: "You're the reason I believe in forever 💕",
        time: "2 weeks ago"
    }
];

const quizQuestions = [
    {
        question: "What's my favorite color?",
        options: ["Blue", "Red", "Green", "Purple"],
        correct: 0
    },
    {
        question: "What's my favorite food?",
        options: ["Pizza", "Pasta", "Sushi", "Tacos"],
        correct: 1
    },
    {
        question: "What's my biggest fear?",
        options: ["Heights", "Spiders", "Losing you", "Dark"],
        correct: 2
    },
    {
        question: "What's my dream destination?",
        options: ["Paris", "Tokyo", "Bali", "Anywhere with you"],
        correct: 3
    },
    {
        question: "What's my favorite thing about you?",
        options: ["Your smile", "Your laugh", "Your heart", "Everything"],
        correct: 3
    }
];

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Main initialization function
function initializeWebsite() {
    updateTime();
    setCreationDate();
    initializeModal();
    initializeNavigation();
    initializePhotoGallery();
    initializeLoveNotes();
    initializeMusic();
    initializeAnimations();
    initializeCounters();
    initializeTimelineControls();
    
    // Start periodic updates
    setInterval(updateTime, 1000);
    setInterval(createParticle, 3000);
    setInterval(updateLoveCounter, 60000); // Update every minute
    
    // Create initial particles
    for (let i = 0; i < 5; i++) {
        setTimeout(createParticle, i * 1000);
    }
    
    console.log('💕 Romantic website initialized with love!');
}

// Time and Date Functions
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = now.toLocaleString();
    }
}

function setCreationDate() {
    const creationDateElement = document.getElementById('creationDate');
    if (creationDateElement) {
        creationDateElement.textContent = new Date().toLocaleDateString();
    }
}

// Modal Functions
function initializeModal() {
    const modal = document.getElementById('secretModal');
    const secretBtn = document.getElementById('secretBtn');
    const closeBtn = document.querySelector('.close');
    const unlockBtn = document.getElementById('unlockBtn');

    if (secretBtn) {
        secretBtn.onclick = () => {
            modal.style.display = 'block';
            addFloatingHearts();
        };
    }

    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = 'none';
    }

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };

    if (unlockBtn) {
        unlockBtn.onclick = unlockSecretMessage;
    }

    // Allow Enter key to unlock
    const anniversaryInput = document.getElementById('anniversaryInput');
    if (anniversaryInput) {
        anniversaryInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                unlockSecretMessage();
            }
        });
    }
}

function unlockSecretMessage() {
    const input = document.getElementById('anniversaryInput').value;
    const secretMessage = document.getElementById('secretMessage');
    const errorMessage = document.getElementById('errorMessage');
    const unlockTime = document.getElementById('unlockTime');
    
    // You can change this date to your actual anniversary
    const ANNIVERSARY_DATE = '2025-05-25'; // Format: YYYY-MM-DD
    
    if (input === ANNIVERSARY_DATE) {
        secretMessage.style.display = 'block';
        unlockTime.textContent = new Date().toLocaleString();
        errorMessage.textContent = '';
        
        // Add celebration effect
        createCelebrationEffect();
        playUnlockSound();
    } else {
        errorMessage.textContent = 'That\'s not our special date, try again! 💕';
        errorMessage.style.display = 'block';
        
        // Shake effect for wrong answer
        const inputGroup = document.querySelector('.input-group');
        if (inputGroup) {
            inputGroup.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                inputGroup.style.animation = '';
            }, 500);
        }
    }
}

// Navigation Functions
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active navigation
                updateActiveNavigation(this.getAttribute('href'));
            }
        });
    });

    // Update navigation on scroll
    window.addEventListener('scroll', throttle(updateNavigationOnScroll, 100));
}

function updateActiveNavigation(targetId) {
    document.querySelectorAll('.love-nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`a[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function updateNavigationOnScroll() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            updateActiveNavigation(`#${sectionId}`);
        }
    });
}

// Photo Gallery Functions
function initializePhotoGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const viewButtons = document.querySelectorAll('.view-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterPhotos(this.dataset.filter);
            
            // Update active filter button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const photoCard = this.closest('.photo-placeholder');
            viewPhotoMemory(photoCard);
        });
    });
}

function filterPhotos(filter) {
    const photos = document.querySelectorAll('.photo-placeholder');
    
    photos.forEach(photo => {
        const category = photo.dataset.category;
        
        if (filter === 'all' || category === filter) {
            photo.style.display = 'block';
            photo.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
            photo.style.display = 'none';
        }
    });
}

function viewPhotoMemory(photoCard) {
    const title = photoCard.querySelector('h4').textContent;
    const description = photoCard.querySelector('p').textContent;
    
    // Create a simple modal for photo viewing
    const photoModal = createPhotoModal(title, description);
    document.body.appendChild(photoModal);
    
    setTimeout(() => {
        photoModal.style.opacity = '1';
    }, 10);
}

function createPhotoModal(title, description) {
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.innerHTML = `
        <div class="photo-modal-content">
            <span class="photo-close">&times;</span>
            <h3>${title}</h3>
            <div class="photo-placeholder-large">
                📸 Photo will be here
            </div>
            <p>${description}</p>
            <div class="photo-actions">
                <button onclick="addToFavorites('${title}')">💖 Add to Favorites</button>
                <button onclick="shareMemory('${title}')">📤 Share Memory</button>
            </div>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const closeBtn = modal.querySelector('.photo-close');
    closeBtn.addEventListener('click', () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        }
    });
    
    return modal;
}

// Love Notes Functions
function initializeLoveNotes() {
    const prevBtn = document.getElementById('prevNoteBtn');
    const nextBtn = document.getElementById('nextNoteBtn');
    const addBtn = document.getElementById('addNoteBtn');

    if (prevBtn) prevBtn.addEventListener('click', () => changeNote(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeNote(1));
    if (addBtn) addBtn.addEventListener('click', addNewLoveNote);

    displayCurrentNote();
}

function changeNote(direction) {
    currentNoteIndex += direction;
    
    if (currentNoteIndex >= loveNotes.length) {
        currentNoteIndex = 0;
    } else if (currentNoteIndex < 0) {
        currentNoteIndex = loveNotes.length - 1;
    }
    
    displayCurrentNote();
}

function displayCurrentNote() {
    const noteCards = document.querySelectorAll('.note-card');
    
    noteCards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentNoteIndex) {
            card.classList.add('active');
            card.querySelector('.note-date').textContent = loveNotes[currentNoteIndex].date;
            card.querySelector('.note-content').textContent = loveNotes[currentNoteIndex].content;
        }
    });
}

function addNewLoveNote() {
    const noteText = prompt('Write a love note for your beloved:');
    
    if (noteText && noteText.trim()) {
        const newNote = {
            date: 'Just now',
            content: noteText.trim() + ' 💕',
            time: new Date().toLocaleString()
        };
        
        loveNotes.unshift(newNote);
        currentNoteIndex = 0;
        displayCurrentNote();
        
        showNotification('Love note added! 💌');
    }
}

// Music Functions
function initializeMusic() {
    const playMusicBtn = document.getElementById('playMusicBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const createPlaylistBtn = document.getElementById('createPlaylistBtn');
    const playButtons = document.querySelectorAll('.play-btn');

    if (playMusicBtn) {
        playMusicBtn.addEventListener('click', toggleBackgroundMusic);
    }

    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', shufflePlaylist);
    }

    if (createPlaylistBtn) {
        createPlaylistBtn.addEventListener('click', addNewSong);
    }

    playButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const songItem = this.closest('.song-item');
            playSong(songItem);
        });
    });
}

function toggleBackgroundMusic() {
    const musicBtn = document.getElementById('playMusicBtn');
    const audio = document.getElementById('backgroundMusic');
    
    if (backgroundMusicPlaying) {
        audio && audio.pause();
        musicBtn.textContent = '🎵 Play Our Song';
        backgroundMusicPlaying = false;
    } else {
        // Since we don't have actual audio files, we'll simulate
        musicBtn.textContent = '⏸️ Pause Our Song';
        backgroundMusicPlaying = true;
        showNotification('🎵 Playing our favorite love song...');
        
        // Simulate song ending after 3 minutes
        setTimeout(() => {
            if (backgroundMusicPlaying) {
                musicBtn.textContent = '🎵 Play Our Song';
                backgroundMusicPlaying = false;
                showNotification('🎵 Song ended. Play again?');
            }
        }, 180000);
    }
}

function playSong(songItem) {
    const title = songItem.querySelector('.song-title').textContent;
    const artist = songItem.querySelector('.song-artist').textContent;
    const playBtn = songItem.querySelector('.play-btn');
    
    // Reset all other play buttons
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.textContent = '▶️';
    });
    
    playBtn.textContent = '⏸️';
    showNotification(`🎵 Now playing: ${title} by ${artist}`);
    
    // Simulate song playing
    setTimeout(() => {
        playBtn.textContent = '▶️';
        showNotification('🎵 Song ended');
    }, 30000); // 30 seconds for demo
}

function shufflePlaylist() {
    showNotification('🔀 Playlist shuffled! Random love songs coming up...');
    
    // Visual shuffle effect
    const songItems = document.querySelectorAll('.song-item');
    songItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 100);
        }, index * 100);
    });
}

function addNewSong() {
    const songTitle = prompt('Enter song title:');
    if (!songTitle) return;
    
    const artist = prompt('Enter artist name:');
    if (!artist) return;
    
    const playlistContainer = document.querySelector('.playlist-container');
    const newSongItem = document.createElement('div');
    newSongItem.className = 'song-item';
    newSongItem.innerHTML = `
        <div class="song-info">
            <div class="song-title">${songTitle}</div>
            <div class="song-artist">${artist}</div>
        </div>
        <button class="play-btn">▶️</button>
    `;
    
    playlistContainer.appendChild(newSongItem);
    
    // Add event listener to new play button
    newSongItem.querySelector('.play-btn').addEventListener('click', function() {
        playSong(newSongItem);
    });
    
    showNotification(`🎵 Added "${songTitle}" to our playlist!`);
}

// Interactive Games Functions
function sendKiss() {
    kissCount++;
    const kissCounterElement = document.getElementById('kissCounter');
    const kissScoreElement = document.getElementById('kissScore');
    
    if (kissCounterElement) kissCounterElement.textContent = kissCount;
    if (kissScoreElement) kissScoreElement.textContent = kissCount;
    
    // Create floating kiss animation
    createFloatingKiss();
    
    // Update smile count occasionally
    if (kissCount % 5 === 0) {
        smileCount++;
        const smileCounterElement = document.getElementById('smileCounter');
        if (smileCounterElement) smileCounterElement.textContent = smileCount;
    }
    
    // Special messages at milestones
    if (kissCount === 10) {
        showNotification('💋 10 kisses! You\'re making me blush!');
    } else if (kissCount === 50) {
        showNotification('💋 50 kisses! I\'m floating on cloud nine!');
    } else if (kissCount === 100) {
        showNotification('💋 100 kisses! You\'re absolutely amazing!');
        createCelebrationEffect();
    }
}

function createFloatingKiss() {
    const kiss = document.createElement('div');
    kiss.textContent = '💋';
    kiss.style.cssText = `
        position: fixed;
        left: ${Math.random() * (window.innerWidth - 50)}px;
        top: 70%;
        font-size: 24px;
        z-index: 1000;
        pointer-events: none;
        animation: floatUp 2s ease-out forwards;
    `;
    
    document.body.appendChild(kiss);
    setTimeout(() => kiss.remove(), 2000);
}

function generateLoveMessage() {
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    const loveTextElement = document.getElementById('mainLoveText');
    
    if (loveTextElement) {
        // Fade out effect
        loveTextElement.style.opacity = '0.5';
        
        setTimeout(() => {
            loveTextElement.textContent = randomMessage;
            loveTextElement.style.opacity = '1';
        }, 300);
    }
    
    showNotification('💝 New love message generated!');
}

function randomLoveMessage() {
    const randomMsg = randomLoveNotes[Math.floor(Math.random() * randomLoveNotes.length)];
    const messageElement = document.getElementById('randomMessage');
    
    if (messageElement) {
        messageElement.textContent = randomMsg;
        messageElement.style.display = 'block';
        messageElement.style.animation = 'fadeIn 0.5s ease-in-out';
    }
}

function startQuiz() {
    if (quizQuestions.length === 0) {
        showNotification('Quiz questions not loaded yet!');
        return;
    }
    
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
        if (currentQuestion >= quizQuestions.length) {
            // Quiz completed
            quizScore = Math.max(quizScore, score);
            const quizScoreElement = document.getElementById('quizScore');
            if (quizScoreElement) {
                quizScoreElement.textContent = quizScore;
            }
            
            let message = '';
            if (score === quizQuestions.length) {
                message = `🎉 Perfect score! You know me so well! ${score}/${quizQuestions.length}`;
                createCelebrationEffect();
            } else if (score >= quizQuestions.length * 0.8) {
                message = `💕 Great job! You know me pretty well! ${score}/${quizQuestions.length}`;
            } else {
                message = `😊 Not bad! We should spend more time together! ${score}/${quizQuestions.length}`;
            }
            
            showNotification(message);
            return;
        }
        
        const question = quizQuestions[currentQuestion];
        const options = question.options.map((option, index) => 
            `<button onclick="answerQuestion(${index}, ${question.correct})">${option}</button>`
        ).join('');
        
        const quizModal = document.createElement('div');
        quizModal.className = 'quiz-modal';
        quizModal.innerHTML = `
            <div class="quiz-content">
                <h3>Love Quiz - Question ${currentQuestion + 1}/${quizQuestions.length}</h3>
                <p>${question.question}</p>
                <div class="quiz-options">
                    ${options}
                </div>
                <div class="quiz-score">Score: ${score}/${currentQuestion}</div>
            </div>
        `;
        
        quizModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;
        
        document.body.appendChild(quizModal);
        
        // Store references for the answer function
        window.currentQuizModal = quizModal;
        window.currentQuizQuestion = currentQuestion;
        window.currentQuizScore = score;
    }
    
    // Define answer function globally
    window.answerQuestion = function(selectedIndex, correctIndex) {
        if (selectedIndex === correctIndex) {
            score++;
            showNotification('✅ Correct!');
        } else {
            showNotification('❌ Wrong answer, but I still love you!');
        }
        
        currentQuestion++;
        window.currentQuizModal.remove();
        
        setTimeout(() => {
            showQuestion();
        }, 1000);
    };
    
    showQuestion();
}

// Timeline Functions
function initializeTimelineControls() {
    const playBtn = document.getElementById('timelinePlayBtn');
    const resetBtn = document.getElementById('timelineResetBtn');
    
    if (playBtn) {
        playBtn.addEventListener('click', playTimeline);
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', resetTimeline);
    }
}

function playTimeline() {
    if (timelineAnimating) return;
    
    timelineAnimating = true;
    const playBtn = document.getElementById('timelinePlayBtn');
    if (playBtn) {
        playBtn.textContent = '⏸️ Playing...';
        playBtn.disabled = true;
    }
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0.3';
            item.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1.05)';
                item.style.background = 'linear-gradient(45deg, #ff9a9e, #fecfef)';
                
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                    item.style.background = '';
                }, 500);
                
                if (index === timelineItems.length - 1) {
                    setTimeout(() => {
                        timelineAnimating = false;
                        if (playBtn) {
                            playBtn.textContent = '▶️ Play Our Story';
                            playBtn.disabled = false;
                        }
                        showNotification('💕 Our beautiful love story!');
                    }, 1000);
                }
            }, 200);
        }, index * 1000);
    });
}

function resetTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
        item.style.background = '';
    });
    
    timelineAnimating = false;
    const playBtn = document.getElementById('timelinePlayBtn');
    if (playBtn) {
        playBtn.textContent = '▶️ Play Our Story';
        playBtn.disabled = false;
    }
    
    showNotification('🔄 Timeline reset!');
}

// Animation and Visual Effects Functions
function initializeAnimations() {
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) scale(1.5);
                opacity: 0;
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes celebration {
            0% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.2) rotate(180deg); }
            100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes heartBeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
        }
    `;
    document.head.appendChild(style);
}

function createParticle() {
    const particles = ['💕', '💖', '💝', '✨', '🌟', '💫', '🦋', '🌸', '💐'];
    const bgAnimation = document.querySelector('.bg-animation');
    
    if (!bgAnimation) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = particles[Math.floor(Math.random() * particles.length)];
    particle.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        font-size: ${Math.random() * 10 + 15}px;
        opacity: ${Math.random() * 0.5 + 0.3};
        animation: floatUp ${Math.random() * 10 + 10}s linear forwards;
        pointer-events: none;
    `;
    
    bgAnimation.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 20000);
}

function createCelebrationEffect() {
    const colors = ['💕', '💖', '💝', '🎉', '✨', '🌟', '💫'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: -10px;
                font-size: 24px;
                z-index: 10000;
                pointer-events: none;
                animation: floatUp 3s ease-out forwards;
            `;
            
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 100);
    }
}

function addFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '💕';
            heart.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: 100%;
                font-size: 20px;
                z-index: 9999;
                pointer-events: none;
                animation: floatUp 4s ease-out forwards;
            `;
            
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 200);
    }
}

// Counter Functions
function initializeCounters() {
    updateLoveCounter();
    updateFooterStats();
}

function updateLoveCounter() {
    // Calculate days since a specific date (you can change this)
    const startDate = new Date('2023-01-15'); // Change to your actual start date
    const currentDate = new Date();
    const daysDifference = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    
    const loveCounterElement = document.getElementById('loveCounter');
    if (loveCounterElement) {
        loveCounterElement.textContent = daysDifference;
    }
    
    // Update other counters
    const totalMoments = daysDifference * 24; // Approximate moments per day
    const memoriesShared = Math.floor(daysDifference / 7) * 3; // 3 memories per week
    const laughsShared = daysDifference * 5; // 5 laughs per day
    
    const momentsElement = document.getElementById('momentsCounter');
    const memoriesElement = document.getElementById('memoriesCounter');
    const laughsElement = document.getElementById('laughsCounter');
    
    if (momentsElement) momentsElement.textContent = totalMoments;
    if (memoriesElement) memoriesElement.textContent = memoriesShared;
    if (laughsElement) laughsElement.textContent = laughsShared;
}

function updateFooterStats() {
    const footerStatsElement = document.getElementById('footerStats');
    if (footerStatsElement) {
        const randomMessage = footerMessages[Math.floor(Math.random() * footerMessages.length)];
        footerStatsElement.textContent = randomMessage;
    }
    
    // Update footer message every 30 seconds
    setTimeout(updateFooterStats, 30000);
}

// Utility Functions
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'love-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff9a9e, #fecfef);
        color: white;
        padding: 15px 20px;
        border-radius: 25px;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 4px 15px rgba(255, 154, 158, 0.4);
        z-index: 10001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

function playUnlockSound() {
    // Create a simple audio feedback using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
        console.log('Audio not supported, but love is still playing! 💕');
    }
}

// Photo Gallery Action Functions
function addToFavorites(photoTitle) {
    showNotification(`💖 Added "${photoTitle}" to favorites!`);
    
    // Store in memory (since we can't use localStorage)
    if (!window.favoritePhotos) {
        window.favoritePhotos = [];
    }
    
    if (!window.favoritePhotos.includes(photoTitle)) {
        window.favoritePhotos.push(photoTitle);
        showNotification(`💖 "${photoTitle}" is now a favorite memory!`);
    } else {
        showNotification(`💕 "${photoTitle}" is already in your favorites!`);
    }
}

function shareMemory(photoTitle) {
    if (navigator.share) {
        navigator.share({
            title: 'Our Beautiful Memory',
            text: `Check out this amazing memory: ${photoTitle}`,
            url: window.location.href
        }).then(() => {
            showNotification('📤 Memory shared with love!');
        }).catch(() => {
            fallbackShare(photoTitle);
        });
    } else {
        fallbackShare(photoTitle);
    }
}

function fallbackShare(photoTitle) {
    const shareText = `Check out this amazing memory: ${photoTitle} - ${window.location.href}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('📋 Memory link copied to clipboard!');
        }).catch(() => {
            showNotification('💕 Share this beautiful memory with someone special!');
        });
    } else {
        showNotification('💕 Share this beautiful memory with someone special!');
    }
}

// Additional Interactive Functions
function createLovePoem() {
    const poemLines = [
        "In your eyes, I see my future bright,",
        "Every day with you feels just right.",
        "Your smile lights up my darkest day,",
        "In your arms, I want to stay.",
        "Together we'll write our love's sweet song,",
        "Forever and always, where we belong."
    ];
    
    const poem = poemLines.join('\n');
    const poemModal = document.createElement('div');
    poemModal.className = 'poem-modal';
    poemModal.innerHTML = `
        <div class="poem-content">
            <span class="poem-close">&times;</span>
            <h3>💝 A Love Poem For You</h3>
            <div class="poem-text">
                ${poem.split('\n').map(line => `<p>${line}</p>`).join('')}
            </div>
            <div class="poem-actions">
                <button onclick="sharePoem()">📤 Share Poem</button>
                <button onclick="savePoem()">💾 Save Poem</button>
            </div>
        </div>
    `;
    
    poemModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(poemModal);
    
    setTimeout(() => {
        poemModal.style.opacity = '1';
    }, 10);
    
    const closeBtn = poemModal.querySelector('.poem-close');
    closeBtn.addEventListener('click', () => {
        poemModal.style.opacity = '0';
        setTimeout(() => poemModal.remove(), 300);
    });
    
    poemModal.addEventListener('click', (e) => {
        if (e.target === poemModal) {
            poemModal.style.opacity = '0';
            setTimeout(() => poemModal.remove(), 300);
        }
    });
    
    showNotification('💝 Created a special poem just for you!');
}

function sharePoem() {
    const poemText = `
In your eyes, I see my future bright,
Every day with you feels just right.
Your smile lights up my darkest day,
In your arms, I want to stay.
Together we'll write our love's sweet song,
Forever and always, where we belong.

💕 Created with love`;
    
    if (navigator.share) {
        navigator.share({
            title: 'A Love Poem',
            text: poemText
        }).then(() => {
            showNotification('📤 Poem shared with love!');
        }).catch(() => {
            fallbackSharePoem(poemText);
        });
    } else {
        fallbackSharePoem(poemText);
    }
}

function fallbackSharePoem(poemText) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(poemText).then(() => {
            showNotification('📋 Poem copied to clipboard!');
        }).catch(() => {
            showNotification('💕 Share this beautiful poem with someone special!');
        });
    } else {
        showNotification('💕 Share this beautiful poem with someone special!');
    }
}

function savePoem() {
    showNotification('💾 Poem saved to your heart forever! 💕');
}

// Weather and Mood Functions
function checkLoveWeather() {
    const loveWeatherConditions = [
        "💕 Perfect weather for cuddling!",
        "☀️ Sunny with a chance of kisses!",
        "🌈 Rainbow skies, just like our love!",
        "⭐ Starry night perfect for romance!",
        "🌸 Spring feelings in the air!",
        "❄️ Cozy winter vibes for two!",
        "🌙 Moonlit evening for sweet dreams!",
        "🦋 Butterflies everywhere, just like in my stomach!"
    ];
    
    const randomWeather = loveWeatherConditions[Math.floor(Math.random() * loveWeatherConditions.length)];
    const weatherElement = document.getElementById('loveWeather');
    
    if (weatherElement) {
        weatherElement.textContent = randomWeather;
        weatherElement.style.animation = 'fadeIn 0.5s ease-in-out';
    }
    
    showNotification('🌤️ Love weather updated!');
}

function moodRing() {
    const moods = [
        { mood: "Absolutely Smitten", color: "#ff69b4", emoji: "😍" },
        { mood: "Over the Moon", color: "#87ceeb", emoji: "🌙" },
        { mood: "Floating on Air", color: "#dda0dd", emoji: "☁️" },
        { mood: "Bursting with Joy", color: "#ffd700", emoji: "✨" },
        { mood: "Warm and Fuzzy", color: "#f0e68c", emoji: "🧸" },
        { mood: "Butterflies Dancing", color: "#98fb98", emoji: "🦋" },
        { mood: "Heart Full of Love", color: "#ffb6c1", emoji: "💖" },
        { mood: "Dreaming of You", color: "#e6e6fa", emoji: "💭" }
    ];
    
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    const moodElement = document.getElementById('currentMood');
    
    if (moodElement) {
        moodElement.innerHTML = `${randomMood.emoji} ${randomMood.mood}`;
        moodElement.style.color = randomMood.color;
        moodElement.style.animation = 'heartBeat 1s ease-in-out';
        
        setTimeout(() => {
            moodElement.style.animation = '';
        }, 1000);
    }
    
    showNotification(`${randomMood.emoji} Current mood: ${randomMood.mood}!`);
}

// Memory Lane Functions
function addMemory() {
    const memoryTitle = prompt('What\'s the title of this memory?');
    if (!memoryTitle) return;
    
    const memoryDescription = prompt('Tell me about this beautiful memory:');
    if (!memoryDescription) return;
    
    const memoryDate = prompt('When did this happen? (optional)') || 'A special day';
    
    // Store in memory
    if (!window.customMemories) {
        window.customMemories = [];
    }
    
    const newMemory = {
        title: memoryTitle,
        description: memoryDescription,
        date: memoryDate,
        timestamp: new Date().toISOString()
    };
    
    window.customMemories.push(newMemory);
    
    // Add to timeline if element exists
    const timeline = document.querySelector('.timeline-container');
    if (timeline) {
        const memoryItem = document.createElement('div');
        memoryItem.className = 'timeline-item custom-memory';
        memoryItem.innerHTML = `
            <div class="timeline-content">
                <h4>${memoryTitle}</h4>
                <p>${memoryDescription}</p>
                <span class="timeline-date">${memoryDate}</span>
            </div>
        `;
        timeline.appendChild(memoryItem);
    }
    
    showNotification(`💝 Added "${memoryTitle}" to our memory lane!`);
    createCelebrationEffect();
}

// Initialize additional features when called
function initializeAdvancedFeatures() {
    // Add event listeners for advanced features
    const poemBtn = document.getElementById('createPoemBtn');
    const weatherBtn = document.getElementById('loveWeatherBtn');
    const moodBtn = document.getElementById('moodRingBtn');
    const memoryBtn = document.getElementById('addMemoryBtn');
    
    if (poemBtn) poemBtn.addEventListener('click', createLovePoem);
    if (weatherBtn) weatherBtn.addEventListener('click', checkLoveWeather);
    if (moodBtn) moodBtn.addEventListener('click', moodRing);
    if (memoryBtn) memoryBtn.addEventListener('click', addMemory);
    
    // Auto-update love weather every 10 minutes
    setInterval(checkLoveWeather, 600000);
    
    // Auto-update mood ring every 5 minutes
    setInterval(moodRing, 300000);
}

// Call advanced features initialization
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeAdvancedFeatures, 1000);
});

// Special occasion checker
function checkSpecialOccasions() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // JavaScript months are 0-indexed
    
    let specialMessage = '';
    
    // Valentine's Day
    if (month === 2 && day === 14) {
        specialMessage = "💝 Happy Valentine's Day, my love! Today and every day, you're my valentine.";
    }
    // New Year's Day
    else if (month === 1 && day === 1) {
        specialMessage = "🎊 Happy New Year! Here's to another year of beautiful memories together!";
    }
    // Christmas
    else if (month === 12 && day === 25) {
        specialMessage = "🎄 Merry Christmas! You're the best gift I could ever ask for.";
    }
    // Generic special days
    else if (day === 1) {
        specialMessage = "✨ New month, same love! Every day with you is special.";
    }
    else if (today.getDay() === 5) { // Friday
        specialMessage = "🎉 Happy Friday! Weekend plans with you are the best plans.";
    }
    else if (today.getDay() === 0) { // Sunday
        specialMessage = "☀️ Lazy Sunday vibes with my favorite person!";
    }
    
    if (specialMessage) {
        setTimeout(() => {
            showNotification(specialMessage);
        }, 3000);
    }
}

// Run special occasion check on load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(checkSpecialOccasions, 2000);
});

// Console Easter Egg
console.log(`
💕 Welcome to the most romantic website ever created! 💕

   ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥
   
This website was built with love, care, and lots of emojis!

Features include:
- Interactive love counters
- Secret message unlocking
- Love quiz games  
- Photo memory galleries
- Romantic music playlists
- Love note collections
- Timeline animations
- And so much more!

Every click, every interaction, every moment spent here
is a celebration of love. 

Made with 💖 by someone who believes in forever.

   ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥
`);

// Export functions for external use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sendKiss,
        generateLoveMessage,
        startQuiz,
        createLovePoem,
        checkLoveWeather,
        moodRing,
        addMemory,
        playTimeline,
        resetTimeline
    };
}