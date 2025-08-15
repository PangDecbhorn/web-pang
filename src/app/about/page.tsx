"use client";

import Image from "next/image";

function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] -mt-20 z-0 overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-75 contrast-110 saturate-125"
          src="/about-page/about-me.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="mt-4 max-w-xl text-lg">
            Work helps me grow. I want to learn more every day.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="flex flex-col md:flex-row py-16 px-6 md:px-20 bg-white space-x-20 items-center justify-center ">
        {/* LEFT SIDE: TEXT */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10">
            About me
          </h2>
          <p className="mt-4 text-gray-600">
            I believe in long-term development through continuous learning. From
            no tech background to frontend and data, I’m growing with every
            project.
          </p>
          <p className="mt-4 text-gray-600">
            I believe that work is a complement in my life not a punishment, So
            I will keep working throughout my life and learning, find meaning
            life
          </p>
          <p className="mt-4 text-gray-600">
            My hobby is studying a book, coding, sometime I tired for work, Just
            drive round my home and have a coffee
          </p>
          <p className="mt-4 text-gray-600">
            I worked at Betago as a Data Analyst in the IT team. I made data
            flow plans, created dashboards, and wrote views in SQL. I also
            helped create reports when the team needed them. This job helped me
            understand how to use data in real work. Now, I work at Sleek EV, a
            startup company. I work as a Data Analyst and also help with
            frontend development. I take care of the admin website and the
            company website. I started learning frontend about 6 months ago.
          </p>
        </div>

        {/* RIGHT SIDE: FLIP CARD */}
        <div className="relative w-[280px] h-[350px] md:w-[300px] md:h-[400px] [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
            {/* Front side */}
            <div className="absolute inset-0 [backface-visibility:hidden] bg-[#f2f2eb] rounded-lg shadow-md overflow-hidden">
              <Image
                src="/about-page/image-presolnal.jpg"
                alt="ghost front"
                fill
                className="object-cover"
              />
            </div>

            {/* Back side */}
            <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#57473A] rounded-lg shadow-md overflow-hidden flex items-center justify-center">
              <div className="text-[#ffff] text-center">
                <h3 className="text-xl mb-2">CAN DO ANYTHING</h3>
                <p className="text-sm">
                  I bevlieve it
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
