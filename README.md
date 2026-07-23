# **1\. ชื่อโครงงาน**

ภาษาไทย: ระบบซื้อขายเครื่องประดับแฟชั่นออนไลน์ วิบวับ

ภาษาอังกฤษ: Wibwab – Online Fashion Jewelry E-Commerce System

# **2\. ผู้จัดทำ**

67153060 นายฐนิก ทรัพย์โนนหวาย

67130909 สราศินีย์ บุญมา

# **3\. บทนำ**

ปัจจุบันการซื้อขายสินค้าแฟชั่นผ่านช่องทางออนไลน์ได้รับความนิยมอย่างสูง โดยเฉพาะเครื่องประดับแฟชั่น เช่น แหวน สร้อยคอ ต่างหู และกำไล ซึ่งเป็นสินค้าที่ผู้บริโภคนิยมซื้อทั้งเพื่อใช้เองและเพื่อเป็นของขวัญ อย่างไรก็ตาม ร้านค้าเครื่องประดับขนาดเล็กจำนวนมากยังคงบริหารงานผ่านการจดบันทึกด้วยมือหรือผ่านช่องทางแชท ทำให้เกิดปัญหาในการจัดการคำสั่งซื้อ การตรวจสอบสต็อกสินค้าที่มีหลายไซซ์หลายสี และการสรุปยอดขาย ซึ่งใช้เวลามากและเกิดข้อผิดพลาดได้ง่าย

โครงงานนี้จึงนำเสนอการพัฒนาเว็บแอปพลิเคชันระบบซื้อขายเครื่องประดับแฟชั่นออนไลน์ ที่รองรับผู้ใช้งาน 3 กลุ่ม ได้แก่ ลูกค้า พนักงาน และแอดมิน โดยครอบคลุมกระบวนการตั้งแต่การเลือกซื้อสินค้า การชำระเงิน การจัดการคำสั่งซื้อและสต็อกสินค้า ไปจนถึงการออกรายงานสรุปสำหรับผู้บริหาร เพื่อเพิ่มประสิทธิภาพการดำเนินงานของร้านค้าและยกระดับประสบการณ์การซื้อสินค้าของลูกค้า

# **4\. วัตถุประสงค์**

1.  เพื่อพัฒนาเว็บแอปพลิเคชันซื้อขายเครื่องประดับแฟชั่นออนไลน์ที่รองรับผู้ใช้งาน 3 บทบาท ได้แก่ ลูกค้า พนักงาน และแอดมิน
2.  เพื่อออกแบบระบบจัดการสินค้าที่รองรับตัวเลือกสินค้า (Variant) หลายไซซ์ หลายสี และหลายวัสดุ
3.  เพื่อลดข้อผิดพลาดและระยะเวลาในการจัดการคำสั่งซื้อและสต็อกสินค้าของร้านค้า
4.  เพื่อให้แอดมินสามารถดูรายงานยอดขาย สต็อกสินค้า และผลประกอบการได้อย่างสะดวกและเป็นปัจจุบัน
5.  เพื่อประยุกต์ใช้ความรู้ด้านการวิเคราะห์และออกแบบระบบ ฐานข้อมูล และการพัฒนาเว็บแอปพลิเคชันในสถานการณ์เสมือนจริง

# **5\. ขอบเขตของระบบ**

## **5.1 ส่วนของลูกค้า (Customer)**

- สมัครสมาชิก เข้าสู่ระบบ และจัดการข้อมูลส่วนตัว รวมถึงรีเซ็ตรหัสผ่านผ่านลิงก์ยืนยัน
- ค้นหาและกรองสินค้าตามหมวดหมู่ วัสดุ สี ไซซ์ และช่วงราคา
- ดูรายละเอียดสินค้า เลือกตัวเลือกสินค้า (ไซซ์/สี/วัสดุ) พร้อมตารางเทียบไซซ์
- บันทึกสินค้าที่สนใจไว้ในรายการโปรด (Favorites) เพื่อกลับมาดูภายหลัง
- จัดการตะกร้าสินค้า เลือกบริการห่อของขวัญพร้อมข้อความการ์ด และใช้โค้ดส่วนลด
- มีกระเป๋าคูปองส่วนตัว (Coupon Wallet) รับคูปองอัตโนมัติเมื่อสมัครสมาชิก (Welcome Coupon) หรือคูปองที่พนักงานส่งให้เฉพาะบุคคล
- สั่งซื้อและชำระเงิน (จำลองการโอนเงินโดยแนบหลักฐานการชำระ)
- ติดตามสถานะคำสั่งซื้อ ดูประวัติการสั่งซื้อ และรีวิวสินค้าที่ซื้อจริง

## **5.2 ส่วนของพนักงาน (Staff)**

- เข้าสู่ระบบพนักงาน และดูแดชบอร์ดสรุปงานประจำวัน
- ตรวจสอบหลักฐานการชำระเงิน ยืนยันคำสั่งซื้อ และอัปเดตสถานะการจัดส่งพร้อมเลขพัสดุ
- จัดการสต็อกสินค้าแยกตามตัวเลือกสินค้า พร้อมการแจ้งเตือนสินค้าใกล้หมด
- เพิ่ม แก้ไข และซ่อนข้อมูลสินค้า รวมถึงกำหนดราคาและรูปภาพ
- สร้างและจัดการโค้ดส่วนลด พร้อมส่ง (push) เข้ากระเป๋าคูปองของลูกค้าทั้งหมดได้ในคลิกเดียว
- รับการแจ้งเตือนแบบเรียลไทม์ผ่านกระดิ่งในระบบ (คำสั่งซื้อใหม่ สลิปใหม่ รีวิวใหม่ สต็อกใกล้หมด)
- กรณีลืมรหัสผ่านของตนเอง สามารถขอรหัส OTP 6 หลักที่ส่งไปยังอีเมลจริงเพื่อตั้งรหัสผ่านใหม่ได้ทันที

## **5.3 ส่วนของแอดมิน (Admin)**

- เข้าสู่ระบบแอดมิน และดูแดชบอร์ดภาพรวมธุรกิจ
- ดูรายงานยอดขายตามช่วงเวลาและหมวดหมู่สินค้า
- ดูรายงานสินค้าคงเหลือและสินค้าขายช้า
- ดูรายงานผลประกอบการ (รายรับ ต้นทุน กำไรขั้นต้น)
- เลือกช่วงเวลาที่ต้องการดูรายงาน (รายวัน/รายสัปดาห์/รายเดือน ตามความเหมาะสมของแต่ละรายงาน) และส่งออกรายงานเป็นไฟล์ Excel/PDF
- รับการแจ้งเตือนแบบเรียลไทม์ผ่านกระดิ่งในระบบเช่นเดียวกับพนักงาน
- กรณีลืมรหัสผ่านของตนเอง สามารถขอรหัส OTP 6 หลักที่ส่งไปยังอีเมลจริงเพื่อตั้งรหัสผ่านใหม่ได้ทันที

## **5.4 นอกขอบเขตของโครงงาน (Out of Scope)**

การเชื่อมต่อระบบชำระเงินจริง (Payment Gateway), การส่ง SMS แจ้งเตือนจริง, ระบบเปลี่ยน/คืนสินค้า, ระบบสมาชิกสะสมแต้ม และการตั้งกฎส่วนลดขั้นสูงแบบหลายเงื่อนไขซ้อนกัน จะไม่พัฒนาในโครงงานนี้ (ระบบโค้ดส่วนลด+กระเป๋าคูปองพื้นฐานได้พัฒนาแล้วตามข้อ 5.1–5.2) แต่ได้ออกแบบโครงสร้างระบบให้สามารถรองรับการพัฒนาต่อยอดในอนาคต

# **6\. กลุ่มผู้ใช้งาน**

- ลูกค้า (Customer) – บุคคลทั่วไปที่ต้องการเลือกซื้อเครื่องประดับแฟชั่นผ่านช่องทางออนไลน์
- พนักงาน (Staff) – ผู้ปฏิบัติงานของร้านค้า ทำหน้าที่จัดการคำสั่งซื้อ สต็อกสินค้า และข้อมูลสินค้า
- แอดมิน (Admin) – ทำหน้าที่ติดตามภาพรวมยอดขายและผลประกอบการเพื่อการตัดสินใจ

# **7\. เครื่องมือที่ใช้พัฒนา**

## **7.1 ด้านการออกแบบ**

- Google Stitch / Figma – ออกแบบ Wireframe และ UI ของระบบทั้ง 3 ส่วน
- draw.io / PlantUML – จัดทำแผนภาพ Use Case, ER Diagram และแผนภาพขั้นตอนการทำงาน

## **7.2 ด้านการพัฒนา**

- HTML, CSS, JavaScript และ React – Frontend
- Node.js/Express (JavaScript) – Backend
- MySQL/phpMyAdmin – ฐานข้อมูล
- Docker – จำลองสภาพแวดล้อมของฐานข้อมูลและระบบ
- Visual Studio Code – เครื่องมือหลักในการเขียนโปรแกรม

