const audio = new Audio("/sound/click.mp3");

export const playClickSound = () => {
  audio.currentTime = 0; // Reset the audio to the beginning
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};
