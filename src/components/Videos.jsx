import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

function Videos() {
  const uploads = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="videos">
      {uploads.map((upload) => (
        <Link className="link" to={`/watch/${upload}`} key={upload}>
          <VideoCard />
        </Link>
      ))}
    </div>
  );
}

export default Videos;