# **8\. โมดูลของระบบ**

## **8.1 โมดูลส่วนของลูกค้า**

- โมดูลสมาชิก (Member) – สมัครสมาชิก เข้าสู่ระบบ จัดการโปรไฟล์และที่อยู่จัดส่ง รีเซ็ตรหัสผ่านผ่านลิงก์ยืนยัน
- โมดูลแคตตาล็อกสินค้า (Product Catalog) – แสดง ค้นหา และกรองสินค้า
- โมดูลรายละเอียดสินค้า (Product Detail) – แสดงข้อมูลสินค้า ตัวเลือกไซซ์/สี/วัสดุ และรีวิว
- โมดูลรายการโปรด (Favorites) – บันทึก/ยกเลิกสินค้าที่สนใจไว้ดูภายหลัง
- โมดูลตะกร้าสินค้า (Cart) – จัดการรายการสินค้า ห่อของขวัญ และโค้ดส่วนลด
- โมดูลกระเป๋าคูปอง (Coupon Wallet) – แสดงคูปองที่ได้รับอัตโนมัติหรือจากพนักงาน พร้อมสถานะใช้แล้ว/ยังไม่ใช้
- โมดูลสั่งซื้อและชำระเงิน (Checkout & Payment) – กรอกที่อยู่ เลือกวิธีชำระ และยืนยันคำสั่งซื้อ
- โมดูลติดตามคำสั่งซื้อ (Order Tracking) – ประวัติและสถานะคำสั่งซื้อ
- โมดูลรีวิวสินค้า (Review) – ให้คะแนนและรีวิวสินค้าที่ซื้อจริง

## **8.2 โมดูลส่วนของพนักงาน**

- โมดูลแดชบอร์ดพนักงาน (Staff Dashboard) – สรุปคำสั่งซื้อใหม่ งานค้าง และสินค้าใกล้หมด
- โมดูลจัดการคำสั่งซื้อ (Order Management) – ตรวจสอบการชำระเงินและอัปเดตสถานะ
- โมดูลจัดการสต็อก (Inventory Management) – ปรับปรุงสต็อกแยกตามตัวเลือกสินค้า
- โมดูลจัดการสินค้า (Product Management) – เพิ่ม แก้ไข ซ่อนสินค้า และจัดการตัวเลือกสินค้า
- โมดูลจัดการโปรโมชัน (Promotion Management) – สร้าง/แก้ไขโค้ดส่วนลด และส่ง (push) เข้ากระเป๋าคูปองลูกค้าทั้งหมด
- โมดูลรีเซ็ตรหัสผ่านพนักงาน (Staff Password Reset) – ยืนยันตัวตนด้วยรหัส OTP ที่ส่งอีเมลจริง

## **8.3 โมดูลส่วนของแอดมิน**

- โมดูลแดชบอร์ดผู้บริหาร (Executive Dashboard) – ภาพรวมยอดขายและตัวชี้วัดสำคัญ
- โมดูลรายงานยอดขาย (Sales Report) – ยอดขายตามช่วงเวลาและหมวดหมู่
- โมดูลรายงานสต็อก (Stock Report) – สินค้าคงเหลือ ใกล้หมด และขายช้า พร้อมเลือกช่วงเวลารายวัน/รายสัปดาห์
- โมดูลรายงานผลประกอบการ (Profit Report) – รายรับ ต้นทุน และกำไรขั้นต้น พร้อมเลือกช่วงเวลารายเดือน
- โมดูลส่งออกรายงาน (Report Export) – ส่งออกรายงานทั้งสามแบบเป็นไฟล์ Excel/PDF
- โมดูลรีเซ็ตรหัสผ่านแอดมิน (Admin Password Reset) – ยืนยันตัวตนด้วยรหัส OTP ที่ส่งอีเมลจริง

## **8.4 โมดูลกลางของระบบ**

- โมดูลยืนยันตัวตนและกำหนดสิทธิ์ (Authentication & Authorization) – ควบคุมการเข้าถึงตามบทบาท แยก session ของลูกค้า/พนักงาน/แอดมินออกจากกันโดยสิ้นเชิง
- โมดูลจัดการสต็อกอัตโนมัติ (Stock Engine) – ตัดและคืนสต็อกอัตโนมัติเมื่อเกิดคำสั่งซื้อหรือการยกเลิก
- โมดูลแจ้งเตือน (Notification) – แจ้งพนักงาน/แอดมินแบบเรียลไทม์ผ่านกระดิ่งแจ้งเตือนในระบบเมื่อมีคำสั่งซื้อใหม่ สลิปใหม่ รีวิวใหม่ หรือสต็อกใกล้หมด; ฝั่งลูกค้าใช้ลิงก์รีเซ็ตรหัสผ่านแบบจำลอง (แสดงบนหน้าจอ) ส่วนพนักงาน/แอดมินใช้รหัส OTP ที่ส่งอีเมลจริงเมื่อรีเซ็ตรหัสผ่านของตนเอง

# **9\. ขั้นตอนการทำงานของระบบ**

ระบบมีกระบวนการหลักเป็นวงจรคำสั่งซื้อ (Order Lifecycle) ที่เชื่อมโยงผู้ใช้งานทั้ง 3 บทบาท ดังนี้

1.  ลูกค้าเลือกสินค้า ระบุตัวเลือก (ไซซ์/สี/วัสดุ) เลือกบริการห่อของขวัญ ใช้คูปองส่วนลด (ถ้ามี) และทำการสั่งซื้อพร้อมแนบหลักฐานการชำระเงิน
2.  ระบบบันทึกคำสั่งซื้อภายใน transaction เดียว (ตัดสต็อกตามตัวเลือกสินค้าที่ถูกซื้อ + บันทึกการใช้คูปอง) และแจ้งเตือนคำสั่งซื้อใหม่ผ่านกระดิ่งแจ้งเตือนไปยังแดชบอร์ดพนักงาน
3.  พนักงานตรวจสอบหลักฐานการชำระเงินและยืนยันคำสั่งซื้อ สถานะเปลี่ยนเป็น "กำลังเตรียมสินค้า"
4.  พนักงานจัดเตรียมสินค้าและห่อของขวัญตามที่ลูกค้าระบุ จากนั้นจัดส่งและบันทึกเลขพัสดุ สถานะเปลี่ยนเป็น "จัดส่งแล้ว"
5.  ลูกค้าติดตามสถานะพัสดุผ่านระบบ เมื่อได้รับสินค้าแล้วสามารถให้คะแนนและรีวิวสินค้าได้
6.  ข้อมูลการขาย สต็อก และต้นทุนจากทุกขั้นตอนถูกรวบรวมเข้าฐานข้อมูลกลาง และสรุปเป็นรายงานให้แอดมินโดยอัตโนมัติ

กรณีพิเศษ: หากคำสั่งซื้อค้างสถานะ "รอชำระเงิน" นานเกินเวลาที่กำหนด ระบบจะ**แจ้งเตือน**พนักงาน/แอดมินผ่านกระดิ่งแจ้งเตือน (ไม่ได้ยกเลิกคำสั่งซื้อให้อัตโนมัติ) เพื่อให้พนักงานตรวจสอบและกดยกเลิกออเดอร์เอง ซึ่งขั้นตอนยกเลิกจะคืนสต็อกให้ทันที

# **10\. ผลที่คาดว่าจะได้รับ**

1.  ได้เว็บแอปพลิเคชันซื้อขายเครื่องประดับแฟชั่นออนไลน์ที่ทำงานได้ครบทั้ง 3 บทบาทผู้ใช้งาน
2.  ร้านค้าสามารถจัดการคำสั่งซื้อและสต็อกสินค้าหลายตัวเลือกได้อย่างถูกต้องและรวดเร็วขึ้น
3.  แอดมินสามารถเข้าถึงรายงานยอดขายและผลประกอบการที่เป็นปัจจุบัน เพื่อประกอบการตัดสินใจทางธุรกิจ
4.  ผู้จัดทำได้ฝึกทักษะการวิเคราะห์ ออกแบบ และพัฒนาระบบสารสนเทศอย่างครบวงจร ตั้งแต่การเก็บความต้องการจนถึงการนำเสนอผลงาน

# **11\. ระยะเวลาดำเนินงาน**

ศึกษาความต้องการและวิเคราะห์ระบบ สัปดาห์ที่ 1 ✅

ออกแบบฐานข้อมูล และ Use Case สัปดาห์ที่ 1 ✅

ออกแบบ UI สัปดาห์ที่ 2 ✅

พัฒนาส่วนของลูกค้า สัปดาห์ที่ 2 ✅

พัฒนาส่วนของพนักงาน สัปดาห์ที่ 2 ✅

พัฒนาส่วนของแอดมิน สัปดาห์ที่ 2–3 ✅

ทดสอบระบบและแก้ไขข้อผิดพลาด สัปดาห์ที่ 3 ✅

