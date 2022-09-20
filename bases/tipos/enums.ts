(() => {
  enum AudioLevel {
    min = 1,
    medium = 5,
    max = 10,
  }

  let currentAudio: AudioLevel = 6;
  console.log(currentAudio);
  console.log(AudioLevel);
})();
