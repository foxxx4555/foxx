import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ogwxaiilmyhfukjtkbmp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nd3hhaWlsbXloZnVranRrYm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODk3MDUsImV4cCI6MjA5MDI2NTcwNX0.BJlGVEJnfCSVB1bqmBHz4hdBW_UIK4XT-AqSHDRAdSg';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function fixCategories() {
  console.log('Fixing categories in the database...');
  
  // Update 'كالسيت' to 'كالسيد'
  const { data: d1, error: e1 } = await supabase
    .from('products')
    .update({ category: 'كالسيد' })
    .eq('category', 'كالسيت');
    
  if (e1) console.error('Error updating كالسيت:', e1);
  else console.log('Fixed كالسيت -> كالسيد');

  // Update 'ألكالين' to 'ألكلاين' (just in case)
  const { data: d2, error: e2 } = await supabase
    .from('products')
    .update({ category: 'ألكلاين' })
    .eq('category', 'ألكالين');
    
  if (e2) console.error('Error updating ألكالين:', e2);
  else console.log('Fixed ألكالين -> ألكلاين');

  // Update 'كومبكت' to 'طقم الكومباكت'
  const { data: d3, error: e3 } = await supabase
    .from('products')
    .update({ category: 'طقم الكومباكت' })
    .eq('category', 'كومبكت');

  if (e3) console.error('Error updating كومبكت:', e3);
  else console.log('Fixed كومبكت -> طقم الكومباكت');

  // Update 'فلتر رايت واتر' to 'فلاتر رايت ووتر'
  const { data: d4, error: e4 } = await supabase
    .from('products')
    .update({ category: 'فلاتر رايت ووتر' })
    .eq('category', 'فلتر رايت واتر');

  if (e4) console.error('Error updating فلتر رايت واتر:', e4);
  else console.log('Fixed فلتر رايت واتر -> فلاتر رايت ووتر');

  console.log('All categories fixed!');
}

fixCategories();
