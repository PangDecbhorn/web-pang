"use client";

function AccidentDashboardPage() {
  return (
    <main className="min-h-screen -mt-18 pt-32 flex flex-col justify-center mx-auto px-4 py-10 text-gray-800 space-y-12 bg-[#fefef9]">

      <div className="flex flex-col space-y-4 items-center justify-center text-center">
        <h1 className="text-3xl font-bold">วิเคราะห์ข้อมูลอุบัติเหตุจากปี 2011–2021 ด้วย Dashboard</h1>
        <p>
          โปรเจกต์นี้ดึงข้อมูลจากเว็บไซต์ภาครัฐ <a href="https://gdcatalog.go.th/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://gdcatalog.go.th/</a>
          เพื่อนำมาวิเคราะห์และสร้าง Dashboard แสดงจำนวนอุบัติเหตุทั่วประเทศ
          จำแนกตามประเภทพาหนะ เพศ พื้นที่ และช่วงเวลา เพื่อหาแนวโน้มและข้อมูลเชิงลึกในการวางแผนนโยบายความปลอดภัยบนท้องถนน
        </p>
      </div>

      {/* Embed Looker Studio Dashboard */}
      <section className="space-y-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl">
          <iframe
            width="100%"
            height="700"
            src="https://lookerstudio.google.com/embed/reporting/72c1e00f-8983-49ef-acdc-a5c05eac4595/page/WhVyC"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            title="Accident Report Dashboard"
            className="rounded-xl shadow"
          ></iframe>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-4 flex flex-col items-center justify-center text-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold">📊 สรุปข้อมูลที่ค้นพบ</h2>
          <ul className="list-disc pl-6 text-sm text-gray-800 text-left space-y-2">
            <li>ข้อมูลรวมทั้งหมด: <strong>189,160 อุบัติเหตุ</strong> ในช่วงปี 2011–2021</li>
            <li>กลุ่มยานพาหนะที่เกิดอุบัติเหตุสูงสุด: <strong>รถจักรยานยนต์</strong></li>
            <li>เพศผู้ชายมีสัดส่วนอุบัติเหตุสูงกว่า: <strong>78.9%</strong></li>
            <li>แนวโน้มอุบัติเหตุเพิ่มขึ้นในปี 2013–2016 และลดลงช่วงปี 2020–2021</li>
            <li>จังหวัดที่เกิดอุบัติเหตุสูงสุด: <strong>นครราชสีมา</strong></li>
          </ul>
        </div>
      </section>

      {/* Tools */}
      <section className="space-y-4 flex flex-col items-center justify-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold">🚀 เครื่องมือที่ใช้</h2>
          <ul className="list-disc pl-6 text-sm text-gray-800">
            <li>Google Data Studio / Looker Studio</li>
            <li>Data Source: ข้อมูลจาก <a href="https://gdcatalog.go.th/" target="_blank" className="text-blue-600 underline">gdcatalog.go.th</a></li>
            <li>Google Sheets (ETL ขั้นต้น)</li>
          </ul>
        </div>
      </section>

    </main>
  );
}

export default AccidentDashboardPage;