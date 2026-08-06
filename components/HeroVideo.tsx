"use client";

import { useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  }

  return <>
    <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
      <source src="/approved-assets/cosmopolitan-manhattan-hero.mp4" type="video/mp4" />
    </video>
    <button className="hero-motion-toggle" type="button" onClick={togglePlayback} aria-pressed={isPaused}>
      {isPaused ? "Play background video" : "Pause background video"}
    </button>
  </>;
}
