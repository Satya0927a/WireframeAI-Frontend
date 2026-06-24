import { Link } from "react-router-dom";
import Back from "../assets/back.png";
import { useNavigate } from "react-router-dom";
import Google from "../assets/google.png";

function Signup() {
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
        
      <div className=" max-w-md mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[35px] font-bold font-serif text-gray-900">
            Create an Account
          </h1>

          <p className=" text-[15px]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-400 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Form */}
        <div className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full py-5 px-8 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full py-5 px-8 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full py-5 px-8 rounded-full bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button className="w-full py-4 mt-3 rounded-full bg-[#FF9B51] border-t-2 border-white text-black text-2xl font-serif font-bold cursor-pointer">
            Continue
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-gray-500">
            or sign up with
          </span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

         {/* Google Login */}
                <div className="flex justify-center mt-6">
                  <button
                    type="button"
                    className="w-16 h-16 cursor-pointer bg-white border border-gray-300 rounded-2xl flex items-center justify-center hover:shadow-md transition"
                  >
                    <img
                      src={Google}
                      alt="Google"
                      className="w-8 h-8"
                    />
                  </button>
                </div>

     <div className=" text-[13px] mt-30 text-center">
  By clicking on continue you agree to recognotes <br /> our{" "}
  <Link
    to="/term"
    className="text-orange-400 underline"
  >
    Terms of Use
  </Link>{" "}
  and{" "}
  <Link
    to="/privacy"
    className="text-orange-400 underline"
  >
    Privacy Policy
  </Link>
</div>
      </div>
    </div>
  );
}

export default Signup;