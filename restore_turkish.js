import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ogwxaiilmyhfukjtkbmp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nd3hhaWlsbXloZnVranRrYm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODk3MDUsImV4cCI6MjA5MDI2NTcwNX0.BJlGVEJnfCSVB1bqmBHz4hdBW_UIK4XT-AqSHDRAdSg';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const turkishProducts = [
  {
    id: '092b6f2c-0fdc-43af-958a-7f26d23de62c',
    name: 'منيراال جولد ',
    category: 'كالسيت',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781860007-1000144421.jpg',
    origin: 'تركي',
    created_at: '2026-04-21 14:31:02.97599+00',
    description: 'متاح ربط وايزي ',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781860007-1000144421.jpg"],
    is_out_of_stock: false
  },
  {
    id: '0af591e2-a5d9-45ec-bafc-8b99a2d27f90',
    name: 'mini box',
    category: 'فلاتر رايت ووتر',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776002893321-73.jpeg',
    origin: 'تركي',
    created_at: '2026-04-12 14:08:26.801394+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776002893321-73.jpeg"],
    is_out_of_stock: false
  },
  {
    id: '1f9f43e6-7d59-4b27-811c-e6e10b889a8c',
    name: 'مينرال مسمط جولد',
    category: 'كالسيت',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775906328657-15.jpeg',
    origin: 'تركي',
    created_at: '2026-04-02 13:31:55.184511+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775906328657-15.jpeg"],
    is_out_of_stock: false
  },
  {
    id: '2887147f-7bd5-495a-b7e0-5cae6a90ce4a',
    name: 'طقم كومبكت تركا ',
    category: 'طقم الكومباكت',
    price: -1.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775999790292-44.jpeg',
    origin: 'تركي',
    created_at: '2026-04-11 13:36:23.945398+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775999790292-44.jpeg"],
    is_out_of_stock: false
  },
  {
    id: '32c71973-7d22-435e-b719-d37dcddb0af2',
    name: 'R.O تركي  بوكس ',
    category: 'فلاتر رايت ووتر',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775905368676-6.jpeg',
    origin: 'تركي',
    created_at: '2026-04-02 10:30:24.504696+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775905368676-6.jpeg"],
    is_out_of_stock: false
  },
  {
    id: '3f0be28a-0f71-4ede-a612-e60f05320f6e',
    name: 'خزان تركا 2.2 من عشره ',
    category: 'خزان',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781011257-1000144477.jpg',
    origin: 'تركي',
    created_at: '2026-04-21 14:16:54.095818+00',
    description: 'خزان تركا 2.2 من عشر بما يعادل 4 جالون ',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781011257-1000144477.jpg"],
    is_out_of_stock: false
  },
  {
    id: '4d64738d-c1cb-409b-9925-76dc94195034',
    name: 'مينرال  مسمط موف ',
    category: 'كالسيت',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775906245618-14.jpeg',
    origin: 'تركي',
    created_at: '2026-04-02 13:30:30.419472+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775906245618-14.jpeg"],
    is_out_of_stock: false
  },
  {
    id: '5707ae03-198a-4570-a445-1cdc34716706',
    name: 'ro تركا ',
    category: 'فلاتر رايت ووتر',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776003696150-88.jpeg',
    origin: 'تركي',
    created_at: '2026-04-12 14:22:09.133526+00',
    description: 'شاسيه استاند \nطقم كومبكت \nبوست وكالسيد والكالين تركا \nهاوزنج ممبرين \nممبرين رايت ووتر \nمضخه 100 جالون \nترانس الكتروني\nصباع صرف وهاي ولو ورباعي\nحنفيه هاند مكسر نحاس \nنتره ومحبس ',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776003696150-88.jpeg"],
    is_out_of_stock: true
  },
  {
    id: '5ec813fd-8714-415d-aea3-8c3c8c30a27f',
    name: 'بوست كومبكت ',
    category: 'بوست',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781251598-1000143976.jpg',
    origin: 'تركي',
    created_at: '2026-04-21 14:20:54.141731+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781251598-1000143976.jpg"],
    is_out_of_stock: false
  },
  {
    id: '5f2a8eba-ba6f-4faf-933b-e30043269b38',
    name: 'خماسي بوكس تركي ',
    category: 'فلاتر رايت ووتر',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776002561705-71.jpeg',
    origin: 'تركي',
    created_at: '2026-04-02 10:22:56.055784+00',
    description: 'بوكس \nطقم كومبكت \nبوست تركا \nمنيرال موف تركا \n',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776002561705-71.jpeg"],
    is_out_of_stock: false
  },
  {
    id: '665732c6-decf-44e9-8226-76eb4ffcfa21',
    name: 'أولي وتانيه وثالثه كومبكت ربط',
    category: 'طقم الكومباكت',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781687731-1000144493.jpg',
    origin: 'تركي',
    created_at: '2026-04-21 14:27:55.72834+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781687731-1000144493.jpg"],
    is_out_of_stock: false
  },
  {
    id: '682a1ec0-efb0-4c7b-92fd-e48871074010',
    name: 'بوست تركي ايزي ',
    category: 'بوست',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775912655225-24.jpeg',
    origin: 'تركي',
    created_at: '2026-03-28 13:53:41+00',
    description: 'متاح\nبوست ربط \nبوست ايزي ',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775912655225-24.jpeg"],
    is_out_of_stock: false
  },
  {
    id: '7dd37bc1-2311-4daf-96a8-0a2bfadfe5e9',
    name: 'خزان تركا',
    category: 'خزان',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776004597914-100.jpeg',
    origin: 'تركي',
    created_at: '2026-03-29 10:43:28+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776004597914-100.jpeg"],
    is_out_of_stock: false
  },
  {
    id: 'c04c01ad-7892-4cc5-819f-588860fb1b65',
    name: 'جهاز  الاستاند  تركا خماسي ',
    category: 'فلاتر رايت ووتر',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775905239634-7.jpeg',
    origin: 'تركي',
    created_at: '2026-04-02 13:24:27.372698+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775905239634-7.jpeg"],
    is_out_of_stock: false
  },
  {
    id: 'c86a0f2c-eff5-40c7-8fad-faf3c3605cfc',
    name: 'خماسي كومبكت تركا ',
    category: 'فلاتر رايت ووتر',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781434243-1000144499.jpg',
    origin: 'تركي',
    created_at: '2026-04-21 14:23:57.381894+00',
    description: 'بوكس \nأولي وتانيه وثالثه كومبكت بريميم جوده عاليه \nبوست كومبكت \nبوست نانو سيلفر \n\n',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781434243-1000144499.jpg"],
    is_out_of_stock: false
  },
  {
    id: 'c9810236-5e21-46cd-85fa-17f9b8c945e4',
    name: 'بوكس خماسي كومبكت تركا ',
    category: 'فلاتر رايت ووتر',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781990825-1000144411.jpg',
    origin: 'تركي',
    created_at: '2026-04-21 14:33:13.576508+00',
    description: 'بوكس \nأولي وتانيه وثالثه كومبكت تركا \n2 بوست جوز هند ',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781990825-1000144411.jpg"],
    is_out_of_stock: false
  },
  {
    id: 'cc1603a4-80f3-4cfa-ac54-0cfbdaa9efde',
    name: 'كالسيد تركا ',
    category: 'كالسيت',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776780907084-1000144511.jpg',
    origin: 'تركي',
    created_at: '2026-04-21 14:15:09.776314+00',
    description: 'متاح كالسيد ربط و ايزي ',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776780907084-1000144511.jpg"],
    is_out_of_stock: false
  },
  {
    id: 'd0eb2da6-150c-4115-a09e-19baa7d1cb4b',
    name: 'طقم كومبكت بريميم تركا ',
    category: 'طقم الكومباكت',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776780863880-1000144467.jpg',
    origin: 'تركي',
    created_at: '2026-04-21 14:14:26.90857+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776780863880-1000144467.jpg"],
    is_out_of_stock: false
  },
  {
    id: 'd3821f6b-64b6-422e-9213-8cb070ad905f',
    name: 'الكالين Ph لبني ',
    category: 'ألكلاين',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781785573-1000144483.jpg',
    origin: 'تركي',
    created_at: '2026-04-21 14:29:48.772943+00',
    description: 'متاح ربط وايزي ',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781785573-1000144483.jpg"],
    is_out_of_stock: false
  },
  {
    id: 'd38c2854-2ef9-42f2-b83f-7fa8665684f4',
    name: 'بوست نانو سيلفر ',
    category: 'بوست',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781305501-1000144433.jpg',
    origin: 'تركي',
    created_at: '2026-04-21 14:21:48.826617+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1776781305501-1000144433.jpg"],
    is_out_of_stock: false
  },
  {
    id: 'e48b5c5b-567b-48fe-9046-78a0a303b5b3',
    name: 'الكالين لبني ph  تركا ',
    category: 'ألكلاين',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775910295927-20.jpeg',
    origin: 'تركي',
    created_at: '2026-04-02 13:22:34.809805+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775910295927-20.jpeg"],
    is_out_of_stock: false
  },
  {
    id: 'e6b056f8-d4e9-4a22-9064-8cf6001ef600',
    name: 'كالسيد   تركا شفاف',
    category: 'كالسيت',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775912781711-25.jpeg',
    origin: 'تركي',
    created_at: '2026-03-29 10:43:28+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775912781711-25.jpeg"],
    is_out_of_stock: false
  },
  {
    id: 'ffb54716-0ff5-4d71-bf21-eff03733e54a',
    name: 'ألكالين ph ألكالين استابليزر أخضر',
    category: 'ألكلاين',
    price: 0.00,
    discount: null,
    image: 'https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775129563214-________ph_______________________.jpeg',
    origin: 'تركي',
    created_at: '2026-03-29 10:43:28+00',
    description: '',
    images: ["https://ogwxaiilmyhfukjtkbmp.supabase.co/storage/v1/object/public/product-images/1775129563214-________ph_______________________.jpeg"],
    is_out_of_stock: false
  }
];

async function restoreTurkish() {
  console.log('Restoring Turkish products...');
  for (const product of turkishProducts) {
    const { error } = await supabase.from('products').insert(product);
    if (error) {
      console.error(`Failed to insert ${product.name}:`, error);
    } else {
      console.log(`Successfully restored ${product.name}`);
    }
  }
  console.log('All done!');
}

restoreTurkish();
