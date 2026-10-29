import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://adxwvvgbbbvxoemjjrso.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkeHd2dmdiYmJ2eG9lbWpqcnNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyNTc5NDIsImV4cCI6MjEwODgzMzk0Mn0.y6vMpBOhRT7dFyYCZqFcc3XvKeh32eGkhTeM76K-CiA';

export const supabase = createClient(supabaseUrl, supabaseKey);
