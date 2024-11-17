import { useState } from "react";
import Navbar from "./components/Navbar";
import VideoForm from "./components/VideoForm";

function App() {
  const [videoInfo, setVideoInfo] = useState(null);

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <Navbar />        
        <div className="w-full h-full flex justify-center p-4 mt-10">
          <VideoForm setVideoInfo={setVideoInfo}/>          
        </div>
      </div>
    </>
  )
}

export default App
