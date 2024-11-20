import { useState } from 'react';
import axios from 'axios';

const VideoForm = ({setVideoInfo}) => {
    const [url, setUrl] = useState("");

    const fetchVideoInfo = async() => {
        try {
            const res = await axios.post("http://localhost:3000/api/video-info", { url }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', //x-www-form-encoding
                }
            })
            setVideoInfo(res.data);
        } catch (error) {
            console.log("Error fetching video info: ", error);
            alert("Failed to fetch video info, please try again");
        }
    }

  return (
    <div className='w-full md:w-[55%] flex flex-col md:flex-row items-center gap-2 h-fit'>
        <input 
        type="text"
        className='border border-black rounded-md px-2 py-2 w-full md:w-[80%] h-10 md:h-12'
        placeholder='Paste youtube video url here'
        value={url}
        onChange={(e) => setUrl(e.target.value)} 
        />
        <button
        onClick={fetchVideoInfo}
        className='bg-blue-700 hover:bg-blue-600 text-white px-0  py-2 w-[60%] md:w-[150px] h-10 md:h-12 rounded-md font-semibold'
        >
            Fetch video info
        </button>
    </div>
  )
}

export default VideoForm