จัดทำเอกสารประกอบและเตรียมนำเสนอ สัปดาห์ที่ 4 ✅

# **12\. สิ่งที่ต้องส่งมอบ**

1.  เอกสารข้อเสนอโครงงาน 
2.  เอกสารการวิเคราะห์และออกแบบระบบ 
3.  งานออกแบบ Wireframe และ UI ของระบบทั้ง 3 ส่วน 
4.  เว็บแอปพลิเคชันต้นแบบที่สาธิตการทำงานได้ตามขอบเขตของระบบ 
5.  สไลด์นำเสนอผลงานและการสาธิตระบบ 

# **13\. แผนภาพระบบ (System Diagrams)**

## **13.1 ER Diagram (โครงสร้างฐานข้อมูล)**

<img width="8192" height="5790" alt="schema" src="https://github.com/user-attachments/assets/6550e405-3dc0-4aa0-947a-1ec82bda838f" />

## **13.2 Class Diagram**

<img width="8192" height="4825" alt="class diagram" src="https://github.com/user-attachments/assets/052a4220-4c52-45fe-b66e-031e45dd3b1e" />

## **13.3 Sequence Diagram**

## 3.1.ลูกค้า (Customer)

ครอบคลุมเส้นทางหลักของลูกค้าตั้งแต่เลือกซื้อสินค้า จนถึงรีวิวสินค้าหลังได้รับของ

```mermaid
sequenceDiagram
    autonumber
    actor C as ลูกค้า
    participant FE as Frontend
    participant API as Backend API
    participant DB as ฐานข้อมูล
    participant ST as พนักงาน (ผู้รับแจ้งเตือน)

    Note over C,DB: ช่วงที่ 1 — ค้นหาและเลือกดูสินค้า
    C->>FE: ค้นหา/กรองสินค้า (หมวดหมู่ วัสดุ สี ไซซ์ ราคา)
    FE->>API: GET /api/products
    API->>DB: SELECT products + variants ตามเงื่อนไข
    DB-->>API: รายการสินค้า
    API-->>FE: รายการสินค้า
    FE-->>C: แสดงรายการสินค้า

    C->>FE: เปิดดูรายละเอียดสินค้า
    FE->>API: GET /api/products/:id
    API->>DB: SELECT รายละเอียด + ตัวเลือกสินค้า + รีวิว
    DB-->>API: ข้อมูลสินค้า
    API-->>FE: ข้อมูลสินค้า
    FE-->>C: แสดงตัวเลือกไซซ์/สี/วัสดุ พร้อมตารางเทียบไซซ์

    C->>FE: เลือกตัวเลือกสินค้า แล้วเพิ่มลงตะกร้า
    Note right of FE: ตะกร้าสินค้าเก็บที่ localStorage (client-side) ไม่มี API เรียก backend

    Note over C,DB: ช่วงที่ 2 — เข้าสู่ระบบและสั่งซื้อ
    C->>FE: เข้าสู่ระบบ (จำเป็นก่อนกด checkout)
    FE->>API: POST /api/auth/login
    API->>DB: ตรวจสอบอีเมล/รหัสผ่าน
    DB-->>API: ข้อมูลผู้ใช้
    API-->>FE: JWT token (role=customer)
    FE-->>C: เข้าสู่ระบบสำเร็จ

    C->>FE: กรอกที่อยู่จัดส่ง เลือกห่อของขวัญ ใส่โค้ดส่วนลด (ถ้ามี)
    FE->>API: POST /api/orders/validate-promo
    API->>DB: ตรวจสอบเงื่อนไขโค้ดส่วนลด
    DB-->>API: ผลการตรวจสอบ
    API-->>FE: ยอดส่วนลดที่คำนวณได้
    FE-->>C: แสดงยอดรวมหลังหักส่วนลด

    C->>FE: กดยืนยันสั่งซื้อ
    FE->>API: POST /api/orders
    activate API
    API->>DB: BEGIN TRANSACTION
    API->>DB: SELECT ... FOR UPDATE (ล็อกแถวตัวเลือกสินค้าที่สั่งซื้อ)
    alt สต็อกเพียงพอ
        API->>DB: INSERT orders + order_items
        API->>DB: UPDATE product_variants ตัดสต็อก
        API->>DB: COMMIT
        API->>DB: INSERT notifications (new_order)
        API-->>FE: 201 สร้างคำสั่งซื้อสำเร็จ (order_id)
        FE-->>C: แสดงหน้ายืนยันคำสั่งซื้อ
        API--)ST: แจ้งเตือนคำสั่งซื้อใหม่ผ่านกระดิ่ง
    else สต็อกไม่พอ
        API->>DB: ROLLBACK
        API-->>FE: 400 สินค้าไม่พอ
        FE-->>C: แจ้งเตือนสินค้าหมด/ไม่พอ
    end
    deactivate API

    Note over C,DB: ช่วงที่ 3 — ชำระเงินและติดตามสถานะ
    C->>FE: อัปโหลดรูปสลิปโอนเงิน
    FE->>API: POST /api/orders/:id/slip
    API->>DB: UPDATE orders SET slip_image
    API->>DB: INSERT notifications (slip_uploaded)
    API-->>FE: บันทึกสลิปสำเร็จ
    FE-->>C: แจ้งว่ารอพนักงานตรวจสอบ
    API--)ST: แจ้งเตือนสลิปใหม่ผ่านกระดิ่ง

    Note right of ST: พนักงานตรวจสอบและอัปเดตสถานะคำสั่งซื้อ<br/>(รายละเอียดดู Sequence Diagram ฝั่งพนักงาน)

    C->>FE: เปิดหน้าประวัติคำสั่งซื้อ
    FE->>API: GET /api/orders/my
    API->>DB: SELECT orders + order_items ของลูกค้า
    DB-->>API: รายการคำสั่งซื้อ + สถานะล่าสุด
    API-->>FE: รายการคำสั่งซื้อ
    FE-->>C: แสดงสถานะ (รอชำระ/กำลังเตรียม/จัดส่งแล้ว/สำเร็จ) + เลขพัสดุ

    Note over C,DB: ช่วงที่ 4 — รีวิวสินค้า (หลังสถานะเป็น "delivered")
    C->>FE: ให้คะแนน + เขียนรีวิวสินค้าที่ซื้อจริง
    FE->>API: POST /api/reviews
    API->>DB: ตรวจสอบว่าออเดอร์ delivered แล้ว และยังไม่เคยรีวิว
    alt ผ่านเงื่อนไข
        API->>DB: INSERT reviews
        API->>DB: INSERT notifications (new_review)
        API-->>FE: 201 บันทึกรีวิวสำเร็จ
        FE-->>C: แสดงรีวิวสำเร็จ
        API--)ST: แจ้งเตือนรีวิวใหม่ผ่านกระดิ่ง
    else ไม่ผ่านเงื่อนไข
        API-->>FE: 400 ไม่สามารถรีวิวได้
        FE-->>C: แจ้งเหตุผล (ยังไม่ได้รับสินค้า หรือรีวิวไปแล้ว)
    end
```

---

## 3.2. Sequence Diagram — พนักงาน (Staff)

ครอบคลุมงานประจำวันของพนักงาน: ตรวจสอบและยืนยันคำสั่งซื้อ จัดส่งสินค้า จัดการสต็อก สินค้า และโปรโมชัน

