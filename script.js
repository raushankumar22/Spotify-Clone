const playPauseButton = document.querySelector('.play-pause');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const seekInput = document.querySelector('#seek');

let currentSong = 0;
let songs = [
    { title: 'Song 1', artist: 'Artist 1', duration: 300 },
    { title: 'Song 2', artist: 'Artist 2', duration: 240 },
    // Add more songs here
];

playPauseButton.addEventListener('click', () => {
    if (playPauseButton.textContent === 'Play') {
        playPauseButton.textContent = 'Pause';
        // Start playing the current song
    } else {
        playPauseButton.textContent = 'Play';
        // Pause the current song
    }
});

nextButton.addEventListener('click', () => {
    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    // Update the now playing section with the new song
});

previousButton.addEventListener('click', () => {
    currentSong--;