import DemoImage from "../assets/profiledp.png";
import { Link } from "react-router-dom";
const forbiddenUrl = "https://example.com/images";
export const FounderCard = ({founder}) => {
  return (
    <>
     <Link to={`/founder/${founder._id}`}>
      <div className="flex flex-row h-50 shadow-2xl m-2 overflow-hidden border-1 border-yellow-500 bg-white  rounded-2xl hover:bg-gray-200 hover: cursor-alias ">
        {/* container    */}

        <div className="overflow-hidden object-cover">
          <img
            src={founder.profile_image.startsWith(forbiddenUrl)?DemoImage:founder.profile_image}
            className="w-40 h-40 m-4 object-cover rounded-2xl justify-center"
            alt="Demo"
          />
        </div>

        <div className="flex-2/3 p-2 flex flex-col pl-9 m-2">
            <p className="text-2xl font-semibold font-mono">{founder.name}</p>
            <p className="text-xl"> {founder.title}, ..</p>
            <p className="text-xl">Studies: {founder.professional_background}</p>
            <p className="text-xl">Role: {founder.role_in_startup}</p>
            <div className="text-xm pt-4 pr-5 flex flex-row justify-between">
                <p>{founder.founding_year}</p>
                <p>{founder.funding_stage}</p>
            </div>
        </div>
      </div>
      </Link>
    </>
  );
};
