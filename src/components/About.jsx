import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-violet-600 via-purple-500 to-pink-600 text-white"
    >
      <div className="text-center max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Venushi Fernando, and I recently completed two years of university as a software engineer. I've been working in creative writing for the past two years, but I'm ready to move on to graphic design and user interface design. I created websites with the MERN stack, java, and other basic programming languages. I just feel like I've learned everything I can about fashion. I am even more interested in user interface design.
        </p>

        <br />

        <p className="text-xl">
        I've decided to continue my education in Interactive Media while also seeking employment in a web design firm or a well-known IT firm. I mainly use Adobe Photoshop Illustrator, Figma, and behance, but I am eager to learn about new software programs.
        </p>
      </div>
    </div>
  );
};

export default About;
