import { MyUserContextProvider } from '@/hooks/useUser';
import React from 'react'
interface UseProviderProps {
    children: React.ReactNode;
}
const UseProvider = ({children}: UseProviderProps) => {
  return (
   <MyUserContextProvider>
    {children}
   </MyUserContextProvider>
  )
}

export default UseProvider