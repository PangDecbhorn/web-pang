"use client";

import Image from "next/image";

function EngagementFoodpandaPage() {
  return (
    <main className="min-h-screen -mt-18 pt-32 flex flex-col justify-center mx-auto px-4 py-10 text-gray-800 space-y-12 bg-[#fefef9]">

      <div className="flex flex-col space-y-4 items-center justify-center text-center">
        <h1 className="text-3xl font-bold">การวิเคราะห์ Engagement ของ Food Delivery</h1>
        <p>
          โปรเจกต์นี้มีวัตถุประสงค์เพื่อวิเคราะห์ข้อมูล engagement จากโซเชียลมีเดียของแบรนด์
          food delivery เช่น foodpanda เพื่อหาคำตอบเชิงกลยุทธ์ด้านการตลาด
        </p>
      </div>

      {/* Project Overview */}
      <section className="space-y-4 flex flex-col items-center justify-center">
        <Image
          src="/projects-page/food-delivery/food-delivery-drama-image.webp"
          alt="Project overview"
          width={800}
          height={600}
          className="w-full max-w-xl rounded-lg shadow"
        />
      </section>

      {/* Research Questions */}
      <section className="space-y-4 flex flex-col items-center justify-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold text-green-800">🧩 Research Questions</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-sm">
            <li>เปรียบเทียบยอด engagement รายสัปดาห์ของแต่ละแพลตฟอร์ม food delivery</li>
            <li>ช่วงเวลาใดที่โพสต์แล้วได้ engagement สูงที่สุด</li>
            <li>เปรียบเทียบ engagement ระหว่างโพสต์ที่มีโปรโมชั่นกับโพสต์ทั่วไป</li>
            <li>ตรวจสอบว่าเหตุการณ์ดราม่าส่งผลต่อ engagement อย่างมีนัยสำคัญหรือไม่ (p &lt; 0.05)</li>
          </ul>
        </div>
      </section>

      {/* Google Sheet Box */}
      <section className="space-y-4 flex flex-col items-center justify-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-lg font-semibold text-blue-700">📄 ข้อมูลจาก Google Sheet</h2>
          <p className="text-sm text-gray-700">
            ข้อมูลในโปรเจกต์นี้ถูกเก็บจาก Google Sheet ซึ่งรวม engagement, เวลาโพสต์ และประเภทโพสต์
          </p>
          <ul className="list-disc pl-6 text-sm text-gray-800 space-y-1 bg-gray-50 p-4 border border-gray-100 rounded-md">
            <li>แพลตฟอร์ม: Facebook / Instagram</li>
            <li>เวลาโพสต์: 18:00 / 20:00</li>
            <li>ประเภทโพสต์: โปรโมชั่น / ปกติ</li>
            <li>Engagement: Likes, Shares, Comments</li>
          </ul>
          <a
            href="https://docs.google.com/spreadsheets/d/1BnlE0eYd3rSQCo-cJbvAvHiNopTCJ7HhmUlCu-rAVAM/edit?gid=944915498#gid=944915498"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm px-5 py-2 rounded-md transition mt-4"
          >
            👉 คลิกเพื่อเปิด Google Sheet
          </a>
        </div>
      </section>

      {/* Tools */}
      <section className="space-y-4 flex flex-col items-center justify-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold">🛠 Tools Used</h2>
          <ul className="list-disc pl-6 text-sm text-gray-800">
            <li>Google Sheets</li>
            <li>Python (Pandas, Matplotlib, Seaborn)</li>
            <li>การทดสอบทางสถิติ (T-test / ANOVA)</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-4 flex flex-col items-center justify-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold">🎯 Skills Applied</h2>
          <ul className="list-disc pl-6 text-sm text-gray-800">
            <li>การวิเคราะห์ข้อมูลเชิงสำรวจ (EDA)</li>
            <li>การสร้างกราฟและสรุปข้อมูล</li>
            <li>Hypothesis Testing</li>
            <li>Time Series Analysis</li>
            <li>Social Media Analytics</li>
          </ul>
        </div>
      </section>

      {/* Results */}
      <section className="space-y-4 flex flex-col items-center justify-center text-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold">📊 Insights & Findings</h2>
          <p className="text-sm text-gray-800">
            โพสต์ที่มีโปรโมชั่นมี engagement เฉลี่ยสูงกว่า 35% เมื่อเทียบกับโพสต์ทั่วไป
            ช่วงเวลาที่มี engagement สูงสุดคือ 18.00–20.00 น. โดยเฉพาะวันเสาร์–อาทิตย์
            และดราม่าบนโซเชียลของ foodpanda ส่งผลให้ engagement เพิ่มขึ้นอย่างมีนัยสำคัญทางสถิติ (p &lt; 0.05)
          </p>
          <div className="bg-yellow-50 text-left text-sm text-gray-800 p-4 mt-4 border border-yellow-300 rounded-md space-y-2">
            <p className="font-semibold">🔍 สถิติและการทดสอบ</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>ผลการทดสอบ Median test ทั้งแบบ one-tailed และ two-tailed: <strong>Reject H₀</strong> → engagement หลังดราม่าเพิ่มขึ้นอย่างมีนัยสำคัญ</li>
              <li>T-test แบบเปรียบเทียบค่าเฉลี่ย: <strong>Failed to Reject H₀</strong> → ค่าเฉลี่ยต่างไม่ชัดเจน</li>
              <li>แต่มีค่า <em>Standard Deviation และ Variance</em> สูง → แสดงว่าข้อมูลกระจายตัวมาก</li>
              <li>ผล F-test: <strong>Reject H₀</strong> → ความแปรปรวนไม่เท่ากัน</li>
            </ul>
          </div>
          <Image
            src="/images/insights.jpg"
            alt="Example Results"
            width={800}
            height={600}
            className="rounded-lg shadow w-full max-w-xl mx-auto mt-4"
          />
        </div>
      </section>

      {/* Takeaway */}
      <section className="space-y-4 flex flex-col items-center justify-center text-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold">✅ Impact</h2>
          <p className="text-sm text-gray-800">
            ทีมการตลาดสามารถนำข้อมูลไปใช้วางแผนโพสต์ให้ตรงกับพฤติกรรมผู้ใช้
            จัดการโปรโมชั่นอย่างมีประสิทธิภาพ และเข้าใจผลกระทบจากกระแสโซเชียลได้ดียิ่งขึ้น
          </p>
        </div>
      </section>
    </main>
  );
}

export default EngagementFoodpandaPage;
