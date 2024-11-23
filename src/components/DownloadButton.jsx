import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { startLoading, setProgress, stopLoading } from "../features/videoSlice";

const DownloadButton = ({ url, videoFormatTag, audioFormatTag }) => {
  const dispatch = useDispatch();
  const { loading, progress } = useSelector((state) => state.video);

  const handleDownload = async () => {
    dispatch(startLoading());
    try {
      const response = await axios.get("http://localhost:3000/api/download", {
        params: { url, videoFormatTag, audioFormatTag },
        responseType: "blob", //treat the response as binary data
        onDownloadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          dispatch(setProgress(percentCompleted));
        },
      });

      // Creating a downloadable file from response
      const blob = new Blob([response.data], { type: "video/mp4" }); //object for video file
      const link = document.createElement("a"); //anchor element creation
      link.href = URL.createObjectURL(blob); //temporary url pointing to the blob obj
      link.download = "video_with_audio.mp4"; //file name
      link.click(); //download trigger
    } catch (error) {
      console.log("Error while downloading: ", error);
      alert("Failed to download the video");
    } finally {
      dispatch(stopLoading());
    }
  };

  return (
    <div className="w-full md:w-96 flex justify-center">
      <button
        onClick={handleDownload}
        className="bg-green-700 hover:bg-green-600 text-white font-semibold md:text-lg w-[50%] md:w-[60%] px-0 md:px-2 py-1 md:py-2 mt-4 h-10 md:h-14 rounded-md"
      >
        {loading ? `Downloading...(${progress}%)` : "Download video"}
      </button>
      {loading && (
        <div className="mt-2 w-full bg-gray-200 h-2 rounded">
        <div
            className="bg-green-600 h-2 rounded"
            style={{ width: `${progress}%` }}
        ></div>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;