```mermaid
sequenceDiagram
    autonumber
    actor S as พนักงาน
    participant FE as Frontend
    participant API as Backend API
    participant DB as ฐานข้อมูล
    actor C as ลูกค้า (ผู้ได้รับผล)

    Note over S,DB: ช่วงที่ 1 — เข้าสู่ระบบและดูภาพรวมงาน
    S->>FE: กรอกอีเมล/รหัสผ่านพนักงาน
    FE->>API: POST /api/auth/login
    API->>DB: ตรวจสอบบัญชี (role=staff)
    DB-->>API: ข้อมูลผู้ใช้
    API-->>FE: JWT token (role=staff)
    FE-->>S: เข้าสู่แดชบอร์ดพนักงาน

    S->>FE: เปิดแดชบอร์ด
    FE->>API: GET /api/staff/dashboard
    API->>DB: SELECT สรุปคำสั่งซื้อใหม่/งานค้าง/สต็อกใกล้หมด
    DB-->>API: ข้อมูลสรุป
    API-->>FE: ข้อมูลสรุป
    FE-->>S: แสดงแดชบอร์ด

    S->>FE: เปิดกระดิ่งแจ้งเตือน
    FE->>API: GET /api/staff/notifications
    API->>DB: SELECT notifications (new_order, slip_uploaded, order_cancelled, new_review)
    DB-->>API: รายการแจ้งเตือน
    API-->>FE: รายการแจ้งเตือน
    FE-->>S: แสดงรายการแจ้งเตือน

    Note over S,DB: ช่วงที่ 2 — ตรวจสอบและยืนยันคำสั่งซื้อ
    S->>FE: เปิดคำสั่งซื้อ ตรวจสอบรูปสลิปโอนเงิน
    FE->>API: GET /api/staff/orders/:id
    API->>DB: SELECT รายละเอียดคำสั่งซื้อ + สลิป
    DB-->>API: รายละเอียดคำสั่งซื้อ
    API-->>FE: รายละเอียดคำสั่งซื้อ
    FE-->>S: แสดงรายละเอียด + รูปสลิป

    S->>FE: กดยืนยันการชำระเงิน
    FE->>API: PUT /api/staff/orders/:id/verify-payment
    API->>DB: UPDATE orders SET status = 'paid'
    API-->>FE: อัปเดตสำเร็จ
    FE-->>S: สถานะเปลี่ยนเป็น "ชำระเงินแล้ว"
    API--)C: ลูกค้าเห็นสถานะเปลี่ยนเมื่อเข้าดูภายหลัง

    Note over S,DB: ช่วงที่ 3 — เตรียมและจัดส่งสินค้า
    S->>FE: อัปเดตสถานะเป็น "กำลังเตรียมสินค้า"
    FE->>API: PUT /api/staff/orders/:id/status (preparing)
    alt เดินสถานะตามลำดับที่ถูกต้อง
        API->>DB: UPDATE orders SET status = 'preparing'
        API-->>FE: อัปเดตสำเร็จ
        FE-->>S: แสดงสถานะล่าสุด
    else ข้ามขั้นตอน (เช่น paid → delivered ตรงๆ)
        API-->>FE: 400 ปฏิเสธ ต้องเดินสถานะทีละขั้น
        FE-->>S: แจ้งข้อผิดพลาด
    end

    S->>FE: บรรจุสินค้า ห่อของขวัญ (ถ้าลูกค้าเลือก) แล้วจัดส่ง กรอกเลขพัสดุ
    FE->>API: PUT /api/staff/orders/:id/status (shipped + tracking_number)
    alt กรอกเลขพัสดุครบถ้วน
        API->>DB: UPDATE orders SET status = 'shipped', tracking_number
        API-->>FE: อัปเดตสำเร็จ
        FE-->>S: แสดงสถานะ "จัดส่งแล้ว"
        API--)C: ลูกค้าติดตามพัสดุผ่านเลขพัสดุได้
    else ไม่ระบุเลขพัสดุ
        API-->>FE: 400 ต้องระบุเลขพัสดุก่อนเปลี่ยนสถานะ
        FE-->>S: แจ้งให้กรอกเลขพัสดุ
    end

    Note over S,DB: ช่วงที่ 4 — จัดการสต็อกสินค้า
    S->>FE: เปิดหน้าจัดการสต็อก ปรับจำนวนตัวเลือกสินค้า
    FE->>API: PUT /api/staff/inventory/variants/:variantId/stock
    API->>DB: UPDATE product_variants SET stock_qty
    API->>DB: ตรวจ stock_qty เทียบ low_stock_threshold
    opt สต็อกลดลงถึงเกณฑ์ใกล้หมด/หมด
        API->>DB: INSERT notifications (low_stock)
    end
    API-->>FE: ปรับสต็อกสำเร็จ
    FE-->>S: แสดงจำนวนสต็อกล่าสุด

    Note over S,DB: ช่วงที่ 5 — จัดการสินค้าและโปรโมชัน
    S->>FE: เพิ่ม/แก้ไข/ซ่อนสินค้า กำหนดราคาและรูปภาพ
    FE->>API: POST หรือ PUT /api/staff/products
    API->>DB: บันทึกข้อมูลสินค้า + ตัวเลือกสินค้า
    API-->>FE: บันทึกสำเร็จ
    FE-->>S: แสดงรายการสินค้าล่าสุด

    S->>FE: สร้างโค้ดส่วนลด
    FE->>API: POST /api/staff/promos
    API->>DB: INSERT promo_codes
    API-->>FE: สร้างโค้ดสำเร็จ
    FE-->>S: แสดงโค้ดส่วนลดที่สร้าง

    S->>FE: กดส่ง (push) คูปองเข้ากระเป๋าลูกค้าทั้งหมด
    FE->>API: POST /api/staff/promos/:id/push
    API->>DB: INSERT user_coupons ให้ลูกค้าทุกคนในระบบ
    API-->>FE: ส่งคูปองสำเร็จ
    FE-->>S: แสดงจำนวนลูกค้าที่ได้รับคูปอง
    API--)C: คูปองปรากฏในกระเป๋าคูปองของลูกค้า
```

---

## 3.3. Sequence Diagram — แอดมิน (Admin)

ครอบคลุมการเข้าสู่ระบบ (รวมกรณีลืมรหัสผ่านด้วย OTP อีเมลจริง) การดูแดชบอร์ดภาพรวม และการดู/ส่งออกรายงานทั้ง 3 ประเภท

```mermaid
sequenceDiagram
    autonumber
    actor A as แอดมิน
    participant FE as Frontend
    participant API as Backend API
    participant DB as ฐานข้อมูล
    participant MAIL as ระบบอีเมล (SMTP)

    Note over A,DB: ช่วงที่ 1 — เข้าสู่ระบบ
    A->>FE: กรอกอีเมล/รหัสผ่านแอดมิน
    FE->>API: POST /api/auth/login
    API->>DB: ตรวจสอบบัญชี (role=admin)
    DB-->>API: ข้อมูลผู้ใช้
    API-->>FE: JWT token (role=admin)
    FE-->>A: เข้าสู่แดชบอร์ดผู้บริหาร

    opt กรณีลืมรหัสผ่าน
        A->>FE: ขอรีเซ็ตรหัสผ่าน
        FE->>API: POST /api/admin-auth/forgot-password
        API->>DB: สร้างรหัส OTP 6 หลัก + บันทึกเวลาหมดอายุ
        API->>MAIL: ส่งอีเมล OTP
        MAIL-->>A: อีเมลรหัส OTP
        A->>FE: กรอก OTP + ตั้งรหัสผ่านใหม่
        FE->>API: POST /api/admin-auth/reset-password
        API->>DB: ตรวจสอบ OTP (ยังไม่หมดอายุ/ยังไม่ถูกใช้) แล้วอัปเดตรหัสผ่าน
        API-->>FE: ตั้งรหัสผ่านใหม่สำเร็จ
        FE-->>A: เข้าสู่ระบบด้วยรหัสผ่านใหม่ได้ทันที
    end

    Note over A,DB: ช่วงที่ 2 — ภาพรวมธุรกิจและแจ้งเตือน
    A->>FE: เปิดแดชบอร์ดผู้บริหาร
    FE->>API: GET /api/admin/dashboard
    API->>DB: SELECT ยอดขาย/KPI/สินค้าขายดี
    DB-->>API: ข้อมูลสรุป
    API-->>FE: ข้อมูลสรุป + กราฟ
    FE-->>A: แสดงแดชบอร์ด

    A->>FE: เปิดกระดิ่งแจ้งเตือน
    FE->>API: GET /api/admin/notifications
    API->>DB: กวาดหาออเดอร์ค้างสถานะ pending_payment เกิน 24 ชม.
    opt พบออเดอร์ค้างที่ยังไม่เคยแจ้ง
        API->>DB: INSERT notifications (order_overdue)
    end
    API->>DB: SELECT notifications (low_stock, order_overdue)
    DB-->>API: รายการแจ้งเตือน
    API-->>FE: รายการแจ้งเตือน
    FE-->>A: แสดงรายการแจ้งเตือน

    Note over A,DB: ช่วงที่ 3 — ดูรายงานตามช่วงเวลา
    A->>FE: เลือกช่วงเวลา ดูรายงานยอดขาย
    FE->>API: GET /api/admin/reports/sales
    API->>DB: SELECT/รวมยอดขายตามช่วงเวลา + หมวดหมู่สินค้า
    DB-->>API: ข้อมูลรายงานยอดขาย
    API-->>FE: ข้อมูลรายงานยอดขาย
    FE-->>A: แสดงกราฟ/ตารางยอดขาย

    A->>FE: ดูรายงานสต็อกสินค้า
    FE->>API: GET /api/admin/reports/stock
    API->>DB: SELECT สินค้าคงเหลือ/ใกล้หมด/ขายช้า
    DB-->>API: ข้อมูลรายงานสต็อก
    API-->>FE: ข้อมูลรายงานสต็อก
    FE-->>A: แสดงรายงานสต็อก

    A->>FE: ดูรายงานผลประกอบการ
    FE->>API: GET /api/admin/reports/profit
    API->>DB: SELECT รายรับ/ต้นทุน/กำไรขั้นต้น
    DB-->>API: ข้อมูลรายงานผลประกอบการ
    API-->>FE: ข้อมูลรายงานผลประกอบการ
    FE-->>A: แสดงรายงานผลประกอบการ

    Note over A,DB: ช่วงที่ 4 — ส่งออกรายงาน
    A->>FE: กดส่งออกรายงาน (Excel/PDF)
    FE->>API: GET /api/admin/reports/{sales|stock|profit}/export
    API->>DB: ดึงข้อมูลตามช่วงเวลาที่เลือก
    DB-->>API: ข้อมูลรายงาน
    API->>API: สร้างไฟล์ด้วย exceljs (Excel) หรือ pdfkit (PDF)
    API-->>FE: ไฟล์รายงาน
    FE-->>A: ดาวน์โหลดไฟล์รายงาน
```

