import { useState } from "react";
import Navbar from "./components/Navbar";
import VideoForm from "./components/VideoForm";
import FormatSelector from "./components/FormatSelector";

function App() {
  const [videoInfo, setVideoInfo] = useState(null);
  const [selectedVideoFormat, setSelectedVideoFormat] = useState("");
  const [selectedAudioFormat, setSelectedAudioFormat] = useState("");

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <Navbar />        
        <div className="w-full h-full flex justify-center p-4 mt-10">
          <VideoForm setVideoInfo={setVideoInfo}/>
          {videoInfo && (
            <>
              <FormatSelector 
                formats={videoInfo.videoFormats}
                selectedFormat={selectedVideoFormat}
                setSelectedFormat={setSelectedVideoFormat}
                label={"Video Format"}
              />
              <FormatSelector 
                formats={videoInfo.audioFormats}
                selectedFormat={selectedAudioFormat}
                setSelectedFormat={setSelectedAudioFormat}
                label={"Audio Format"}
              />
            </>
          )}          
        </div>
      </div>
    </>
  )
}

export default App
