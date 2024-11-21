import axios from "axios";

const DownloadButton = ({url, videoFormatTag, audioFormatTag}) => {
    const handleDownload = async() => {
        try {
            const response = await axios.get("http://localhost:3000/api/download", {
                params: { url, videoFormatTag, audioFormatTag },
                responseType: "blob", //treat the response as binary data
            });

            // Creating a downloadable file from response
            const blob = new Blob([response.data], { type: "video/mp4"}); //object for video file
            const link = document.createElement("a"); //anchor element creation
            link.href = URL.createObjectURL(blob); //temporary url pointing to the blob obj
            link.download = "video_with_audio.mp4"; //file name
            link.click(); //download trigger
        } catch (error) {
            console.log("Error while downloading: ",error);
            alert("Failed to download the video");
        }
    }

  return (
    <button
    onClick={handleDownload}
    className='bg-green-700 hover:bg-green-600 text-white font-semibold md:text-lg px-0 md:px-2 py-1 md:py-2 mt-4 w-[50%] md:w-40 h-10 md:h-14 rounded-md'
    >
        Download video
    </button>
  )
}

export default DownloadButton