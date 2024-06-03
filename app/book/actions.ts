'use server';

import { createClient } from '@/utils/supabase/server';

export async function BookingActions(formData: FormData) {
   const supabase = createClient();
   const email = formData.get('email') as string;
   const name = formData.get('name') as string;
   const project_description = formData.get('project_description') as string;
 
   if (!email || !name || !project_description) {
     throw new Error('Please fill out all fields');
   }
 
   const { data: users_booking } = await supabase.from('users_booking').insert({
     email: email,
     name: name,
     project_description: project_description,
   });
 }
 