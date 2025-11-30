CREATE TABLE foods (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    image_url VARCHAR(255)
);

INSERT INTO foods (id, name, description, image) VALUES
(1, 'ผัดไทย',
 'เส้นจันท์ผัดกับกุ้งสด เต้าหู้ และถั่วงอก — รสกลมกล่อม บีบมะนาวก่อนกิน',
 'https://img.thaicdn.net/u/surauch/movie2/shutterstock_81474712.jpg'),

(2, 'ต้มยำกุ้ง',
 'ซุปเผ็ดเปรี้ยวพร้อมกุ้งสดและสมุนไพรไทย — หอมตะไคร้ ใบมะกรูด',
 'https://s359.thaicdn.net//pagebuilder/d23c7c93-9b7b-45a4-b7e5-e508722d8369.jpg'),

(3, 'แกงเขียวหวาน',
 'แกงกะทิรสเข้ม ใส่เนื้อนุ่มๆ และใบโหระพา — กินกับข้าวสวยร้อนๆ',
 'https://www.pueasukkapab.com/wp-content/uploads/2023/03/%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B8%A1%E0%B8%B0%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99-%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9-5.webp'),

(4, 'ข้าวมันไก่',
 'ไก่ต้มเนื้อนุ่ม เสิร์ฟกับข้าวมันหอมและน้ำจิ้มรสเด็ด — จานโปรดของหลายคน',
 'https://img.thaicdn.net/u/surauch/movie2/chicken-rice.jpg'),

(5, 'กะเพราไก่ไข่ดาว',
 'ผัดกะเพรารสจัด จับคู่ไข่ดาวเยิ้ม ๆ — จานง่ายที่กินเมื่อไหร่ก็อร่อย',
 'https://s359.kapook.com/r/600/auto/pagebuilder/7595f0f5-696a-4cfe-ad3a-9cd4dd3ccbf8.jpg'),

(6, 'ส้มตำไทย',
 'มะละกอสดขูด รสเปรี้ยวหวานเผ็ด — ใส่ถั่ว และมะเขือเทศเพิ่มเท็กซ์เจอร์',
 'https://s359.kapook.com/pagebuilder/2d976efb-6441-4684-bd72-63da127bf141.jpg'),

(7, 'ข้าวผัดกุ้ง',
 'ข้าวผัดหอมกระทะ ผัดกับกุ้งสดและผัก — อิ่มง่าย เหมาะเป็นหนึ่งจาน',
 'https://static8.depositphotos.com/1029554/813/i/450/depositphotos_8136767-stock-photo-bowl-of-shrimp-stir-fry.jpg'),

(8, 'ราเม็งหมูชาชู',
 'ซุปกระดูกเข้มข้น เสิร์ฟพร้อมชาชูนุ่มและไข่ออนเซน — อุ่นใจทุกคำ',
 'https://res.cloudinary.com/jnto/image/upload/w_600,fl_lossy,f_auto,q_auto,c_scale/v1/media/filer_public/e0/3c/e03c7f75-06a7-45ed-920b-dc5d7ad6eb60/mar22_ramen_12_e4tdxz'),

(9, 'พิซซ่าซีฟู้ด',
 'หน้าเต็มทะเล กุ้ง หมึก ชีสยืด — แชร์กับเพื่อนคือฟินสุด',
 'https://static8.depositphotos.com/1177973/861/i/450/depositphotos_8618524-stock-photo-delicious-pizza-with-seafood-on.jpg');
