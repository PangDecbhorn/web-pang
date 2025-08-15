"use client";

import Image from "next/image";
import Link from "next/link";

// 🔄 เปลี่ยน date format ให้เป็น YYYY-MM-DD
const projects = [
  {
    title: "การวิเคราะห์ Engagement บนโซเชียลของแบรนด์ Food Delivery",
    date: "2021-10-25",
    image: "/projects-page/food-delivery/food-delivery-drama-image.webp",
    slug: "analysis-engagement-food-delivery",
  },
  {
    title: "สร้างระบบฐานข้อมูลเชิงสัมพันธ์สำหรับร้านวัสดุอุปกรณ์ด้วย SQL",
    date: "2021-10-30",
    image: "/projects-page/create-rdbms/rdbms.jpg",
    slug: "create-rdbms",
  },
  {
    title: "วิเคราะห์ข้อมูลอุบัติเหตุทางถนนของประเทศไทย ปี 2554–2564 ด้วย Looker Studio",
    date: "2021-10-31",
    image: "/projects-page/acident-on-road/acident.jpg",
    slug: "acident-on-road",
  },
  {
    title: "การวิเคราะห์อัตราผลตอบแทนและความเสี่ยงของหลักทรัพย์ ประเภทอาหารและเครื่องดื่ม",
    date: "2022-08-10",
    image: "/projects-page/risk-analysis/risk.png",
    slug: "risk-analysis",
  },
  {
    title: "ทำไมต้อง Big Data",
    date: "2022-08-22",
    image: "/projects-page/big-data/bigdata.png",
    slug: "big-data",
  },
  {
    title: "อันตรายที่มองไม่เห็นกับรังสี UV",
    date: "2022-08-31",
    image: "/projects-page/uv-risk/uv.png",
    slug: "uv-risk",
  },
];

function ProjectPage() {
  return (
    <main className="min-h-screen bg-[#ffff] px-4 py-10 md:px-20">
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 brightness-[.6] saturate-125"
        src="/about-page/about-me.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="grid gap-10">
        {/* Banner */}
        {/* <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md bg-amber-100">
          <Image
            src="/projects-page/big-data.jpg"
            alt="Main Banner"
            fill
            className="object-cover"
          />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-right">
            <h2 className="text-xl md:text-2xl font-medium">Introducing Comet:</h2>
            <p className="text-sm md:text-lg">Browse at the speed of thought</p>
            <button className="mt-2 rounded-full border px-4 py-1 text-xs hover:bg-white hover:text-black transition">
              Read More
            </button>
          </div>
        </div> */}

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-20">
          {[...projects]
            .sort(
              (a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((project, index) => (
              <Link
                key={index}
                href={`/projects/${project.slug}`}
                className="rounded-md overflow-hidden bg-[#ffff] shadow hover:shadow-lg transition block"
              >
                <div className="relative w-full h-[180px] md:h-[200px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500">{project.date}</p>
                  <h3 className="text-md md:text-lg font-medium text-gray-900 mt-1">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
