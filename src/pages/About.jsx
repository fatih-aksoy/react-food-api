import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center flex-col items-center mt-[5rem]">
          <img
            src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="Fatih"
            width="350px"
          />
          <div className="text-centr w-[25rem]">
            <p className="text-2xl mt-5 font-semibold">
              My name is <span className="text-red-600">Fatih</span> , I am
              Front end developer from Sweden.
            </p>
            <p className="text-xl mt-5 leading-8">
              My coding journey had started by C programming language while I
              was in university. So I like coding as a playing guitar and
              reading. I am a life-long learner and I believe it will continue
              until end...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
