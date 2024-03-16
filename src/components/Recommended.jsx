import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosTime } from "react-icons/io";

function Recommended() {
  return (
    <div className="recommended">
      <img src="/placeholder.png"></img>
      <div className="card-info">
        <div className="title">Getting started with videovault</div>
        <p>
          VideoVault.io <IoIosCheckmarkCircle />
        </p>
        <p>
          100M <IoIosTime /> 01.03.2024
        </p>
      </div>
    </div>
  );
}

export default Recommended;
