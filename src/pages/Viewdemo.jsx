import { Link, useNavigate } from "react-router-dom";
import Wire from "../assets/wire.mp4";

function Demo (){
    return(
        <section>
            <div className="flex justify-center items-center">
                <video src={Wire}
                className="px-50 py-50">Demo 1</video>
            </div>
        </section>
    )
}
export default Demo;