import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioService {
  private audioContext: AudioContext | null = null;
  private currentAudio?: HTMLAudioElement;

  playBubbleSound() {
    if (typeof window !== 'undefined') {
      try {
        if (!this.audioContext) {
          this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        }

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(
          1200,
          this.audioContext.currentTime + 0.15
        );

        gainNode.gain.setValueAtTime(1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          this.audioContext.currentTime + 0.1
        );

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.1);
      } catch (err) {
        console.error(err);
      }
    }
  }

  

playNarration(audioFile: string) {
  if (typeof window === 'undefined') {
    return;
  }

  if (this.currentAudio) {
    this.currentAudio.pause();
    this.currentAudio.currentTime = 0;
  }

  this.currentAudio = new Audio(audioFile);
  this.currentAudio.volume = 1;

  this.currentAudio.play()
    .catch(err => console.error(err));
}

stopNarration() {
  if (this.currentAudio) {
    this.currentAudio.pause();
    this.currentAudio.currentTime = 0;
  }
}
}