---

## **13.4 Use Case Diagram**

<img width="2599" height="1780" alt="use_case_diagram" src="https://github.com/user-attachments/assets/19172f1e-c2d8-411c-806a-12711a3f63b1" />

# **14\. โครงสร้างฐานข้อมูล (Database Schema)**

ฐานข้อมูล MySQL ชื่อ `wibwab_db` — โครงสร้างตาราง (`schema.json`):

```json
{
  "database": "wibwab",
  "description": "E-commerce platform database schema (Wibwab)",
  "generated_from": "wibwab_db.pdf",
  "tables": {
    "users": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "email", "type": "varchar(255)", "nullable": false },
        { "name": "password_hash", "type": "varchar(255)", "nullable": false },
        { "name": "full_name", "type": "varchar(150)", "nullable": false },
        { "name": "phone", "type": "varchar(20)", "nullable": true, "default": null },
        { "name": "role", "type": "enum", "enum_values": ["customer", "staff", "admin"], "nullable": false, "default": "customer" },
        { "name": "created_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP" },
        { "name": "updated_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP", "extra": "on update CURRENT_TIMESTAMP" }
      ],
      "foreign_keys": []
    },
    "addresses": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "user_id", "type": "int", "nullable": false },
        { "name": "recipient_name", "type": "varchar(150)", "nullable": false },
        { "name": "phone", "type": "varchar(20)", "nullable": false },
        { "name": "address_line", "type": "varchar(255)", "nullable": false },
        { "name": "subdistrict", "type": "varchar(100)", "nullable": false },
        { "name": "district", "type": "varchar(100)", "nullable": false },
        { "name": "province", "type": "varchar(100)", "nullable": false },
        { "name": "postal_code", "type": "varchar(10)", "nullable": false },
        { "name": "is_default", "type": "tinyint(1)", "nullable": false, "default": 0 },
        { "name": "created_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP" }
      ],
      "foreign_keys": [
        { "column": "user_id", "references_table": "users", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" }
      ]
    },
    "categories": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "name", "type": "varchar(100)", "nullable": false },
        { "name": "description", "type": "varchar(255)", "nullable": true, "default": null }
      ],
      "foreign_keys": []
    },
    "products": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "category_id", "type": "int", "nullable": false },
        { "name": "name", "type": "varchar(200)", "nullable": false },
        { "name": "description", "type": "text", "nullable": true, "default": null },
        { "name": "is_visible", "type": "tinyint(1)", "nullable": false, "default": 1 },
        { "name": "created_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP" },
        { "name": "updated_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP", "extra": "on update CURRENT_TIMESTAMP" }
      ],
      "foreign_keys": [
        { "column": "category_id", "references_table": "categories", "references_column": "id", "on_update": "RESTRICT", "on_delete": "RESTRICT" }
      ]
    },
    "product_images": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "product_id", "type": "int", "nullable": false },
        { "name": "image_path", "type": "varchar(255)", "nullable": false },
        { "name": "is_primary", "type": "tinyint(1)", "nullable": false, "default": 0 },
        { "name": "sort_order", "type": "int", "nullable": false, "default": 0 }
      ],
      "foreign_keys": [
        { "column": "product_id", "references_table": "products", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" }
      ]
    },
    "product_variants": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "product_id", "type": "int", "nullable": false },
        { "name": "sku", "type": "varchar(50)", "nullable": false },
        { "name": "size", "type": "varchar(50)", "nullable": true, "default": null },
        { "name": "color", "type": "varchar(50)", "nullable": true, "default": null },
        { "name": "material", "type": "varchar(100)", "nullable": true, "default": null },
        { "name": "price", "type": "decimal(10,2)", "nullable": false },
        { "name": "cost_price", "type": "decimal(10,2)", "nullable": false, "default": 0.00 },
        { "name": "stock_qty", "type": "int", "nullable": false, "default": 0 },
        { "name": "low_stock_threshold", "type": "int", "nullable": false, "default": 5 },
        { "name": "is_active", "type": "tinyint(1)", "nullable": false, "default": 1 }
      ],
      "foreign_keys": [
        { "column": "product_id", "references_table": "products", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" }
      ]
    },
    "favorites": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "user_id", "type": "int", "nullable": false },
        { "name": "product_id", "type": "int", "nullable": false },
        { "name": "created_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP" }
      ],
      "foreign_keys": [
        { "column": "user_id", "references_table": "users", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" },
        { "column": "product_id", "references_table": "products", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" }
      ]
    },
    "promo_codes": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "code", "type": "varchar(50)", "nullable": false },
        { "name": "discount_type", "type": "enum", "enum_values": ["percent", "fixed"], "nullable": false },
        { "name": "discount_value", "type": "decimal(10,2)", "nullable": false },
        { "name": "min_order_total", "type": "decimal(10,2)", "nullable": false, "default": 0.00 },
        { "name": "expires_at", "type": "datetime", "nullable": true, "default": null },
        { "name": "usage_limit", "type": "int", "nullable": true, "default": null },
        { "name": "used_count", "type": "int", "nullable": false, "default": 0 },
        { "name": "is_active", "type": "tinyint(1)", "nullable": false, "default": 1 },
        { "name": "push_trigger", "type": "enum", "enum_values": ["manual", "on_register"], "nullable": false, "default": "manual" },
        { "name": "label", "type": "varchar(150)", "nullable": true, "default": null }
      ],
      "foreign_keys": []
    },
    "orders": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "user_id", "type": "int", "nullable": false },
        { "name": "status", "type": "enum", "enum_values": ["pending_payment", "paid", "preparing", "shipped", "delivered", "cancelled"], "nullable": false, "default": "pending_payment" },
        { "name": "shipping_name", "type": "varchar(150)", "nullable": false },
        { "name": "shipping_phone", "type": "varchar(20)", "nullable": false },
        { "name": "shipping_address", "type": "text", "nullable": false },
        { "name": "shipping_postal_code", "type": "varchar(10)", "nullable": false },
        { "name": "subtotal", "type": "decimal(10,2)", "nullable": false },
        { "name": "discount_amount", "type": "decimal(10,2)", "nullable": false, "default": 0.00 },
        { "name": "promo_code_id", "type": "int", "nullable": true, "default": null },
        { "name": "gift_wrap", "type": "tinyint(1)", "nullable": false, "default": 0 },
        { "name": "gift_message", "type": "text", "nullable": true, "default": null },
        { "name": "total_amount", "type": "decimal(10,2)", "nullable": false },
        { "name": "slip_image", "type": "varchar(255)", "nullable": true, "default": null },
        { "name": "tracking_number", "type": "varchar(100)", "nullable": true, "default": null },
        { "name": "paid_at", "type": "datetime", "nullable": true, "default": null },
        { "name": "created_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP" },
        { "name": "updated_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP", "extra": "on update CURRENT_TIMESTAMP" }
      ],
      "foreign_keys": [
        { "column": "user_id", "references_table": "users", "references_column": "id", "on_update": "RESTRICT", "on_delete": "RESTRICT" },
        { "column": "promo_code_id", "references_table": "promo_codes", "references_column": "id", "on_update": "RESTRICT", "on_delete": "SET_NULL" }
      ]
    },
    "order_items": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "order_id", "type": "int", "nullable": false },
        { "name": "variant_id", "type": "int", "nullable": false },
        { "name": "quantity", "type": "int", "nullable": false },
        { "name": "unit_price", "type": "decimal(10,2)", "nullable": false },
        { "name": "unit_cost", "type": "decimal(10,2)", "nullable": false, "default": 0.00 }
      ],
      "foreign_keys": [
        { "column": "order_id", "references_table": "orders", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" },
        { "column": "variant_id", "references_table": "product_variants", "references_column": "id", "on_update": "RESTRICT", "on_delete": "RESTRICT" }
      ]
    },
    "user_coupons": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "user_id", "type": "int", "nullable": false },
        { "name": "promo_code_id", "type": "int", "nullable": false },
        { "name": "is_used", "type": "tinyint(1)", "nullable": false, "default": 0 },
        { "name": "used_order_id", "type": "int", "nullable": true, "default": null },
        { "name": "assigned_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP" },
        { "name": "used_at", "type": "datetime", "nullable": true, "default": null }
      ],
      "foreign_keys": [
        { "column": "user_id", "references_table": "users", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" },
        { "column": "promo_code_id", "references_table": "promo_codes", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" },
        { "column": "used_order_id", "references_table": "orders", "references_column": "id", "on_update": "RESTRICT", "on_delete": "SET_NULL" }
      ]
    },
    "reviews": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "user_id", "type": "int", "nullable": false },
        { "name": "product_id", "type": "int", "nullable": false },
        { "name": "order_id", "type": "int", "nullable": false },
        { "name": "rating", "type": "tinyint", "nullable": false },
        { "name": "comment", "type": "text", "nullable": true, "default": null },
        { "name": "created_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP" }
      ],
      "foreign_keys": [
        { "column": "user_id", "references_table": "users", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" },
        { "column": "product_id", "references_table": "products", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" },
        { "column": "order_id", "references_table": "orders", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" }
      ]
    },
    "notifications": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "type", "type": "enum", "enum_values": ["new_order", "slip_uploaded", "order_cancelled", "new_review", "low_stock", "order_overdue"], "nullable": false },
        { "name": "message", "type": "varchar(255)", "nullable": false },
        { "name": "order_id", "type": "int", "nullable": true, "default": null },
        { "name": "variant_id", "type": "int", "nullable": true, "default": null },
        { "name": "product_id", "type": "int", "nullable": true, "default": null },
        { "name": "review_id", "type": "int", "nullable": true, "default": null },
        { "name": "is_read", "type": "tinyint(1)", "nullable": false, "default": 0 },
        { "name": "created_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP" }
      ],
      "foreign_keys": [
        { "column": "order_id", "references_table": "orders", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" },
        { "column": "variant_id", "references_table": "product_variants", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" },
        { "column": "product_id", "references_table": "products", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" },
        { "column": "review_id", "references_table": "reviews", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" }
      ]
    },
    "password_resets": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "token", "type": "varchar(255)", "nullable": false },
        { "name": "user_id", "type": "int", "nullable": false },
        { "name": "expires_at", "type": "datetime", "nullable": false },
        { "name": "used", "type": "tinyint(1)", "nullable": false, "default": 0 },
        { "name": "created_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP" }
      ],
      "foreign_keys": [
        { "column": "user_id", "references_table": "users", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" }
      ]
    },
    "password_reset_otps": {
      "columns": [
        { "name": "id", "type": "int", "nullable": false, "extra": "auto_increment", "primary_key": true },
        { "name": "user_id", "type": "int", "nullable": false },
        { "name": "otp_code", "type": "varchar(6)", "nullable": false },
        { "name": "expires_at", "type": "datetime", "nullable": false },
        { "name": "used", "type": "tinyint(1)", "nullable": false, "default": 0 },
        { "name": "created_at", "type": "timestamp", "nullable": false, "default": "CURRENT_TIMESTAMP" }
      ],
      "foreign_keys": [
        { "column": "user_id", "references_table": "users", "references_column": "id", "on_update": "RESTRICT", "on_delete": "CASCADE" }
      ]
    }
  },
  "relationships": [
    { "from_table": "addresses", "from_column": "user_id", "to_table": "users", "to_column": "id", "type": "many_to_one" },
    { "from_table": "favorites", "from_column": "user_id", "to_table": "users", "to_column": "id", "type": "many_to_one" },
    { "from_table": "favorites", "from_column": "product_id", "to_table": "products", "to_column": "id", "type": "many_to_one" },
    { "from_table": "orders", "from_column": "user_id", "to_table": "users", "to_column": "id", "type": "many_to_one" },
    { "from_table": "orders", "from_column": "promo_code_id", "to_table": "promo_codes", "to_column": "id", "type": "many_to_one" },
    { "from_table": "order_items", "from_column": "order_id", "to_table": "orders", "to_column": "id", "type": "many_to_one" },
    { "from_table": "order_items", "from_column": "variant_id", "to_table": "product_variants", "to_column": "id", "type": "many_to_one" },
    { "from_table": "password_resets", "from_column": "user_id", "to_table": "users", "to_column": "id", "type": "many_to_one" },
    { "from_table": "password_reset_otps", "from_column": "user_id", "to_table": "users", "to_column": "id", "type": "many_to_one" },
    { "from_table": "products", "from_column": "category_id", "to_table": "categories", "to_column": "id", "type": "many_to_one" },
    { "from_table": "product_images", "from_column": "product_id", "to_table": "products", "to_column": "id", "type": "many_to_one" },
    { "from_table": "product_variants", "from_column": "product_id", "to_table": "products", "to_column": "id", "type": "many_to_one" },
    { "from_table": "reviews", "from_column": "user_id", "to_table": "users", "to_column": "id", "type": "many_to_one" },
    { "from_table": "reviews", "from_column": "product_id", "to_table": "products", "to_column": "id", "type": "many_to_one" },
    { "from_table": "reviews", "from_column": "order_id", "to_table": "orders", "to_column": "id", "type": "many_to_one" },
    { "from_table": "user_coupons", "from_column": "user_id", "to_table": "users", "to_column": "id", "type": "many_to_one" },
    { "from_table": "user_coupons", "from_column": "promo_code_id", "to_table": "promo_codes", "to_column": "id", "type": "many_to_one" },
    { "from_table": "user_coupons", "from_column": "used_order_id", "to_table": "orders", "to_column": "id", "type": "many_to_one" },
    { "from_table": "notifications", "from_column": "order_id", "to_table": "orders", "to_column": "id", "type": "many_to_one" },
    { "from_table": "notifications", "from_column": "variant_id", "to_table": "product_variants", "to_column": "id", "type": "many_to_one" },
    { "from_table": "notifications", "from_column": "product_id", "to_table": "products", "to_column": "id", "type": "many_to_one" },
    { "from_table": "notifications", "from_column": "review_id", "to_table": "reviews", "to_column": "id", "type": "many_to_one" }
  ]
}
```

