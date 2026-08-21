import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "fs";
import sharp from "sharp"; // المكتبة الجديدة

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "لم يتم إرفاق أي صورة" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // تحديد مجلد الحفظ داخل public/uploads
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!path.existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // إنشـاء اسم فريد للملف، وتغيير الامتداد لـ WebP
    const filename = `wall-${Date.now()}.webp`;
    const filePath = path.join(uploadDir, filename);

    // 🚀🚀 هنا السحر: استقبال البافر، تحويله لـ WebP، وضغطه، ثم حفظه 🚀🚀
    await sharp(buffer)
      .webp({ quality: 75 }) // جودة 75% ممتازة وبتقلل المساحة جداً
      .toFile(filePath);

    // إرجاع الرابط المباشر للصورة المضغوطة
    const host = request.headers.get("host");
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const imageUrl = `${protocol}://${host}/uploads/${filename}`;

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("Upload and compress error:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء معالجة الصورة" }, { status: 500 });
  }
}