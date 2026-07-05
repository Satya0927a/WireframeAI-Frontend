import { Link } from "react-router-dom";
import Back from "../assets/back.png";
import { useNavigate } from "react-router-dom";

function Support() {
    const navigate = useNavigate();

  return (
    
    <div className="min-h-screen bg-gray-50 px-6 pt-8">
      {/* Back Button */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="mb-16 cursor-pointer"
            >
              <img
                src={Back}
                alt="Back"
                className="w-10 h-10"
              />
            </button>
            </div>
  )
}
export default Support;