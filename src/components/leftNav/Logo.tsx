import { twMerge } from "tailwind-merge";
import { useDarkMode } from "../../contexts/themeContext/ThemeContext";

const Logo = ({
  className,
  expanded,
}: {
  className?: string;
  expanded?: boolean;
}) => {
  const { isDark } = useDarkMode();

  return (
    <div className={twMerge("", className)}>
      {isDark ? (
        <img src={expanded ? "logo-dark.png" : "logo-small.png"} alt='' />
      ) : (
        <img src={expanded ? "logo.png" : "logo-small.png"} alt='' />
      )}
    </div>
  );
};

export default Logo;
