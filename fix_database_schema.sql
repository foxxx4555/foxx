-- هاد الملف بيصلح قاعدة البيانات عشان تقبل كل بيانات المنتجات
-- This file fixes the database schema to accept all product data

-- 1. إضافة عمود الوصف (Description) إذا لم يكن موجوداً
ALTER TABLE public.products
ADD COLUMN IF NOT EXISTS description TEXT;

-- 2. إضافة عمود الصور المتعددة (Images) إذا لم يكن موجوداً
ALTER TABLE public.products
ADD COLUMN IF NOT EXISTS images JSONB DEFAULT '[]'::jsonb;

-- 3. إضافة عمود "نافذ الكمية" (Is out of stock) إذا لم يكن موجوداً
ALTER TABLE public.products
ADD COLUMN IF NOT EXISTS is_out_of_stock BOOLEAN DEFAULT false;

-- 4. تحديث البيانات القديمة لتجنب القيم الفارغة في مصفوفة الصور
UPDATE public.products
SET images = jsonb_build_array(image)
WHERE (images IS NULL OR images = '[]'::jsonb) AND image IS NOT NULL AND image != '';

-- نصيحة: انسخ الكود ده وشغله في Supabase SQL Editor
-- Tip: Copy this code and run it in the Supabase SQL Editor
