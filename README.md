# FIA Greeting Cards - Next.js

Website thiệp chúc mừng ngày 20/10 cho câu lạc bộ FIA, được xây dựng với Next.js.

## Tính năng

- 🎨 **25 mẫu thiệp riêng** cho từng thành viên
- 🔐 **Hệ thống mật khẩu** bảo vệ thiệp cá nhân
- 📱 **Responsive design** cho mọi thiết bị
- ✨ **Animation đẹp mắt** với floating hearts và confetti
- 🌐 **URL riêng** cho từng người (ví dụ: `/phothingocminh`)
- 🎯 **SEO friendly** với Next.js

## Cài đặt

1. **Clone repository:**
```bash
git clone <repository-url>
cd fia-greeting-cards
```

2. **Cài đặt dependencies:**
```bash
npm install
```

3. **Chạy development server:**
```bash
npm run dev
```

4. **Mở trình duyệt:**
```
http://localhost:3000
```

## Build và Deploy

### Build cho production:
```bash
npm run build
```

### Deploy lên Vercel:
```bash
npm install -g vercel
vercel
```

## Clean project for GitHub

Repo đã được dọn sạch:
- Thêm `.gitignore` chuẩn cho Node/Next.js
- Xóa các file cũ không dùng: `index.html`, `script.js`, `style.css`
- Mã nguồn chính nằm trong thư mục `app/` và `lib/`

### Deploy lên GitHub Pages:
```bash
npm run build
# Upload thư mục 'out' lên GitHub Pages
```

## Cấu trúc thư mục

```
├── app/
│   ├── [slug]/          # Dynamic routes cho từng người
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── not-found.tsx    # 404 page
├── lib/
│   └── data.ts          # Dữ liệu người dùng và utilities
├── next.config.js       # Next.js config
├── package.json         # Dependencies
└── tailwind.config.js   # Tailwind CSS config
```

## Cấu hình mật khẩu

Mật khẩu hiện tại được lưu trong `lib/data.ts`. Để thay đổi mật khẩu:

1. **Mở file `lib/data.ts`**
2. **Tìm object `personData`**
3. **Thay đổi giá trị `password` cho từng người**

Ví dụ:
```typescript
"Phó Thị Ngọc Minh": {
  password: "newpassword123", // Thay đổi mật khẩu ở đây
  // ... các thuộc tính khác
}
```

## URL Structure

- **Trang chính**: `/`
- **Phó Thị Ngọc Minh**: `/phothingocminh`
- **Nguyễn Hồng Luyến**: `/nguyenhongluyen`
- **Trần Thị Phương Thảo**: `/tranthiphuongthao`
- Và tương tự cho tất cả 25 người...

## Customization

### Thay đổi màu sắc thiệp:
Chỉnh sửa `cardStyle` trong `lib/data.ts` và thêm CSS tương ứng trong `app/globals.css`.

### Thêm người mới:
1. Thêm thông tin vào `personData` trong `lib/data.ts`
2. Thêm CSS style mới trong `app/globals.css`
3. Thêm tên vào danh sách trong `app/page.tsx`

## Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build cho production
- `npm run start` - Chạy production server
- `npm run lint` - Chạy ESLint

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Google Fonts** - Comfortaa & Caveat fonts

## License

MIT License - Sử dụng tự do cho mục đích giáo dục và phi lợi nhuận.
