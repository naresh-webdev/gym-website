import React from "react";

function Homepage() {
  return (
    <>
      <div className="absolute font-semibold text-gray-200 text-3xl h-screen w-screen flex flex-col items-center justify-center z-10">
        <div className="flex flex-col items-center text">
          <p>All progress takes place outside the comfort zone.</p>
          <button className="z-20 text-4xl mt-6 text-orange-600 underline underline-offset-4 hover:underline-offset-8">
            Get Enrolled
          </button>
        </div>
      </div>
      <img
        src={require("../img/homepage.jpg")}
        alt="homepage  img"
        className="blur-3 brightness-50 h-screen w-screen object-cover"
      />
    </>
  );
}

export default Homepage;
