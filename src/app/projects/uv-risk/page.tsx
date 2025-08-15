"use client";

import Image from "next/image";

const UVRiskArticle = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold italic mb-2">
        อันตรายที่มองไม่เห็นกับรังสี <strong className="not-italic">UV</strong>
      </h1>
      <div className="flex items-center gap-3 text-sm text-gray-600 mb-6">
        <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
          J
        </div>
        <div>
          Decbhorn • 1 min read • Aug 26, 2022
        </div>
      </div>

      <p className="mb-4">
        ขณะเขียนบทความนี้ ผู้เขียนรู้สึกเหมือนเขียนบนก้อนเมฆที่รายล้อมไปด้วยพระอาทิตย์ตอนเที่ยงวัน รู้สึกเหมือนเอ็นไซม์ไทโรซิเนสกำลังแย่งกันสร้างเมลานินเลยแหละ
      </p>

      <blockquote className="border-l-4 border-gray-400 pl-4 italic mb-4">
        ผู้เขียนเชื่อว่าทุกคนที่อ่านบทความนี้ น่าจะรู้เรื่องที่โลกกับเผชิญกับปัญหาสภาวะโลกร้อนกันอยู่แล้ว
      </blockquote>

      <p className="mb-4">
        ในปัจจุบัน โลกกำลังเผชิญกับปัญหาสภาวะโลกร้อน อีกทั้งประเทศไทยยังเป็นประเทศที่แสงแดดในทุกฤดูกาล ทำให้เราต้องออกกับแสงแดดที่เพิ่มมากขึ้น มันทำซ้ำแสงแดดเหล่านี้ยิ่งเป็นสาเหตุที่ก่อให้เกิด ฝ้า กระแดด ริ้วรอย หรืออาจส่งผลให้เกิดเป็นมะเร็งผิวหนังได้ด้วย แถมกิจวัตรประจำวันหรือการใช้ชีวิตของเราในปัจจุบันมีความหลากหลายเพิ่มมากขึ้น ไม่ว่าจะเป็นการเดินทาง การไปท่องเที่ยวเชิงอนุรักษ์ ฯลฯ
      </p>

      <div className="my-8">
        <Image
          src="/images/uv-risk.png"
          alt="UV Risk Image"
          width={800}
          height={400}
          className="rounded-xl w-full h-auto"
        />
      </div>
    </div>
  );
};

export default UVRiskArticle;
