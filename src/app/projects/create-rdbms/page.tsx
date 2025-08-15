"use client";

function CreatedRDBMSProjectPage() {
  return (
    <main className="min-h-screen -mt-18 pt-32 flex flex-col justify-center mx-auto px-4 py-10 text-gray-800 space-y-12 bg-[#fefef9]">

      <div className="flex flex-col space-y-4 items-center justify-center text-center">
        <h1 className="text-3xl font-bold">Created material store relational database management system (RDBMS) by SQL</h1>
        <p>
          โปรเจกต์นี้เป็นการออกแบบระบบฐานข้อมูลสำหรับร้านวัสดุอุปกรณ์ โดยใช้ SQL เพื่อจัดการข้อมูลของสินค้า สาขา พนักงานขาย และบันทึกรายการขาย พร้อมทั้งนำข้อมูลไปวิเคราะห์เพื่อตอบโจทย์ทางธุรกิจ
        </p>
      </div>

      {/* Schema Overview */}
      <section className="space-y-4 flex flex-col items-center justify-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold text-green-800">🧩 โครงสร้างฐานข้อมูล</h2>
          <ul className="list-disc pl-6 text-sm text-gray-800 space-y-2">
            <li><strong>branch</strong>: เก็บข้อมูลสาขาและจังหวัด</li>
            <li><strong>product</strong>: รายละเอียดสินค้า ราคา และ stock</li>
            <li><strong>seller</strong>: รายชื่อพนักงานขาย รหัสสาขา และเงินเดือน</li>
            <li><strong>sales_records</strong>: รายการขายแต่ละวัน (พนักงาน, สินค้า, สาขา, เวลา)</li>
            <li><strong>sales</strong>: สรุปยอดขายสินค้าแต่ละชิ้นในแต่ละคน</li>
            <li><strong>bonus</strong>: คำนวณโบนัสพนักงานจากยอดขายรวม</li>
          </ul>
        </div>
      </section>

      {/* Business Analysis */}
      <section className="space-y-4 flex flex-col items-center justify-center text-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold">📊 การวิเคราะห์ข้อมูลเชิงธุรกิจ</h2>
          <ul className="list-disc pl-6 text-sm text-gray-800 text-left space-y-2">
            <li>สาขาที่มียอดขายมากที่สุด: <strong>ขอนแก่น (B002)</strong></li>
            <li>พนักงานที่มียอดขายรวมสูงสุด: <strong>Liam</strong> จากสาขา กรุงเทพ</li>
            <li>Top 5 สินค้าขายดี เช่น wooden sofa, wardrobe</li>
            <li>พนักงานที่ทำยอดขายได้เกิน 100 และมียอด transaction มากกว่า 3 รายการ</li>
            <li>มีการคำนวณโบนัส 10% จากยอดขายรวม และรวมเข้ากับเงินเดือนพนักงาน</li>
          </ul>
        </div>
      </section>

      {/* Bonus Summary */}
      <section className="space-y-4 flex flex-col items-center justify-center text-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold">💰 ตัวอย่างการคำนวณโบนัส</h2>
          <table className="text-sm text-left w-full mt-2">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">พนักงาน</th>
                <th className="p-2">ยอดขายรวม</th>
                <th className="p-2">โบนัส (10%)</th>
                <th className="p-2">เงินเดือนใหม่</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">Liam</td>
                <td className="p-2">230.00</td>
                <td className="p-2">23.00</td>
                <td className="p-2">10,023.00</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Jacob</td>
                <td className="p-2">150.00</td>
                <td className="p-2">15.00</td>
                <td className="p-2">10,015.00</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Rose</td>
                <td className="p-2">120.00</td>
                <td className="p-2">12.00</td>
                <td className="p-2">10,012.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Techniques */}
      <section className="space-y-4 flex flex-col items-center justify-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold">🚧 เทคนิคที่ใช้</h2>
          <ul className="list-disc pl-6 text-sm text-gray-800">
            <li>SQL JOIN, GROUP BY, HAVING และ aggregate functions</li>
            <li>สร้าง derived table สำหรับยอดขายรวม</li>
            <li>กรองข้อมูลและสรุปยอดขายตามสาขา/พนักงาน</li>
            <li>การคำนวณค่าตอบแทนอัตโนมัติจากยอดขาย</li>
          </ul>
        </div>
      </section>

      {/* Takeaway */}
      <section className="space-y-4 flex flex-col items-center justify-center text-center">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold">✅ Impact</h2>
          <p className="text-sm text-gray-800">
            โปรเจกต์นี้แสดงให้เห็นการประยุกต์ใช้ SQL ในการออกแบบและวิเคราะห์ฐานข้อมูลเชิงธุรกิจ
            เพื่อสนับสนุนการตัดสินใจ เช่น การจัดการพนักงานขายและการวางแผนโปรโมชั่นสินค้า
          </p>
        </div>
      </section>

    </main>
  );
}

export default CreatedRDBMSProjectPage;
