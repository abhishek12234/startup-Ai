import React, { useRef, useState, useEffect } from "react";


interface AudioVisualizerProps {
  audioElement: HTMLAudioElement | null;  // The audio element for visualization
  initialHeight: number[];  // Array representing the initial heights of the visualizer bars
  intensity: number;
  activeMobileVisual?: boolean | undefined;
  dotAnimation:any // The intensity of the visualization
}
const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ audioElement, initialHeight,intensity,activeMobileVisual,dotAnimation }) => {
  const [dotHeights, setDotHeights] = useState<number[]>(initialHeight);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animationFrameRef = useRef<number | null>(null);



  useEffect(() => {
    if (!audioElement) return;
    

    let audioContext: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let source: MediaElementAudioSourceNode | null = null;

    try {
      audioContext = new AudioContext();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;

      source = audioContext.createMediaElementSource(audioElement);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;

      const handleEnded = resetDotHeights;
      audioElement.addEventListener("ended", handleEnded);

      updateFrequencyData();

      return () => {
        audioElement.removeEventListener("ended", handleEnded);
        animationFrameRef.current && cancelAnimationFrame(animationFrameRef.current);
        analyser?.disconnect();
        source?.disconnect();
        audioContext?.close();
      };
    } catch (error) {
      console.error("Error initializing Audio Context or Analyser:", error);
    }
  }, [audioElement]);

  const resetDotHeights = () => {console.log("reset");setDotHeights(initialHeight)};

  const updateFrequencyData = () => {
    if (!analyserRef.current) return;

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);

    const getFrequency = () => {
      if (!analyserRef.current) return;

      analyserRef.current.getByteFrequencyData(dataArray);
      const newDotHeights = [30, 20, 10, 50].map(
        (index) => (dataArray[index] / 255) * intensity + initialHeight[0]
      );

      setDotHeights((prevHeights) => {
        // Only update state if heights actually change
        if (JSON.stringify(prevHeights) !== JSON.stringify(newDotHeights)) {
          return newDotHeights;
        }
        return prevHeights;
      });

      if (!audioElement?.paused) {
        animationFrameRef.current = requestAnimationFrame(getFrequency);
      } else {
        resetDotHeights();
      }
    };

    getFrequency();
  };

  return (
    <div className={`audio-visulizer-container`}>
      <div className="canvas">
        {dotHeights.map((height, index) => (
          <div
            key={index}
            className={`dot bg-[#e90b35] ${activeMobileVisual?"active-dot":""} ${dotAnimation?"dot-animation":""}`}
            style={{ height: `${height}px`}}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AudioVisualizer;
