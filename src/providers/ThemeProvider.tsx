import { useThemeStore } from '../store/useThemeStore';
import { ThemeContext } from '../context/themeContext';

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const {theme, toggleTheme} = useThemeStore();

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
