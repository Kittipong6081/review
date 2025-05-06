import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ใช้ Router สำหรับ routing
import ProductReview from './review/ProductReview'; // หน้ารีวิวผลิตภัณฑ์
import Navbar from './review/component/Navbar'; // Navbar

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar จะแสดงอยู่เสมอในทุกหน้า */}
        <Routes>
          {/* กำหนด route สำหรับแต่ละหน้า */}
          <Route path="/dogFood" element={<ProductReview />} />
          {/* เพิ่ม Route อื่นๆ ถ้ามีหน้าอื่น */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
