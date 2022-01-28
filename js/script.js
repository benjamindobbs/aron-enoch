/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  let track_index = 0;
  let isPlaying = false;
  let updateTimer;
 // Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
  
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
  
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let track_lyrics = document.querySelector(".trackLyrics");
let track_bio = document.querySelector(".bio");
let track_feature = document.getElementById("feature");

// Create the audio element for the player
let curr_track = document.createElement('audio');
// Define the list of tracks that have to be played
let track_list = [
  {
    name: "will you remember me? (feat. fishdinner)",
    artist: "DJ Re:Code",
    image: "Image URL",
    path: "assets/mp3/01.mp3",
    lyrics: "these are lyrics I swear",
    featPath:  "assets/chars/Maya_Asset.png",
    bio: "A wizard of audio engineering, Maya is a longtime friend of Riri and a staple in her community as a mysterious master of sound. Blurring vocals into synths and creating complex soundscapes is her forte, and no one can come close. Riri and others wonder if she truly is magic, a question Maya finds a way to dodge time and time again…",
  },
  {
    name: "out of my head (feat. tracey brakes)",
    artist: "DJ Re:Code",
    image: "Image URL",
    path: "assets/mp3/02.mp3",
    featPath: "assets/chars/Tracey_Asset.png",
    bio: "Twitter celebrity and Los Angeles socialite, Tracey is one of Riri’s best friends and collaborators. She struts her stuff across the web and is known far and wide for her incredible beatcraft and sample packs, community organizing, and just being an all around babe. Riri has fond memories eating hot wings and getting plastered with her bestie and when the two are together all hell breaks loose - the two are a powerhouse when together and everyone around them wonders why they live across the country from one another.",
  },
  {
    name: "keeper (feat. goji! & BIO)",
    artist: "DJ Re:Code",
    image: "Image URL",
    path: "assets/mp3/03.mp3",
    featPath: "assets/chars/Bio_Asset.png",
    bio: " An enigma, a genius, a cat - Bio is everywhere. A sound design legend and maestro behind the scenes, Bio’s samples and sound design are a staple in the community and are a driving force behind Riri’s sound. The cat tends to lurk as a shadowy producer behind incredible projects without having much to say, but their influence is felt throughout the entire scene. Riri sometimes wonders how Bio got so orange, a question Bio answers with “Hi Bio” and scurries off at lightspeed, leaving many to wonder what is Bio’s true feelings.",
    bioTwo:"   No one has swag quite like Goji. A fashion icon and a lyrical craftsman, Goji brings their style and flair into every project they touch and Riri often envy's their precision. Riri met Goji through Tracey and after working together in her cramped apartment they became fast friends, spending time together in LA and relating about both having grown up in the frigid east coast.",
   
  },
  {
    name: "adhd (feat. tobre)",
    artist: "DJ Re:Code",
    image: "Image URL",
    path: "assets/mp3/04.mp3",
    featPath: "assets/chars/Tobre_Asset.png",
    bio: " One of Riri’s best and trusted friends, Londonite Isaac is a pop icon and lyrical and production genius. Co-founding Rock Angelz and having worked together on the classic pop anthem “Love Connect,” Isaac and Riri are an inseparable duo and are happy to be reunited again on ReCodePop! Riri, possessed by Isaac’s classic “ILYL,” unable to stop singing its infectious chorus, dm’d Isaac out of obsessive fervor desperate to work together, and ever since the two hit it off and have been in a bestie trio with the legendary Ryl0 and other pop icons. Isaac is a master of camp, and his connections to the drag community and the trans community in England show his devotion to queer craft. Riri has been dying to fly to London to spend some time with her bestie, but things just keep getting in the way.",
  },
  {
    name: "surrender (feat. dynastic)",
    artist: "DJ Re:Code",
    image: "Image URL",
    path: "assets/mp3/05.mp3",
    featPath: "assets/chars/Dyna_Asset.png",
    bio: "Punkstar, rockstar, hyperpop star - no matter what you want to call Bee their skill is unmatched in all arenas. A member of I’m Letting Unseen Forces Take the Wheel and an incredible artist in their own right, Bee met Riri through her hunt to find someone to scream on a track at the last minute, only to discover the two work powerfully in tandem and have since become fast friends. Twitter comedian and a hilarious presence to be around, Riri admires Bee’s work ethic and style and wishes the two worked more, and plan to write guitar work together in the near future (Riri secretly hoping some of Bee’s amazing guitar skills will rub off on her.)",
  },
  {
    name: "treasure box (feat. iris day)",
    artist: "DJ Re:Code",
    image: "Image URL",
    path: "assets/mp3/06.mp3",
    featPath: "assets/chars/Iris_Asset.png",
    bio: "In truth, Riri doesn’t know much about Melancholia, besides that she’s a South African lyrical prodigy and emo genius. Serious and to the point, Riri has immense respect for Mela and her influence in the scene is immense, and Riri is looking forward to a trip to see both her and their longtime mutual friend Boxkitty.",
  },
  {
    name: "threads [azure sky]",
    artist: "DJ Re:Code",
    image: "Image URL",
    path: "assets/mp3/07.mp3",
    featPath: "assets/chars/Recode2_Asset.png"
  },
  {
    name: "45 (feat. mothgirl)",
    artist: "DJ Re:Code",
    image: "Image URL",
    path: "assets/mp3/08.mp3",
    featPath: "assets/chars/Astra_Asset 2.png",
    bio:"Despite having known Astra for well under a year's span, Astra and Riri have become besties and have worked both through the web and together in person. The immensely tall and stunning moth woman never ceases to surprise Riri with her talents and can seemingly write captivating music in almost any genre, and the two are regularly chatting on the timeline and shooting the shit together in text. Riri wishes Tracey could come visit so the three could party together, as all three of their energies would likely gel into a hilarious blend of internet nonsense and fun. Riri has immense respect for Astra’s unflinching seriousness when it comes to internet drama and feels grounded by her presence.",
  },
  {
    name: "near",
    artist: "DJ Re:Code",
    image: "Image URL",
    path: "assets/mp3/09.mp3",
    featPath: "assets/chars/Recode2_Asset.png",
  },
  {
    name: "out of my head [pt. 2] (feat. 65finally)",
    artist: "DJ Re:Code",
    image: "Image URL",
    path: "assets/mp3/10.mp3",
    featPath: "assets/chars/Judas._Asset.png",
    bio: "One of the funniest people Riri knows, Judas’s dark humor and bewildering internet presence can trick one into thinking they must be an abstract experimental musician, but Judas has a golden voice and their harmonies alone can make Riri cry. Ever since listening to Judas sing a breathtaking rendition of a Ween’s “What's Deaner Talking About,” Riri has been possessed to work with the mysterious artist and is happy to have finally have their velvet melodies on one of her songs.",
  },
];
function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();
  
  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();
  
  // Update details of the track
  // track_art.style.backgroundImage = 
  //    "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  // track_artist.textContent = track_list[track_index].artist;
  track_lyrics.textContent = track_list[track_index].lyrics;
  track_bio.textContent = track_list[track_index].bio;
  track_feature.src= track_list[track_index].featPath;
  
  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);
  
  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);
  
  // Apply a random background color
  // random_bg_color();
}
  
// function random_bg_color() {
//   // Get a random number between 64 to 256
//   // (for getting lighter colors)
//   let red = Math.floor(Math.random() * 256) + 64;
//   let green = Math.floor(Math.random() * 256) + 64;
//   let blue = Math.floor(Math.random() * 256) + 64;
  
//   // Construct a color withe the given values
//   let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  
//   // Set the background to the new color
//   document.body.style.background = bgColor;
// }
  
// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}
  
function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;
  
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
  
function pauseTrack() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;
  
  // Replace icon with the play icon
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
  
function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}
  
function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length - 1;
    
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}
function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider 
  // and get the relative duration to the track
  
  seekto = curr_track.duration * (seek_slider.value / 100);
  
  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}
  
function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}
  
function seekUpdate() {
  let seekPosition = 0;
  
  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
  
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
  
    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
  
    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
loadTrack(track_index);