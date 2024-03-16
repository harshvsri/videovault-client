import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosTime, IoIosCheckmarkCircle } from "react-icons/io";
import Recommended from "./Recommended";

function Player() {
  const videoID = useParams().id;
  // Dummy data
  const uploads = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [videoURL, setVideoURL] = useState(null);
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    fetch(`${API_URL}/uploads/${videoID}`)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [videoID]);

  return (
    <div className="player">
      <div className="curr">
        <video src={videoURL} controls autoPlay></video>
        <div className="video-info">
          <div className="card-info-profile">
            <CgProfile className="pic" />
          </div>
          <div className="card-info-details">
            <h5>Getting started with videovault</h5>
            <h6>
              VideoVault.io <IoIosCheckmarkCircle />
            </h6>
            <p>
              100M <IoIosTime /> 01.03.2024
            </p>
          </div>
        </div>
      </div>
      <div className="recommendation">
        {uploads.map((upload) => (
          <Recommended key={upload} />
        ))}
      </div>
    </div>
  );
}

export default Player;
