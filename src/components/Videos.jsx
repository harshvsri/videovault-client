import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL, dummyUploads } from "../utils/data";
import VideoCard from "./VideoCard";
import LoadingCard from "./LoadingCard";

function Videos() {
  const [isLoading, setIsLoading] = useState(true);
  const [uploads, setUploads] = useState([dummyUploads]);

  useEffect(() => {
    async function fetchUploads() {
      const url = API_URL + "/uploads";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setUploads(data);
        setIsLoading(false);
      }
    }
    fetchUploads();
  }, []);

  return (
    <div className="videos">
      {uploads.map((upload, index) => (
        <Link className="link" to={`/watch/${upload._id}`} key={index}>
          {isLoading ? <LoadingCard /> : <VideoCard upload={upload} />}
        </Link>
      ))}
    </div>
  );
}

export default Videos;
