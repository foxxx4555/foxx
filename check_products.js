import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ogwxaiilmyhfukjtkbmp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nd3hhaWlsbXloZnVranRrYm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODk3MDUsImV4cCI6MjA5MDI2NTcwNX0.BJlGVEJnfCSVB1bqmBHz4hdBW_UIK4XT-AqSHDRAdSg';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkProducts() {
  const { data, count, error } = await supabase
    .from('products')
    .select('*', { count: 'exact' });
    
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(`Total products remaining: ${count}`);
    if (count > 0) {
      console.log('Sample product:', data[0].name);
    }
  }
}

checkProducts();
