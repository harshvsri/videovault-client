import { CgProfile } from "react-icons/cg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosTime } from "react-icons/io";

function VideoCard() {
  return (
    <div className="card">
      <img src="/placeholder.png"></img>
      <div className="card-info">
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
  );
}

export default VideoCard;
