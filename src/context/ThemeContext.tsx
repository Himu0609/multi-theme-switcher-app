import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Theme = "theme1"  | "theme2" | "theme3"

interface ThemeContextType {
   theme: Theme;
   setTheme: (theme:Theme)=> void ;
}

const ThemeConrext =createContext<ThemeContextType | undefined>( undefined)

export const ThemeProvider = ({children}:{children:ReactNode})=>{

    //Here i am persiting theme in local storage  
    const [theme,setTheme]= useState<Theme>(()=> {
        return (localStorage.getItem('theme')as Theme) || 'theme1';  
    })

  // when app renders it has theme1 by default but when we update the theme the local storage is also updated through below lines
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return(
    <ThemeConrext.Provider value={{theme,setTheme}}>
        {/*  From here i am doing scooth transition so that  all the children are will inherit this style */}
              <div className={`transition-colors duration-500 ease-in-out min-h-screen ${theme}`}>{children}</div>    
    </ThemeConrext.Provider>
  )

}

export const useTheme = ()=>{
    const context = useContext(ThemeConrext)
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
}