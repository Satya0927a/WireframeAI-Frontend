import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Star, ChevronDown, BarChart3, BookOpen, Users, Rocket } from "lucide-react";

function App(){
    return(
        <section className="bg-red-500">

            {/* Trust Badge */}
            <div className={"flex justify-center mt-35"}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full shadow-sm">
                <Star className="w-3 h-3 fill-black stroke-none" />
                <span className="text-xs font-medium text-gray-700">4.9 rating from 18.3K+ users</span>
              </div>
            </div>

            <div className="flex justify-center">
                <h1>Turn Components into
                     <span>Production Code</span> </h1>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque placeat quo veniam sapiente error voluptatem rem facere deserunt iusto vel!
                     </p>
               
            </div>
        </section>
    )
}
export default App;