import { useState } from "react";
import Navbar from "./components/Navbar";
import VideoForm from "./components/VideoForm";
import FormatSelector from "./components/FormatSelector";
import DownloadButton from "./components/DownloadButton";
import DownloadStatus from "./components/DownloadStatus";
import { useSelector } from "react-redux";

function App() {
  const videoInfo = useSelector((state) => state.video.videoInfo);
  const [selectedVideoFormat, setSelectedVideoFormat] = useState("");
  const [selectedAudioFormat, setSelectedAudioFormat] = useState("");

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Navbar />
        <div className="w-full h-full flex flex-col items-center p-4 mt-10 gap-10">
          <VideoForm />
          <div className=" flex flex-col md:items-center">
            {videoInfo && (
              <>
                <div className="mb-4 p-2 flex flex-col md:flex-row gap-2 border border-slate-800 rounded-lg md:w-[80%]">
                  <div className="mx-auto">
                    <img
                      src={videoInfo.thumbnail.url}
                      alt=""
                      className=" object-cover rounded-lg w-52 h-28"
                    />
                  </div>
                  <h2 className="font-medium md:font-semibold text-[12px] md:text-[16px]">
                    {videoInfo.title}
                  </h2>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center p-2">
                  <h3 className="text-sm md:text-lg font-medium md:font-semibold mt-4">
                    Select your preferred formats:{" "}
                  </h3>
                  <FormatSelector
                    formats={videoInfo.videoFormats}
                    selectedFormat={selectedVideoFormat}
                    setSelectedFormat={setSelectedVideoFormat}
                    label={"Video"}
                  />
                  <FormatSelector
                    formats={videoInfo.audioFormats}
                    selectedFormat={selectedAudioFormat}
                    setSelectedFormat={setSelectedAudioFormat}
                    label={"Audio"}
                  />
                </div>
                <div className="">
                  <DownloadButton
                    url={videoInfo.originalUrl}
                    videoFormatTag={selectedVideoFormat}
                    audioFormatTag={selectedAudioFormat}
                  />
                </div>
                <div className="mt-6">
                  <DownloadStatus />
                </div>
              </>
            )}
            {!videoInfo && (
              <div>
                <span
                  className="text-sm md:text-xl text-slate-800 font-semibold font-mono typing-text"
                >
                  Enter or paste the video link above to get started...
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
