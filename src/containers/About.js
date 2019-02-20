import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const About = () => {
    return (
        <div>
            <Header />
            <div className="container col-md-5">
            <h3>สวัสดีค่ะ</h3>
            <p className="title text-justify mt-4 mb-4">
            สามารถออกเดินทางตามเนื้อหาที่ถูกบันทึกไว้ 
            เพื่อสำเร็จเป้าหมายต่างๆ ได้ เมื่อสำเร็จเป้าหมายดังกล่าว 
            ท่านจะได้รับผลเพิ่มค่าความสามารถของตัวละครทั้งหมดในตระกูล เช่น 
            ผลเพิ่มค่า HP หรือผลเพิ่มน้ำหนักบรรทุกสูงสุด เป็นต้น
            </p>
            <h4 className="text-success">จาก เฮลตี้ คาเฟ่</h4>
            </div>

            <Footer company="CUBISOFT" email="ccubisoft@gmail.com" />
        </div>
    )
}

export default About;