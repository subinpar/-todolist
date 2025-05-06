import { createContext,useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider=({children, initDakrMode=true})=>{

  const [darkMode, setDarkMode]=useState(initDakrMode);
  const toggleDarkMode=()=>
    setDarkMode(!darkMode);


  return(
     <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
      {children}
     </DarkModeContext.Provider>
  )
}