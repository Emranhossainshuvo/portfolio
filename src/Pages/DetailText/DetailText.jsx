import React from "react";
import 'aos/dist/aos.css'; 

const DetailText = () => {
  return (
    <div className="flex mt-16 flex-col-reverse justify-center items-center md:flex-row md:h-[80vh] max-w-screen-xl mx-auto">
      <div  data-aos="fade-up" className="w-full md:w-[50%] md:pr-8">
        <h3 className="text-4xl ps-4 font-semibold mb-4 text-[#333333]">
          Hi, I am Shuvo.
        </h3>
        <p className="text-lg mb-20 px-4 text-justify text-[#666666] leading-7">
        As a web developer, I bring passion and expertise to crafting innovative and user-centric digital experiences.
         With a foundation in front-end technologies like HTML, CSS, and JavaScript, I create responsive and visually appealing interfaces. <br /> <br />
          My proficiency extends to various frameworks and libraries, ensuring dynamic and seamless interactions. I am dedicated to staying abreast of industry trends, leveraging my skills in problem-solving and collaboration. Detail-oriented and committed to clean code practices, I thrive in translating concepts into robust, functional websites. <br /> <br /> Whether it's optimizing performance, ensuring cross-browser compatibility, or integrating APIs, I approach each project with a meticulous mindset. Eager to contribute to projects that challenge and inspire, I am driven by a continual pursuit of excellence in web development.
        </p>
      </div>
      <img data-aos="zoom-in"
        className="w-full px-2 rounded-md md:w-[50%] h-[300px] md:h-auto object-cover shadow-lg mb-8 md:mb-0"
        src="https://i.ibb.co/p1Smwjf/7200953-30756.jpg"
        alt=""
      />
    </div>
  );
};

export default DetailText;
