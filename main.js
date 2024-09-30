const playButton = document.querySelector(".fa-play")
const forwardButton = document.querySelector(".fa-forward")
const backwardButton = document.querySelector(".fa-backward")
const songTitle = document.querySelector("h2")
const artistName = document.querySelector("h4")
const albumCover = document.querySelector("img")
const meter = document.querySelector("meter")



// Track list with song details 

const trackList = [
    {
        title: "Calma #1",
        artist: "Pedro Capó, Farruko",
        src: "./songs/calma.mp3",
        cover: "./images/calma.jpg"
    },
    {
        title: "The Hills #2",
        artist: "The Weekend",
        src: "./songs/hills.mp3",
        cover: "./images/hills.jpeg"
    },
    {
        title: "Lazy Song #3",
        artist: "Bruno Mars",
        src: "./songs/lazy-song.mp3",
        cover: "./images/lazysong.jpg"
    }
];


let currentIndex = 0;
let isPlaying = false; 



//Creating the audio object
const audio = new Audio(trackList[currentIndex].src);



//Function to update the album cover when changing songs
function updateCover() {
    songTitle.textContent = trackList[currentIndex].title;
    artistName.textContent = trackList[currentIndex].artist;
    albumCover.src = trackList[currentIndex].cover;
    meter.value = 0;
}


//Play or pause song
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playButton.classList.replace("fa-pause", "fa-play");
    } else {
        audio.play();
        playButton.classList.replace("fa-play", "fa-pause");
    }
    isPlaying = !isPlaying;
}


//Play next track 
function playNext() {
    currentIndex = (currentIndex + 1) % trackList.length;
    audio.src = trackList[currentIndex].src;
    audio.play()
    updateCover();
    isPlaying = true; 
    playButton.classList.replace("fa-play", "fa-pause");
}


//Play previous track 
function playPrevious() {
    currentIndex = (currentIndex - 1 + trackList.length) % trackList.length;
    audio.src = trackList[currentIndex].src;
    audio.play();
    updateCover();
    isPlaying = true; 
    playButton.classList.replace("fa-play", "fa-pause");

}


//Updating the progress bar based on song's current time
audio.addEventListener("timeupdate", () => {
    meter.value = (audio.currentTime / audio.duration) * 10;
});


playButton.addEventListener("click", togglePlay);
forwardButton.addEventListener("click", playNext);
backwardButton.addEventListener("click", playPrevious);

updateCover();