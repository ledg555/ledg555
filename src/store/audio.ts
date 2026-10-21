import { create } from "zustand";
import raindropOgg from "../assets/sounds/raindrop.ogg";

interface AudioStore {
  isSoundActive: boolean;
  toggleSound: () => void;
  playSfx: (type: "click" | "toggle" | "alert" | "chirp") => void;
}

// Procedural Web Audio API sound generator for snappy, low-latency tactile clicks
let audioCtx: AudioContext | null = null;
let bgMusic: HTMLAudioElement | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function getBgMusic(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!bgMusic) {
    bgMusic = new Audio(raindropOgg);
    bgMusic.loop = true;
    bgMusic.volume = 1;
  }
  return bgMusic;
}

export const useAudioStore = create<AudioStore>((set, get) => ({
  isSoundActive: false,

  toggleSound: () => {
    const nextState = !get().isSoundActive;
    const music = getBgMusic();

    if (nextState) {
      // User gesture - resume AudioContext
      const ctx = getAudioContext();
      if (ctx && ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }

      if (music) {
        music.currentTime = 0;
        music.play().catch((err) => {
          console.warn("Audio playback prevented:", err);
        });
      }
      // Play activation chirp
      get().playSfx("chirp");
    } else {
      if (music) {
        music.pause();
      }
    }

    set({ isSoundActive: nextState });
  },

  playSfx: (type: "click" | "toggle" | "alert" | "chirp") => {
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const masterGain = ctx.createGain();
      masterGain.connect(ctx.destination);

      if (type === "click") {
        // Crisp tactile sci-fi relay switch click
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.035);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.035);
      } else if (type === "toggle") {
        // Dual-tone mechanical engagement click
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.05);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === "alert") {
        // Red alert emergency alarm tone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.linearRampToValueAtTime(880, now + 0.08);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.09);
      } else if (type === "chirp") {
        // High-tech comms handshake chirp
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();

        osc1.type = "sine";
        osc1.frequency.setValueAtTime(1400, now);
        osc1.frequency.setValueAtTime(2100, now + 0.04);

        gain1.gain.setValueAtTime(0.2, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc1.connect(gain1);
        gain1.connect(masterGain);

        osc1.start(now);
        osc1.stop(now + 0.08);
      }
    } catch {
      // AudioContext failed silently if in unsupported environment
    }
  },
}));
