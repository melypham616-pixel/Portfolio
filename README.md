# Mely Portfolio – Pham Thi My Duyen

Website portfolio viết bằng **Next.js** (App Router), deploy trên Vercel.

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Cấu trúc

- `app/page.jsx` – ghép các phần của trang
- `components/` – từng phần: Hero, AboutWork, CaseStudies, Results, CreativeProjects, ExperienceToolkit, Contact; `Interactions.jsx` là lightbox ảnh + nút Copy
- `app/globals.css` – toàn bộ giao diện
- `public/images/` – ảnh
- `lib/site.js` – tên, mô tả, từ khoá SEO, URL website

## SEO

- Title, description, keywords, canonical, Open Graph, Twitter card (`app/layout.jsx`)
- Ảnh chia sẻ mạng xã hội 1200×630 tự tạo (`app/opengraph-image.jsx`)
- Dữ liệu cấu trúc schema.org Person/WebSite (`components/StructuredData.jsx`)
- `sitemap.xml`, `robots.txt`, favicon
- Một thẻ `h1` (tên), ảnh có `alt`, ảnh bên dưới tải lazy

Sau khi đưa web lên, vào Google Search Console → thêm website → gửi `sitemap.xml`.

## Deploy lên Vercel

1. Vào https://vercel.com/new, chọn repo `melypham616-pixel/Portfolio` (Framework tự nhận là Next.js).
2. Bấm **Deploy**. Mỗi lần push lên `main`, Vercel sẽ tự build lại.
3. Nếu gắn tên miền riêng, thêm biến môi trường `NEXT_PUBLIC_SITE_URL` (ví dụ `https://mely.io.vn`) rồi deploy lại để canonical, sitemap và ảnh chia sẻ dùng đúng tên miền.