# **15\. งานออกแบบ Wireframe และ UI (ทั้ง 3 ส่วน)**

ตามที่ระบุไว้ในข้อ 12 (สิ่งที่ต้องส่งมอบ) — งานออกแบบ Wireframe และ UI ของระบบครบทั้ง 3 บทบาทผู้ใช้งาน
https://www.figma.com/design/IA7juX8Hqbx1VnFx0TBDHk/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84?node-id=0-1&t=7W1MlIc182RiEt2u-1

## **15.1 ส่วนของลูกค้า (Customer)**

<img width="1433" height="890" alt="customer" src="https://github.com/user-attachments/assets/0d1ead82-fa0b-4264-bcbd-7a5a617634a7" />

## **15.2 ส่วนของพนักงาน (Staff)**

<img width="1536" height="657" alt="staff" src="https://github.com/user-attachments/assets/e9fae821-016b-496f-9d1d-a8d64692c972" />

## **15.3 ส่วนของแอดมิน (Admin)**

<img width="1598" height="803" alt="admin" src="https://github.com/user-attachments/assets/2f839904-cbbb-4629-b4ef-0e9814019bd0" />

# **16\. ผลตรวจสอบทางเทคนิค (UAT Test Case)**

| รหัสทดสอบ | วิธีตรวจ | ผลตรวจสอบทางเทคนิค | รายละเอียด |
| ----- | ----- | :---: | ----- |
| **Persona: Customer** |  |  |  |
| **UAT-C01** | ยิง POST /api/auth/register จริง | **✓** | สมัครสำเร็จ 201, สมัครซ้ำอีเมลเดิมถูกปฏิเสธ 400 |
| **UAT-C01b** | ยิง POST /api/auth/register ด้วยอีเมลผิดรูปแบบ | **✓** | ปฏิเสธ 400 "รูปแบบอีเมลไม่ถูกต้อง" |
| **UAT-C02** | ยิง POST /api/auth/login | **✓** | รหัสถูกต้อง 200 + token, รหัสผิด 401 |
| **UAT-C03** | ยิง forgot-password → reset-password → login | **✓** | ตั้งรหัสใหม่ได้, รหัสเดิมใช้ไม่ได้, token เดิมใช้ซ้ำถูกปฏิเสธ 400 |
| **UAT-C04** | ยิง GET /api/products พร้อม keyword/category/price | **✓** | ค้นหา "แหวน" ได้ 2 รายการตรงชื่อ, คำที่ไม่มีสินค้าได้ผลว่าง, กรองรวมกันทำงานถูกต้อง |
| **UAT-C05** | ทดสอบด้วยตนเองผ่านเบราว์เซอร์ (Manual — เลือก variant และเพิ่มลงตะกร้าจริงใน ProductDetailPage/CartPage) | **✓** | เลือกไซซ์/สีผ่าน VariantSelector แล้วเพิ่มลงตะกร้าได้ถูกต้อง ราคารวมตรงตาม variant ที่เลือก, ปุ่ม "เพิ่มลงตะกร้า" ถูก disabled เมื่อยังไม่เลือก variant, variant ที่ stock_qty=0 เพิ่มลงตะกร้าไม่ได้, ปรับจำนวนเกินสต็อกถูก clamp ไม่ให้เกิน stock_qty จริง |
| **UAT-C06** | สร้างออเดอร์จริง + แนบสลิปจริง | **✓** | สร้างออเดอร์สำเร็จ 201, แนบสลิปสำเร็จ, สต็อกถูกตัดถูกต้อง |
| **UAT-C06b** | ยิง POST /api/orders พร้อมกัน 2 request ด้วย payload เดียวกัน | **✗** | ทั้ง 2 request สร้างออเดอร์สำเร็จพร้อมกัน (order_id ต่างกัน) — ระบบไม่มีกลไกกันคำขอซ้ำระดับ API เลย มีแค่ปุ่ม frontend disabled={isSubmitting} ที่ CheckoutPage.jsx กันคลิกซ้ำได้ระดับ UI เท่านั้น หากมี 2 request เข้าพร้อมกันจริง (เน็ตกระตุก/retry) จะได้ออเดอร์ซ้ำ |
| **UAT-C06c** | ยิงสั่งซื้อ variant ที่ stock_qty = 0 | **✓** | ปฏิเสธ 400 "มีไม่พอ (เหลือ 0 ชิ้น)" ไม่สร้างออเดอร์ |
| **UAT-C06d** | เทียบ subtotal/total_amount จาก response กับคำนวณเอง | **✓** | สั่งซื้อ 490×1 + 250×2 = 990 ตรงกับที่ระบบบันทึกทุกบาท |
| **UAT-C07** | รีวิวสินค้าหลังเดินสถานะออเดอร์จนถึง delivered | **✓** | รีวิวออเดอร์ delivered สำเร็จ, รีวิวซ้ำถูกปฏิเสธ ("คุณรีวิวสินค้านี้ไปแล้ว"), รีวิวออเดอร์ที่ยังไม่ delivered ถูกปฏิเสธ |
| **Persona: Staff** |  |  |  |
| **UAT-S01** | ยิง PUT /api/staff/orders/:id/verify-payment | **✓** | เปลี่ยนสถานะ pending_payment → paid สำเร็จ |
| **UAT-S02** | ยิง PUT .../status ทีละขั้น + ข้ามขั้นโดยตั้งใจ | **✓** | ข้ามขั้น (paid→delivered ตรงๆ) ถูกปฏิเสธ 400, ไม่กรอกเลขพัสดุตอนเปลี่ยน shipped ถูกปฏิเสธ, เดินสถานะปกติครบ + เลขพัสดุถูกบันทึกจริงในฐานข้อมูล |
| **UAT-S03** | ยิง PUT .../inventory/variants/:id/stock ปรับสต็อกต่ำกว่า threshold | **✓** | ปรับสต็อก variant เดียวสำเร็จไม่กระทบตัวอื่น, ระบบสร้างแจ้งเตือน low_stock จริงในฐานข้อมูล (ยืนยันด้วย query ตรง) |
| **UAT-S03b** | ยิง POST /api/orders พร้อมกัน 5 request แย่งสต็อกที่เหลือ 2 ชิ้น (คนละบัญชี) | **✓** | สำเร็จเป๊ะ 2 request ที่เหลือถูกปฏิเสธ "มีไม่พอ" สต็อกสุดท้าย = 0 ไม่ติดลบ (แสดงว่า row locking (FOR UPDATE) ทำงานถูกต้อง) |
| **UAT-S04** | ยิง POST/PUT /api/staff/products สร้าง-แก้ไข-ซ่อนสินค้า | **✓** | สินค้าใหม่ที่ is_visible=true โผล่หน้าร้านทันที, แก้ไข+ซ่อน (is_visible=false) แล้วหายจากหน้าร้านทันที |
| **Persona: Admin** |  |  |  |
| **UAT-A01** | ยิง GET /api/admin/dashboard ด้วย token admin/staff/customer/ไม่มี token | **✓** | admin เข้าได้ 200, staff/customer ถูกปฏิเสธ 403, ไม่มี token ถูกปฏิเสธ 401 |
| **UAT-A02** | ยิง GET /api/admin/dashboard | **✓** | ระบบคำนวณ KPI/กราฟยอดขาย/top products ออกมาได้ถูกต้อง |
| **UAT-A03** | ยิง GET /api/admin/reports/sales + export | **✓** | ดูตามช่วงเวลาได้, export Excel สำเร็จ (content-type ถูกต้อง) |
| **UAT-A04** | ยิง GET /api/admin/reports/stock | **✓** | พบสินค้าใกล้หมด 4 รายการ ตรงกับฐานข้อมูล |
| **UAT-A05** | ยิง GET /api/admin/reports/profit | **✓** | เรียกดูรายงานกำไรสำเร็จ |

