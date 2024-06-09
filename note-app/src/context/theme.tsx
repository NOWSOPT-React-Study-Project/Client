import { ReactNode, createContext, useContext, useState } from "react";

export type themeProps = {
  bgColor: string,
  textColor: string,

  btnTextColor: string,
  point1Color: string,
  point2Color: string,

  redBorderColor: string,
  backgroundImg: string,
};

const lightTheme = {
  bgColor: '#FFFFFF',
  textColor: '#000000',
  
  btnTextColor: '#FFFFFF',
  point1Color: '#AAABAA',
  point2Color: '#E5BEA7',

  redBorderColor: '#FC5230',
  backgroundImg: 'src/assets/lightBackground.png',
};

const darkTheme = {
  bgColor: '#000000',
  textColor: '#FFFFFF',

  btnTextColor: '#FFFFFF',
  point1Color: '#E9A6B0',
  point2Color: '#446DA3',

  redBorderColor: '#AE3A1E',
  backgroundImg: 'src/assets/darkBackground.png',
};

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {}
});

export const ThemeModeProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<themeProps>(lightTheme);

  const toggleTheme = () => {
    setTheme(prev => prev === lightTheme ? darkTheme : lightTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
