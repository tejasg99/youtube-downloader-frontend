import { useState } from "react";
import Navbar from "./components/Navbar";
import VideoForm from "./components/VideoForm";
import FormatSelector from "./components/FormatSelector";
import DownloadButton from "./components/DownloadButton";

function App() {
  const [videoInfo, setVideoInfo] = useState(null);
  const [selectedVideoFormat, setSelectedVideoFormat] = useState("");
  const [selectedAudioFormat, setSelectedAudioFormat] = useState("");

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <Navbar />        
        <div className="w-full h-full flex flex-col items-center p-4 mt-10 gap-10">
          <VideoForm setVideoInfo={setVideoInfo}/>
          <div className="">
            {videoInfo && (
              <>
                <div className="mb-4 p-2 flex gap-2 border border-slate-800 rounded-lg w-[95%]">
                  <div className="">
                    <img 
                    src={videoInfo.thumbnail.url} 
                    alt="" 
                    className=" object-cover rounded-lg w-52 h-28"
                    />
                  </div>
                  <h2 className="font-semibold text-[16px]">{videoInfo.title}</h2>
                </div>
                <div className="flex items-center p-2">
                  <h3 className="text-lg font-semibold mt-4">Select your preferred formats: </h3>
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
                </div>
                <div className="flex justify-center items-center">
                  <DownloadButton 
                    url={videoInfo.originalUrl}
                    videoFormatTag={selectedVideoFormat}
                    audioFormatTag={selectedAudioFormat}
                  />
                </div>
              </>
            )}
            {!videoInfo && (
              <div>
                <span className="text-sm md:text-xl font-semibold">Enter or paste the video link above to get started...</span>
              </div>
            )}
          </div>        
        </div>
      </div>
    </>
  )
}

export default App
