import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUrl, setVideoInfo, startFetching, stopFetching, resetVideoState } from "../features/videoSlice";
import { RxCross2 } from "react-icons/rx";

const VideoForm = () => {
    const dispatch = useDispatch();
    const url = useSelector((state) => state.video.url);
    const fetching = useSelector((state) => state.video.fetching);

    const fetchVideoInfo = async() => {
        dispatch(startFetching());
        try {
            const res = await axios.post("http://localhost:3000/api/video-info", { url }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', //x-www-form-encoding
                }
            })
            dispatch(setVideoInfo(res.data));
        } catch (error) {
            console.log("Error fetching video info: ", error);
            alert("Failed to fetch video info, please try again");
        } finally {
            dispatch(stopFetching());
        }
    }

    const handleReset = () => {
        // Dispatch action to reset the entire video state
        dispatch(resetVideoState());
        // to reload the page
        window.location.reload();
    }

  return (
    <div className='w-full md:w-[55%] flex flex-col md:flex-row items-center gap-0 h-fit relative'>
        <div className='w-full relative'>
            <input 
            type="text"
            className='border border-black rounded-md px-2 py-2 w-full md:w-[98%] h-10 md:h-12 pr-10'
            placeholder='Paste youtube video url here'
            value={url}
            onChange={(e) => dispatch(setUrl(e.target.value))} 
            />
            {url && (
                <button 
                    onClick={handleReset}
                    className='absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black'
                    aria-label='Clear input'
                >
                    <RxCross2 size={20}/>
                </button>
            )}
        </div>

        <button
        onClick={fetchVideoInfo}
        className={`bg-blue-700 hover:bg-blue-600 text-white px-0  py-2 w-[60%] md:w-[150px] h-10 md:h-12 rounded-md font-semibold ${fetching ? "cursor-not-allowed opacity-70": ""} mt-2 md:mt-0`}
        disabled={fetching}
        >
            {fetching ? "Fetching" : "Fetch video info"}
        </button>
    </div>
  )
}

export default VideoForm