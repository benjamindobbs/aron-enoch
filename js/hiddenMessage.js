let messages = ["../assets/ghostMessages/message1.mp3","../assets/ghostMessages/message2.mp3","../assets/ghostMessages/message3.mp3","../assets/ghostMessages/message4.mp3","../assets/ghostMessages/message5.mp3","../assets/ghostMessages/message6.mp3","../assets/ghostMessages/message7.mp3"];
let curr_track = document.createElement('audio');
let isPlaying= false;
let playpause_btn = document.querySelector(".playpause-track");
function loadTrack(trackNumber){
    curr_track.src = messages[trackNumber];
    curr_track.autoplay = true;
    curr_track.load();
    curr_track.addEventListener('ended', function(){
        back()});
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
  function back(){
    history.back()
  }