**สรุปผลการตรวจสอบ**

| 21 / 21 เคส ตรวจสอบครบทั้งหมด | 20 เคส ผ่านจริง | 1 เคส พบบั๊ก |
| ----- | :---: | :---: |

# **17\. เอกสาร SLA (Service Level Agreement)**

<img width="1414" height="2000" alt="เอกสาร SLA" src="https://github.com/user-attachments/assets/e162b0ce-5dd0-442f-bd24-f9a045223fce" />

# **18\. System Architecture**

## 1. ภาพรวมระบบ — 3-tier + 3 พอร์ทัลอิสระ

```mermaid
flowchart TB
    subgraph FE["Wibwab-Frontend — React SPA (Vite)"]
        direction LR
        CUST["ลูกค้า<br/>path: /"]
        STAFF["พนักงาน<br/>path: /staff/*"]
        ADM["แอดมิน<br/>path: /admin/*"]
    end

    FE -->|axios / REST| BE["Wibwab-Backend<br/>Express REST API"]
    BE -->|mysql2 pool| DB[("MySQL 8<br/>utf8mb4")]

    class CUST,STAFF,ADM portal
```

---

## 2. สถาปัตยกรรม Backend

### 2.1 Layering

```mermaid
flowchart TD
    S["server.js<br/>entry point · app.listen(PORT=8080)"] --> A["src/app.js<br/>cors() · express.json() · static /uploads · mount routes"]
    A --> R["src/routes/*.routes.js<br/>path + middleware ต่อ resource"]
    R --> MW1["middleware/auth.js<br/>verifyToken()"]
    MW1 --> MW2["middleware/role.js<br/>requireRole(...roles)"]
    MW2 --> C["src/controllers/*.controller.js<br/>parse request / เรียก service / ตอบ response"]
    C --> SV["src/services/*.service.js<br/>business logic + raw SQL (mysql2/promise)"]
    SV --> DBC["src/config/db.js<br/>connection pool กลาง"]
    DBC --> MYSQL[("MySQL 8")]

    A -.mount.-> UP["middleware/upload.js<br/>multer → uploads/products, uploads/slips"]
    A -.ท้ายสุดของ chain.-> EH["middleware/errorHandler.js"]
```

### 2.2 Route groups

```mermaid
flowchart LR
    CUST["ลูกค้า"] --> RA["/api/auth"]
    CUST --> RB["/api/products · reviews · addresses<br/>coupons · favorites · orders"]

    STAFF["พนักงาน"] --> RC["/api/staff-auth<br/>/api/staff"]

    ADM["แอดมิน"] --> RD["/api/admin-auth<br/>/api/admin"]

    NOTE["หมายเหตุ: ไม่มี /api/cart<br/>ตะกร้าเก็บฝั่ง client (localStorage) เท่านั้น"]
```

---

## 3. สถาปัตยกรรม Frontend

```mermaid
flowchart TD
    APP["src/App.jsx<br/>กำหนด route ทั้งหมด แบ่ง 3 กลุ่ม"] --> PR["components/common/ProtectedRoute.jsx<br/>ตรวจ role ก่อน render"]

    PR --> CP["pages/customer/*<br/>ธีม Rose Gold"]
    PR --> SP["pages/staff/* + StaffLayout<br/>ธีม Teal"]
    PR --> APz["pages/admin/* + AdminLayout<br/>ธีม Slate + ทอง"]

    CP --> CAC["CustomerAuthContext<br/>key: wibwab_customer_auth"]
    SP --> SAC["StaffAuthContext<br/>key: wibwab_staff_auth"]
    APz --> AAC["AdminAuthContext<br/>key: wibwab_admin_auth"]

    CP --> CART["CartContext<br/>localStorage ฝั่ง client เท่านั้น"]
    CP --> FAV["FavoritesContext"]

    CP & SP & APz --> API["src/api/*.api.js<br/>1 ไฟล์ต่อ 1 resource"]
    API --> CLIENT["src/api/client.js<br/>axios instance กลาง<br/>interceptor เลือก JWT ตาม path"]
    CLIENT -->|"baseURL relative + Vite proxy (dev)"| BACKEND["Wibwab-Backend"]
```

---

## 4. การยืนยันตัวตนและสิทธิ์ (Auth & RBAC)

