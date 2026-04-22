-- كود مسح المنتجات الصيني، الهندي، والفيتنامي من قاعدة البيانات نهائياً
DELETE FROM public.products 
WHERE origin IN ('صيني', 'هندي', 'فيتنامي', 'الصين', 'فيتنام', 'الهند');

-- كود مسح منتجات الشمعة الأولى والثانية والثالثة نهائياً بناءً على طلبك الأخير
DELETE FROM public.products
WHERE category IN ('شمعة أولى', 'شمعه أولى', 'شمعة ثانية', 'شمعه ثانية', 'شمعة ثالثة', 'شمعه ثالثة');

-- كود مسح المنتجات المحددة (المصري، جاكور، عادي، بلانك، الهاوزنجات، القوارير، الشاسيهات، مفاتيح، صباع الصرف، النطرة)
DELETE FROM public.products
WHERE 
   name LIKE '%بوست مصري%' OR
   name LIKE '%بوست عادي%' OR
   name LIKE '%بوست جاكور%' OR
   name LIKE '%كالسيد مصري%' OR
   name LIKE '%كالسيت مصري%' OR
   name LIKE '%كالسيد عادي%' OR
   name LIKE '%كالسيت عادي%' OR
   name LIKE '%انفره جاكور%' OR
   name LIKE '%انفراريد جاكور%' OR
   name LIKE '%انفره بلنك%' OR
   name LIKE '%انفرا بلانك%' OR
   name LIKE '%خماسي رايت ووتر ازرق%' OR
   name LIKE '%هاوزنج%' OR
   name LIKE '%قارورة%' OR
   name LIKE '%شاسيه%' OR
   name LIKE '%بوكس رايت ووتر%' OR
   name LIKE '%مفتاح%' OR
   name LIKE '%مفاتيح%' OR
   name LIKE '%صباع الصرف%' OR
   name LIKE '%نطرة%';

-- (اختياري) إذا أردت مسح كل شيء لتبدأ من الصفر تماماً، يمكنك استخدام هذا الكود بدلاً من الأكواد السابقة:
-- DELETE FROM public.products;
