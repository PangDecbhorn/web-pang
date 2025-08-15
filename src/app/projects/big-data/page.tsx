"use client";

import Image from "next/image";

const WhyBigDataPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        <em>ทำไมต้อง</em> <strong>Big Data</strong>
      </h1>
      <p className="text-sm text-gray-500 mb-6">โดย Decbhorn · 2 min read · 29 ส.ค. 2022</p>
      <div className="prose prose-lg max-w-none mb-6">
        <p>
          ในยุคที่เทคโนโลยีพัฒนาอย่างก้าวกระโดด การเก็บข้อมูลในรูปแบบไฟล์ Excel
          อาจจะทำให้องค์กรของคุณทำงานได้ช้าลง เพราะข้อมูลเหล่านั้นสามารถเก็บไว้บน Cloud ได้แล้ว
        </p>
        <p>
          ถ้าคุณเป็นผู้ใช้บริการ YouTube, Facebook, Google, Netflix, Starbucks
          แล้วคุณรู้ไหมว่าทำไมพวกเขาถึงประสบความสำเร็จมากมายขนาดนี้
          หนึ่งในเทคโนโลยีที่ทำให้บริษัทเหล่านี้ประสบความสำเร็จอย่างหนึ่งในนั้นคือ Big Data
          เพราะพวกเขามีข้อมูลอย่างมหาศาลและสามารถนำข้อมูลมาใช้วิเคราะห์เพื่อหาโอกาสทางธุรกิจ
        </p>
      </div>
      <div className="mb-6">
        <Image
          src="/images/bigdata-visual.png"
          alt="Big Data Visual"
          width={800}
          height={450}
          className="rounded-lg shadow"
        />
      </div>
      <div className="mt-10">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          พิมพ์ / Export PDF
        </button>
      </div>
    </div>
  );
};

export default WhyBigDataPage;