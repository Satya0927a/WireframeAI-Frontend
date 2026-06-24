function Say() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      college: "AKTU University",
      text: "Being a Stulo Ambassador helped me improve my communication and leadership skills.",
    },
    {
      name: "Priya Singh",
      college: "Delhi University",
      text: "I connected with amazing students and gained real-world experience.",
    },
    {
      name: "Aman Verma",
      college: "IIT Kanpur",
      text: "The program gave me confidence and valuable networking opportunities.",
    },
    {
      name: "Sneha Gupta",
      college: "NIT Jaipur",
      text: "One of the best opportunities for personal and professional growth.",
    },
    {
      name: "Rohit Kumar",
      college: "BHU",
      text: "The Stulo Ambassador Program helped me build confidence and leadership skills.",
    },
    {
      name: "Ananya Singh",
      college: "IIIT Lucknow",
      text: "I learned networking, event management and communication through this program.",
    },
  ];

  return (
    <div className=" py-10 md:py-20 overflow-hidden">

      {/* Heading */}
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          What Developers have to say
        </h1>

        <p className="mt-3 text-sm md:text-base text-gray-500">
          A word from our developers about their experience.
        </p>
      </div>

      {/* Row 1 */}
      <div className="overflow-hidden mt-10 md:mt-14 cursor-pointer">
        <div className="flex gap-4 md:gap-6 w-max animate-marquee-left">

          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[230px] sm:w-[280px] md:w-[400px] lg:w-[500px]
              bg-white rounded-3xl p-4 md:p-6 shadow-md
              border-b-[5px] border-r-[5px] border-blue-800"
            >
              <div className="text-3xl md:text-5xl text-blue-800">
                ❝
              </div>

              <p className="mt-2 text-sm md:text-base text-gray-600">
                {item.text}
              </p>

              <h2 className="mt-4 md:mt-6 font-bold text-gray-800">
                {item.name}
              </h2>

              <p className="text-xs md:text-sm text-gray-500">
                {item.college}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden mt-6 md:mt-8 cursor-pointer">
        <div className="flex gap-4 md:gap-6 w-max animate-marquee-right">

          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[230px] sm:w-[280px] md:w-[400px] lg:w-[500px]
              bg-white rounded-3xl p-4 md:p-6 shadow-md
              border-b-[5px] border-r-[5px] border-blue-800"
            >
              <div className="text-3xl md:text-5xl text-blue-800">
                ❝
              </div>

              <p className="mt-2 text-sm md:text-base text-gray-600">
                {item.text}
              </p>

              <h2 className="mt-4 md:mt-6 font-bold text-gray-800">
                {item.name}
              </h2>

              <p className="text-xs md:text-sm text-gray-500">
                {item.college}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Say;