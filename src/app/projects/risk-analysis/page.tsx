"use client";

import Image from "next/image";

function RiskReturnAnalysis() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold">
        การวิเคราะห์อัตราผลตอบแทนและความเสี่ยงของหลักทรัพย์ ประเภทอาหารและเครื่องดื่ม
      </h1>

      <blockquote className="italic border-l-4 border-gray-400 pl-4 text-gray-600">
        “การลงทุนมีความเสี่ยง ผู้ลงทุนควรศึกษาข้อมูล ให้รอบคอบก่อนตัดสินใจ”
      </blockquote>

      <p>
        ความเสี่ยง คือ โอกาสที่เราอาจไม่ได้ผลกำไรจากการลงทุน หรือการที่ทุนเราหายไปด้วย
        วันนี้เราจะมาดูวิธีคิดความเสี่ยงง่าย ๆ จากหลักทรัพย์กลุ่มอาหารและเครื่องดื่มกัน
      </p>

      <Image src="/images/chart-header.png" alt="เทคนิคการวิเคราะห์ความเสี่ยง" width={800} height={400} className="rounded-xl" />

      <p>
        หลักทรัพย์ประเภทอาหารและเครื่องดื่มเป็นหลักทรัพย์กลุ่มที่สำคัญต่อการดำรงชีวิต
        จึงเป็นธุรกิจที่สร้างรายได้ และมีอัตราการจ้างงานในอัตราที่สูง จึงมีศักยภาพในการเจริญเติบโต
      </p>

      <h2 className="text-xl font-semibold">ขั้นตอนการวิเคราะห์</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>เลือกหลักทรัพย์ที่มียอดการซื้อ-ขายมากที่สุด ในช่วง 3 ปี (2019-2021)</li>
        <li>ดึง Data จาก www.inverting.com และ www.set.or.th</li>
        <li>วิเคราะห์ความเสี่ยงและอัตราผลตอบแทน</li>
      </ul>

      <Image src="/images/table-summary.png" alt="ตารางอัตราผลตอบแทนเฉลี่ยและความเสี่ยง" width={800} height={500} className="rounded-xl" />

      <p>
        โดยเปรียบเทียบกับ SET INDEX เราเน้นหลักทรัพย์ที่มีอัตราผลตอบแทนสูงกว่าตลาด (0.0156)
        และหลักทรัพย์ที่มีความเสี่ยงสูงกว่าตลาด (1.2431)
      </p>

      <Image src="/images/chart-return-risk.png" alt="กราฟผลตอบแทนและความเสี่ยง" width={800} height={400} className="rounded-xl" />

      <p>
        แนวคิดของ Harry Markowitz เรื่อง “High Risk High Return” ก็ยังใช้ได้เสมอ
        แต่จากกราฟพบว่า MINT แม้มีความเสี่ยงสูง แต่ผลตอบแทนยังไม่คุ้มค่า อาจต้องวิเคราะห์ต่อ
      </p>

      <Image src="/images/chart-risk-sorted.png" alt="กราฟความเสี่ยงเรียงลำดับ" width={800} height={400} className="rounded-xl" />
      <Image src="/images/chart-return-sorted.png" alt="กราฟผลตอบแทนเรียงลำดับ" width={800} height={400} className="rounded-xl" />

      <Image src="/images/chart-alpha.png" alt="กราฟ Alpha Jensen" width={800} height={400} className="rounded-xl" />
      <Image src="/images/chart-treynor.png" alt="กราฟ Treynor Measure" width={800} height={400} className="rounded-xl" />
      <Image src="/images/chart-sharpe.png" alt="กราฟ Sharpe Measure" width={800} height={400} className="rounded-xl" />

      <h2 className="text-xl font-semibold">ข้อสรุป</h2>
      <p>
        เราจัดอันดับคะแนนหลักทรัพย์ตามเกณฑ์ดังนี้:
      </p>
      <ol className="list-decimal list-inside space-y-1">
        <li>อันดับจากอัตราผลตอบแทน</li>
        <li>อันดับจากความเสี่ยง (ยิ่งต่ำยิ่งดี)</li>
        <li>อันดับจากค่า Alpha ของ Jensen</li>
        <li>อันดับจากค่า Tp ของ Treynor Measure</li>
      </ol>

      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          พิมพ์ / Export PDF
        </button>
      </div>
    </div>
  );
}

export default RiskReturnAnalysis;
