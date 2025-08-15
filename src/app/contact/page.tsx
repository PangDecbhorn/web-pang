"use client";

import Link from "next/link";
import ThreeDScene from "./(components)/Butterfly"; // ✅ ตัวใหม่ที่มี wrapper
// ❌ ไม่ต้องใช้ ButterflyScene แล้ว

function ContactMePage() {
  return (
    <main className="relative min-h-screen -mt-18 bg-black text-white pt-24 overflow-hidden">
      {/* 3D animation ฝั่งขวา */}
      <div className="hidden md:block">
        <ThreeDScene />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 px-6 py-16 md:px-20">
        {/* Left Section */}
        <div className="flex flex-col justify-between space-y-8 font-serif  ">
          <div>
            <h1 className="text-4xl md:text-[6rem] font-serif font-bold leading-none opacity-10">
              CONTACT
            </h1>

            <div className="text-sm md:text-base space-y-3 mt-6">
              <div>
                <p className="font-bold text-lg mb-6">Contact Me</p>
                <p>
                  Email:{" "}
                  <a href="mailto:youremail@example.com">
                    jittrabhorn.jp@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+66918235815">
                    (+66) 91-823-5815
                  </a>
                </p>
              </div>

              <div>
                <p className="font-bold text-lg">Follow</p>
                <p className="space-x-3">
                  <Link href="https://linkedin.com/in/yourname" className="underline">
                    LinkedIn
                  </Link>
                  {/* <Link href="https://github.com/yourusername" className="underline">
                    GitHub
                  </Link>
                  <Link href="https://twitter.com/yourusername" className="underline">
                    Twitter
                  </Link> */}
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-lg ">Resume For Download</p>
                <Link
                  href="/document/jittrabhorn-dechintaranarak.pdf"
                  className="inline-block border px-4 py-1 rounded-full hover:bg-white hover:text-black transition text-sm"
                  download
                >
                  Download Resume
                </Link>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-400">
            Passionate about data & design — turning insight into interface.
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactMePage;
