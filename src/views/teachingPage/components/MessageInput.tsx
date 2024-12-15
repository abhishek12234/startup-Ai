import React, { useState, useRef, useEffect } from "react";
import { ElevenLabsClient } from "elevenlabs";
import { FaPaperPlane, FaMicrophone } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useResponsive from "@/utils/hooks/useResponsive";

interface MessageInputProps {
    setChatMessages?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    chatMessages?: string[] | undefined;
    setAudioElement: React.Dispatch<React.SetStateAction<HTMLAudioElement | null>>;
    activeMobileVisual?: boolean | undefined;
    setMobileVisual?: React.Dispatch<React.SetStateAction<boolean | undefined> >;
    setDotAnimation:React.Dispatch<React.SetStateAction<boolean | undefined> >;
  
}

const MessageInput: React.FC<MessageInputProps> = ({
  setChatMessages,
  setAudioElement,
  chatMessages,
  activeMobileVisual,
  setMobileVisual,
  setDotAnimation,


})=> {
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [lastSpokenTime, setLastSpokenTime] = useState(0);
  const { larger, smaller, windowWidth } = useResponsive()
  const [startButton,setStartButton]=useState(true)

  const SILENCE_THRESHOLD = 3000; // 3 seconds
  const ELEVENLABS_API_KEY = "sk_147457925784d1bd010754b0e8298ae67981364af890bd6";
  const client = new ElevenLabsClient({ apiKey: ELEVENLABS_API_KEY });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const {
    transcript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      alert("Your browser does not support speech recognition. Please use a supported browser.");
    }
  }, [browserSupportsSpeechRecognition]);

  // Clear the API timeout
  const clearApiTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  // Call the ElevenLabs API and handle TTS
  const callApi = (userInput) => {
    const userMessage = userInput;
    
    if (!userMessage) return;
    if (micActive) handleStopListening();
    handleAudioEndCleanup()
    setDotAnimation(true)
    

    console.log("User stopped speaking. Calling API...", userMessage);
    if (chatMessages && setChatMessages) setChatMessages([...chatMessages, userMessage]);
    setMessage("");
    resetTranscript();
    if (smaller.sm && setMobileVisual) {
      setTimeout(() => {
          setMobileVisual(true);
      }, 50);  // Delay of 2 seconds (2000 milliseconds)
  }

    // Simulated API response
    const responseText = "A paragraph is a series of sentences ";
    setResponseMessage(responseText);
    setTimeout(() => {
      
      textToSpeechConvert(responseText);
      
  }, 3000);
    
  };

  // Start listening for voice input
  const handleStartListening = () => {
    
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
    resetTranscript();
    setIsListening(true);
    setLastSpokenTime(Date.now());
    clearApiTimeout();
  };

  // Stop listening for voice input
  const handleStopListening = () => {
    
    SpeechRecognition.stopListening();
    setIsListening(false);
    resetTranscript();
    
    clearApiTimeout();
  };

  // Reset audio playback state
  const handleApiError = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.src = "";
      }
      // Set up and play the fallback audio
      const fallbackAudio = new Audio('/test.mp3');
      audioRef.current = fallbackAudio;
  
      setIsAudioPlaying(true);
  
      await fallbackAudio.play();
      setDotAnimation(false)
      
      setAudioElement(fallbackAudio);
      
      
      fallbackAudio.addEventListener("ended", () => {
        console.log("Audio playback ended. Resuming speech recognition.");
        handleAudioEndCleanup()
        micActive && handleStartListening()
        
      });
    } catch (error) {
      console.error("Error playing fallback audio:", error);
    } finally {
      setIsAudioPlaying(false);
    }
  };

  const textToSpeechConvert = async (text: string) => {
    if (!text) return;
  
    try {
      // Cleanup existing audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Clear the existing source
      }
  
      // Create new audio and media source
      const newAudio = new Audio();
      const mediaSource = new MediaSource();
      newAudio.src = URL.createObjectURL(mediaSource);
      audioRef.current = newAudio;
  
      mediaSource.addEventListener("sourceopen", async () => {
        if (mediaSource.sourceBuffers.length > 0) {
          console.warn("SourceBuffer already exists. Skipping addition.");
          return;
        }
  
        const sourceBuffer = mediaSource.addSourceBuffer("audio/mpeg");
  
        try {
          // Fetch audio stream from ElevenLabs
          const audioStream = await client.textToSpeech.convertAsStream("CwhRBWXzGAHq8TQ4Fs17", {
            optimize_streaming_latency: "4",
            output_format: "mp3_22050_32",
            text,
            model_id: "eleven_multilingual_v2",
            voice_settings: { stability: 0.1, similarity_boost: 0.3, style: 0.2 },
          });
  
          // Append audio chunks to the SourceBuffer
          for await (const chunk of audioStream) {
            if (sourceBuffer.updating) {
              await new Promise((resolve) =>
                sourceBuffer.addEventListener("updateend", resolve, { once: true })
              );
            }
            sourceBuffer.appendBuffer(new Uint8Array(chunk));
          }
  
          // Close the MediaSource when all chunks are appended
          if (mediaSource.readyState === "open") {
            console.log("All chunks appended. Closing MediaSource.");
            mediaSource.endOfStream();
          }
        } catch (error) {
          console.error("Error streaming audio:", error);
          await handleApiError();
        }
      });
      newAudio.addEventListener("ended", () => {
        console.log("Audio playback ended. Resuming speech recognition.");
        handleAudioEndCleanup()
        micActive && handleStartListening()
        
      });
  
      // Start playback
      console.log("Starting audio playback...");
      await newAudio.play();
      setIsAudioPlaying(true);
      setAudioElement(newAudio);
    } catch (error) {
      console.error("Error during TTS playback:", error);
      await handleApiError();
    }
  };
  
  
  
  // Cleanup function after audio ends or is paused
  const handleAudioEndCleanup = () => {
    if (audioRef.current) {
      console.log("cleanup triggred")
      audioRef.current.pause(); // Pause the audio if still playing
      audioRef.current.currentTime = 0; // Reset the playback position
      audioRef.current = null; // Clear the audio reference
    }
    if (smaller.sm && setMobileVisual) setMobileVisual(false);
  
    setIsAudioPlaying(false); // Update state to reflect that audio is not playing anymore
    setAudioElement(null); // Clear the audio element state
  };
  
  useEffect(() => {
    if (listening && Date.now() - lastSpokenTime >= SILENCE_THRESHOLD && finalTranscript) {
      callApi(transcript);
    }
  }, [finalTranscript, listening, lastSpokenTime]);

  // Reset audio and speech states when unmounting
  useEffect(() => {
    return () => {
      
      SpeechRecognition.stopListening();
      clearApiTimeout();
    };
  }, []);
  
  const activateMicrophone=()=>{
    setMicActive(true)
    handleStartListening()

  }
  const deactiveMicrophone=()=>{
    setMicActive(false)
    handleStopListening()

  }

  const startTeaching=()=>{
    
    setStartButton(false)
    callApi("start teaching")

  }
 

  return (
    <>
      <audio ref={audioRef} style={{ display: "none" }}/>
     
      {micActive && transcript && (
  <div className="chat-message-box-recognition-text-container">
    <h4 className="text-center">{transcript}</h4>
  </div>
)}

      <div className="send-message-button-box">
      <div className={`start-teaching-button ${startButton?"":"start-teaching-button-deactive"}`} onClick={startTeaching}>
            {startButton&&"Start Learning"}
        </div>
        <div className={`input-box ${micActive?"input-box-inactive" : "input-box-active"} ${!startButton?"input-box-active1":""}` }>

          <input
            type="text"
            placeholder={!micActive ? "Enter Your Message" : ""}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={micActive}
            
          />
          <div className="mic-stop-btn-container">
            {message.length > 0 ? (
              <button onClick={()=>{callApi(message)}} className="send-message-button-box-btn-send">
                <FaPaperPlane />
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={deactiveMicrophone}
                  className={`send-message-button-box-btn-stop ${
                    (micActive && !activeMobileVisual) ? "send-message-button-box-btn-stop-active" : ""
                  }`}
                >
                  <ImCross />
                </button>
                <button onClick={activateMicrophone} className={`send-message-button-box-btn-mic ${activeMobileVisual?"send-message-button-box-btn-mic-inactive":""}`}>
                  <FaMicrophone />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageInput;