```mermaid
sequenceDiagram
    actor U as ผู้ใช้ (Browser)
    participant FE as React SPA
    participant BE as Express API
    participant DB as MySQL

    U->>FE: กรอก email/password (หน้า login เฉพาะ portal)
    FE->>BE: POST /api/auth|staff-auth|admin-auth/login
    BE->>DB: ตรวจสอบ users.role ตรงกับ portal
    DB-->>BE: user record
    BE-->>FE: JWT { id, role, name }
    FE->>FE: เก็บ token แยก localStorage key ตาม role

    U->>FE: เข้าหน้า/ฟีเจอร์ที่ต้อง auth
    FE->>FE: ProtectedRoute ตรวจ role (client-side)
    FE->>BE: request + Authorization: Bearer token (auto แนบโดย client.js)
    BE->>BE: verifyToken() — JWT valid?
    BE->>BE: requireRole(...) — role อนุญาตไหม?
    BE-->>FE: 200 OK หรือ 403 Forbidden
    FE-->>U: แสดงผล หรือ redirect ไป login
```

---

## 5. ฐานข้อมูล — กลุ่มตารางตามความรับผิดชอบ

```mermaid
flowchart LR
    subgraph G1["ผู้ใช้และที่อยู่"]
        T1["users<br/>role: customer/staff/admin"]
        T2["addresses"]
    end

    subgraph G2["แคตตาล็อกสินค้า"]
        T3["categories"]
        T4["products"]
        T5["product_images"]
        T6["product_variants<br/>ราคา/ต้นทุน/สต็อก อยู่ระดับนี้"]
    end

    subgraph G3["คำสั่งซื้อ"]
        T7["orders"]
        T8["order_items<br/>snapshot unit_price/unit_cost"]
    end

    subgraph G4["โปรโมชัน"]
        T9["promo_codes"]
        T10["user_coupons<br/>กระเป๋าคูปองส่วนตัว"]
    end

    subgraph G5["รีวิว / โปรด / แจ้งเตือน"]
        T11["reviews"]
        T12["favorites"]
        T13["notifications"]
    end

    subgraph G6["รีเซ็ตรหัสผ่าน"]
        T14["password_resets<br/>ลูกค้า: token+ลิงก์จำลอง"]
        T15["password_reset_otps<br/>staff/admin: OTP อีเมลจริง"]
    end
```

---

## 6. Business flow หลัก — วงจรคำสั่งซื้อ (Order Lifecycle)

```mermaid
stateDiagram-v2
    [*] --> pending_payment: ลูกค้าสั่งซื้อ<br/>(lock + ตัดสต็อกทันที, transaction เดียว)
    pending_payment --> cancelled: ยกเลิก<br/>(คืนสต็อกทุกรายการ)
    pending_payment --> paid: แนบสลิป → พนักงานตรวจผ่าน
    paid --> preparing
    preparing --> shipped: ต้องกรอก tracking_number ก่อน
    shipped --> delivered
    delivered --> [*]: ลูกค้ารีวิวได้ (ครั้งเดียว)
    cancelled --> [*]

    note right of pending_payment
        ค้างเกิน 24 ชม. → สร้างแจ้งเตือน
        order_overdue (ไม่ auto-cancel)
    end note
```

---

## 7. ระบบแจ้งเตือน (Notification)

```mermaid
flowchart TD
    E1["order.service.js<br/>new_order, order_cancelled"] --> N[("notifications<br/>ตารางกลางเดียว")]
    E2["review.service.js<br/>new_review"] --> N
    E3["stock.service.js<br/>low_stock (กันสร้างซ้ำถ้ายังไม่อ่าน)"] --> N
    E4["staff/admin เปิดหน้าแจ้งเตือน<br/>กวาดหา order pending_payment > 24 ชม."] --> E5["order_overdue"]
    E5 --> N

    N --> BS["NotificationBell (Staff)<br/>new_order · slip_uploaded<br/>order_cancelled · new_review"]
    N --> BA["NotificationBell (Admin)<br/>low_stock · order_overdue"]

    NOTE["สร้างแบบ fire-and-forget<br/>ล้มเหลว = log error เท่านั้น ไม่ทำ flow หลัก fail"]
```

---

## 9. Dev Environment

```mermaid
flowchart LR
    subgraph DEV["เครื่อง Dev"]
        FEdev["Vite dev server :5173<br/>proxy /api, /uploads → :8080"]
        BEdev["Express :8080<br/>npm run dev (nodemon) / npm start"]
        DC["docker-compose<br/>MySQL :3306 + phpMyAdmin :8081"]
    end

    FEdev -->|proxy| BEdev
    BEdev -->|mysql2| DC
    DC -.รอบแรก volume ว่าง.-> INIT["schema.sql + seed.sql<br/>รันอัตโนมัติผ่าน docker-entrypoint-initdb.d"]

    NOTE["ยังไม่มี Dockerfile ของแอป, ไม่มี CI/CD,<br/>ไม่มี hosting config — รัน local dev เท่านั้น"]
```

#  **19\. personaa design**

---

## 1. คุณสายฝน ใจดี — ลูกค้า (Customer)

| | |
|---|---|
| **อายุ** | 27 ปี |
| **อาชีพ** | พนักงานออฟฟิศ |
| **ความถนัดเทคโนโลยี** | สูง (85%) |
| **ความถี่การใช้งาน** | ปานกลาง-สูง (70%) |

> *"ขอแค่สั่งง่าย จ่ายไว แล้วรู้สถานะของตลอดเวลา"*

**เป้าหมาย (Goals)**
- หาสินค้าที่ถูกใจได้เร็วและง่าย
- มั่นใจเรื่องการชำระเงินและการจัดส่ง
- ได้ใช้คูปอง/ส่วนลดอย่างคุ้มค่า

**ปัญหาที่เจอ (Pain Points)**
- กลัวโอนเงินแล้วไม่ได้รับของจริง
- ไม่รู้สถานะออเดอร์ระหว่างรอสินค้า
- ขั้นตอนสั่งซื้อยุ่งยากเกินไปบนมือถือ

**พฤติกรรม**
- ช้อปผ่านมือถือช่วงเย็น–ก่อนนอน
- อ่านรีวิวก่อนตัดสินใจซื้อทุกครั้ง

**ฟีเจอร์ที่ใช้บ่อย**
`ค้นหา/กรองสินค้า` · `ตะกร้า` · `แนบสลิป` · `ติดตามสถานะ` · `รีวิว`

---

## 2. คุณเอกชัย มั่นคง — พนักงาน (Staff)

| | |
|---|---|
| **อายุ** | 24 ปี |
| **อาชีพ** | พนักงานหลังบ้านร้าน |
| **ความถนัดเทคโนโลยี** | ปานกลาง (60%) |
| **ความถี่การใช้งาน** | สูงมาก (95%) |

> *"ต้องตรวจงานให้ไวและไม่พลาด ลูกค้ารอไม่ได้"*

**เป้าหมาย (Goals)**
- ตรวจสอบสลิป/อัปเดตสถานะได้รวดเร็ว แม่นยำ
- จัดการสต็อกไม่ให้สินค้าขาดหรือเกิน
- ลดขั้นตอนงานที่ต้องทำซ้ำซ้อน

**ปัญหาที่เจอ (Pain Points)**
- ออเดอร์เข้าพร้อมกันจำนวนมากช่วงพีค
- ต้องสลับไปมาหลายหน้าจอในการทำงาน

**พฤติกรรม**
- ใช้งานผ่านคอมพิวเตอร์หน้าร้านเป็นหลัก
- เปิดดูแจ้งเตือนตลอดช่วงเวลาทำงาน

**ฟีเจอร์ที่ใช้บ่อย**
`แดชบอร์ดพนักงาน` · `อัปเดตสถานะ` · `จัดการสต็อก` · `จัดการโปรโมชัน`

---

## 3. คุณพิมพ์ใจ วิบูลย์ทรัพย์ — แอดมิน (Admin)

| | |
|---|---|
| **อายุ** | 35 ปี |
| **อาชีพ** | เจ้าของ/ผู้บริหารร้าน |
| **ความถนัดเทคโนโลยี** | ปานกลาง-สูง (70%) |
| **ความถี่การใช้งาน** | ปานกลาง (45%) |

> *"อยากเห็นภาพรวมธุรกิจในที่เดียว ตัดสินใจได้ไว"*

**เป้าหมาย (Goals)**
- ติดตามยอดขาย/กำไรแบบภาพรวมได้ไว
- วางแผนสต็อกและโปรโมชันจากข้อมูลจริง
- ดึงรายงานไปนำเสนอทีมบัญชี/นักลงทุน

**ปัญหาที่เจอ (Pain Points)**
- ข้อมูลกระจัดกระจายอยู่หลายที่
- ไม่มีเวลาลงรายละเอียดทีละออเดอร์
- ต้องรอพนักงานสรุปข้อมูลให้ทุกครั้ง

**พฤติกรรม**
- เข้าดูแดชบอร์ดสัปดาห์ละหลายครั้ง
- ตัดสินใจโปรโมชันจากข้อมูลยอดขายจริง

**ฟีเจอร์ที่ใช้บ่อย**
`แดชบอร์ดผู้บริหาร` · `รายงานยอดขาย/สต็อก/กำไร` · `Export Excel/PDF` · `แจ้งเตือนทุกประเภท (low_stock, order_overdue)`



