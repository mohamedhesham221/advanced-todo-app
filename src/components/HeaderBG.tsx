import bgDesktopDark from "/assets/bg-desktop-dark.webp";
import bgDesktopLight from "/assets/bg-desktop-light.webp";
import bgMobileDark from "/assets/bg-mobile-dark.webp";
import bgMobileLight from "/assets/bg-mobile-light.webp";
import { useTheme } from "../hooks/useTheme";
const HeaderBG = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full">
      <picture className="w-full h-auto">
      {theme === "light" ? (
        <>
          <source srcSet={bgDesktopLight} media="(min-width: 768px)"/>
          <img className="w-full" src={bgMobileLight} alt=""/>
        </>
      ) : (
        <>
          <source srcSet={bgDesktopDark} media="(min-width: 768px)"/>
          <img className="w-full" src={bgMobileDark} alt=""/>
        </>
      )}
      </picture>
    </div>
  );
};

export default HeaderBG;
