const playerButton = document.querySelector('.audio-player');
const audio = document.querySelector('audio');  
const time = document.querySelector('.timer');  
const timeline = document.querySelector('.timeline');  

const toggleAudio = () => {
    playerButton.classList.toggle('playing');
    audio.paused ? audio.play() : audio.pause();
}
playerButton.addEventListener('click', toggleAudio);
audio.onended = () => playerButton.classList.remove('playing');


const calculateTime = (secs) => {
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${Math.floor(secs / 60)}:${returnedSeconds}`;
}

audio.addEventListener('timeupdate', () => {
    time.innerHTML = calculateTime(audio.duration - audio.currentTime);
    timeline.style.width = `${(100 * audio.currentTime) / audio.duration}%`
});