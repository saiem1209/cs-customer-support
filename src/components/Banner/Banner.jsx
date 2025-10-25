
import leftImg from "../../assets/vector1.png";
import rightImg from "../../assets/vector3.png";

const Banner = ({inprogress, resolved}) => {
 
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 mt-2 m-2b">
        <div className="p-2 flex items-center justify-center h-[150px] bg-linear-to-tr from-[#632EE3] to-[#9F62F2] rounded-lg">
          <div>
            <img className="" src={leftImg} alt="" />
          </div>
          <div className="absolute text-center">
            <p className="text-white font-medium">In-Progress</p>
            <h2 className="text-white font-semi-bold text-5xl">{inprogress}</h2>
          </div>
          <div>
            <img className="" src={rightImg} alt="" />
          </div>
        </div>
        <div className="p-2 flex items-center justify-center h-[150px] bg-linear-to-tr from-[#54CF68] to-[#00827A] rounded-lg">
          <div>
            <img className="" src={leftImg} alt="" />
          </div>
          <div className="absolute text-center">
            <p className="text-white font-medium">Resolved</p>
            <h2 className="text-white font-semi-bold text-5xl">{resolved}</h2>
          </div>
          <div>
            <img className="" src={rightImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
