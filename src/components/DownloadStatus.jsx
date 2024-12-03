import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DownloadStatus = () => {
  const [status, setStatus] = useState("");
  const loading = useSelector((state) => state.download.loading);

  useEffect(() => {
    // eventSource api to listen to updates
    const eventSource = new EventSource(
      "http://localhost:3000/api/download-status"
    );

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setStatus(data.message);
    };

    eventSource.onerror = () => {
      console.error("Error connecting to the server");
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="w-full flex items-center justify-center gap-2">
          <h3 className="text-lg font-semibold animate-bounce text-blue-600 transition-all duration-100 ease-in-out">{status}</h3>
        </div>
      )}
    </>
  );
};

export default DownloadStatus;
