"use client"
import { Database } from '@/types_db'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import React, { useState } from 'react'
interface SupabaseProvidersProps{
   children: React.ReactNode; 
}
const SupabaseProviders = ({children}: SupabaseProvidersProps) => {

  const [supabaseClient] = useState(()=>(
    createClientComponentClient<Database>()
  ));
  return(
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  )
}
 
export default SupabaseProviders;