let audioTrack = null
  
  let audioTrackName = "nooo"
  //audioTrack.load("./Sansara_Adare_Athma_Liyanage_Sarigama_lk.mp3");
  //* load audio
  const loadAudio = (trak,wavEl) => {
    /*if (audioTrack.isPlaying()) {
      playBtn.classList.add("playing");
      audioTrack.stop()
    }*/
    var track = trak
        audioTrackName = track
        document.getElementById(wavEl).innerHTML = ""
        audioTrack = WaveSurfer.create({
            container: `#${wavEl}`,
            waveColor: "#aaa",
            progressColor: "#001aff",
            barWidth: 2,
          });
        audioTrack.load("./Upload/"+track);
  }
  
  const playBtn = document.querySelector(".play-btn");
  const stopBtn = document.querySelector(".stop-btn");
  const muteBtn = document.querySelector(".mute-btn");
  const volumeSlider = document.querySelector(".volume-slider");
  
  const playSong = (audioFile) => {
    audioTrack.playPause()
  
    if (audioTrack.isPlaying()) {
      playBtn.classList.add("playing");
    } else {
      playBtn.classList.remove("playing");
    }

  }

  
  stopBtn.addEventListener("click", () => {
    audioTrack.stop();
    playBtn.classList.remove("playing");
  });
  
  volumeSlider.addEventListener("mouseup", () => {
    changeVolume(volumeSlider.value);
  });
  
  const changeVolume = (volume) => {
    if (volume == 0) {
      muteBtn.classList.add("muted");
    } else {
      muteBtn.classList.remove("muted");
    }
  
    audioTrack.setVolume(volume);
  };
  
  muteBtn.addEventListener("click", () => {
    if (muteBtn.classList.contains("muted")) {
      muteBtn.classList.remove("muted");
      audioTrack.setVolume(0.5);
      volumeSlider.value = 0.5;
    } else {
      audioTrack.setVolume(0);
      muteBtn.classList.add("muted");
      volumeSlider.value = 0;
    }
  })
//open player
const audioOpen = (name,path) => {
  var musicPlayer = document.getElementsByClassName("audio-box-active")
  //musicPlayer.style.display = "flex"
  //musicPlayer.style.scale = "1"
  musicPlayer[0].classList.add("audio-box-deactive")
  document.getElementById("music-name").innerHTML = name
  document.getElementsByClassName("audio-playing-notification")[0].style.display = "none"
  loadAudio(path,'audio_00002')
}
//* close
const audioClose = () => {
  var musicPlayer = document.getElementsByClassName("audio-box-active")
  //musicPlayer.style.display = "none"
  musicPlayer[0].classList.remove("audio-box-deactive")
  document.getElementsByClassName("audio-playing-notification")[0].style.display = "none"
  stopBtn.click()
}
//* minimize
const audioMinimize = () => {
  var musicPlayer = document.getElementsByClassName("audio-box-active")
  //musicPlayer.style.display = "none"
  musicPlayer[0].classList.remove("audio-box-deactive")
  document.getElementsByClassName("audio-playing-notification")[0].style.display = "flex"
  //stopBtn.click()
}
//* maximize
const audioMaximize = () => {
  var musicPlayer = document.getElementsByClassName("audio-box-active")
  //musicPlayer.style.display = "none"
  musicPlayer[0].classList.add("audio-box-deactive")
  document.getElementsByClassName("audio-playing-notification")[0].style.display = "none"
  //stopBtn.click()
}