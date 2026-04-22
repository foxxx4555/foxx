import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ogwxaiilmyhfukjtkbmp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nd3hhaWlsbXloZnVranRrYm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODk3MDUsImV4cCI6MjA5MDI2NTcwNX0.BJlGVEJnfCSVB1bqmBHz4hdBW_UIK4XT-AqSHDRAdSg';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function deleteAllProducts() {
  console.log('Deleting products from database...');
  
  // We can't delete without a filter in supabase using public anon key unless we fetch them first and delete by ID, or use neq.
  const { data, error } = await supabase
    .from('products')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Deletes all

  if (error) {
    console.error('Error deleting:', error);
  } else {
    console.log('Successfully deleted all old test products!');
  }
}

deleteAllProducts();
