"use client";

import React from 'react'
import { motion } from 'framer-motion'

// ตัวอย่างหน้า page.js แบบสวย ๆ (ใช้ TailwindCSS)
// นำไฟล์นี้ไปใช้ในโปรเจค Next.js หรือ React ที่มี Tailwind + Framer Motion

const foods = [
  {
    id: 1,
    name: 'ผัดไทย',
    description:
      'เส้นจันท์ผัดกับกุ้งสด เต้าหู้ และถั่วงอก — รสกลมกล่อม บีบมะนาวก่อนกิน',
    image: 'https://img.thaicdn.net/u/surauch/movie2/shutterstock_81474712.jpg'
  },
  {
    id: 2,
    name: 'ต้มยำกุ้ง',
    description:
      'ซุปเผ็ดเปรี้ยวพร้อมกุ้งสดและสมุนไพรไทย — หอมตะไคร้ ใบมะกรูด',
    image: 'https://s359.thaicdn.net//pagebuilder/d23c7c93-9b7b-45a4-b7e5-e508722d8369.jpg'
  },
  {
    id: 3,
    name: 'แกงเขียวหวาน',
    description:
      'แกงกะทิรสเข้ม ใส่เนื้อนุ่มๆ และใบโหระพา — กินกับข้าวสวยร้อนๆ',
    image: 'https://www.pueasukkapab.com/wp-content/uploads/2023/03/%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B8%A1%E0%B8%B0%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99-%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9-5.webp'
  },
  {
    id: 4,
    name: 'ข้าวมันไก่',
    description:
      'ไก่ต้มเนื้อนุ่ม เสิร์ฟกับข้าวมันหอมและน้ำจิ้มรสเด็ด — จานโปรดของหลายคน',
    image: 'https://img.thaicdn.net/u/surauch/movie2/chicken-rice.jpg'
  },
  {
    id: 5,
    name: 'กะเพราไก่ไข่ดาว',
    description:
      'ผัดกะเพรารสจัด จับคู่ไข่ดาวเยิ้ม ๆ — จานง่ายที่กินเมื่อไหร่ก็อร่อย',
    image: 'https://s359.kapook.com/r/600/auto/pagebuilder/7595f0f5-696a-4cfe-ad3a-9cd4dd3ccbf8.jpg'
  },
  {
    id: 6,
    name: 'ส้มตำไทย',
    description:
      'มะละกอสดขูด รสเปรี้ยวหวานเผ็ด — ใส่ถั่ว และมะเขือเทศเพิ่มเท็กซ์เจอร์',
    image: 'https://s359.kapook.com/pagebuilder/2d976efb-6441-4684-bd72-63da127bf141.jpg'
  },
  {
    id: 7,
    name: 'ข้าวผัดกุ้ง',
    description:
      'ข้าวผัดหอมกระทะ ผัดกับกุ้งสดและผัก — อิ่มง่าย เหมาะเป็นหนึ่งจาน',
    image: 'https://static8.depositphotos.com/1029554/813/i/450/depositphotos_8136767-stock-photo-bowl-of-shrimp-stir-fry.jpg'
  },
  {
    id: 8,
    name: 'ราเม็งหมูชาชู',
    description:
      'ซุปกระดูกเข้มข้น เสิร์ฟพร้อมชาชูนุ่มและไข่ออนเซน — อุ่นใจทุกคำ',
    image: 'https://res.cloudinary.com/jnto/image/upload/w_600,fl_lossy,f_auto,q_auto,c_scale/v1/media/filer_public/e0/3c/e03c7f75-06a7-45ed-920b-dc5d7ad6eb60/mar22_ramen_12_e4tdxz'
  },
  {
    id: 9,
    name: 'พิซซ่าซีฟู้ด',
    description:
      'หน้าเต็มทะเล กุ้ง หมึก ชีสยืด — แชร์กับเพื่อนคือฟินสุด',
    image: 'https://static8.depositphotos.com/1177973/861/i/450/depositphotos_8618524-stock-photo-delicious-pizza-with-seafood-on.jpg'
  }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-8">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Gallery อาหาร</h1>
        <p className="text-gray-600">รวมเมนูเด็ด 9 รายการ — เลือกดูรายละเอียดและรูปภาพ</p>
      </header>

      <section className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {foods.map((f, idx) => (
          <motion.article
            key={f.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06, type: 'spring', stiffness: 120 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            <div className="relative h-44 sm:h-48">
              <img
                src={f.image}
                alt={f.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute left-3 top-3 bg-black/40 text-white text-xs px-2 py-1 rounded">เมนู #{f.id}</div>
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 truncate">{f.name}</h2>
              <p className="text-gray-600 mt-2 line-clamp-2 text-sm">{f.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <button
                  className="px-4 py-2 bg-amber-500/95 text-white rounded-full text-sm font-medium shadow-sm hover:brightness-105"
                  onClick={() => alert(`${f.name}\n\n${f.description}`)}
                >
                  ดูรายละเอียด
                </button>

                <div className="text-sm text-gray-500">พร้อมเสิร์ฟ</div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <footer className="max-w-6xl mx-auto mt-10 text-center text-gray-500 text-sm">
        <span>จากอาหารร้านเรามอบความสุขที่สุดให้</span>
      </footer>
    </main>
  )
}
