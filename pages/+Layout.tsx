import { useState } from "react";
import { ThemeContext } from "../src/contexts/ThemeContext";
import Background from "../src/entities/Background";
import "../styles/fonts.css";
import "../styles/tailwind.css";
import "../i18n/i18n";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("modern-light");

  return (
    <div>
      <ThemeContext value={theme}>
        <Background />
        <Content>{children}</Content>
      </ThemeContext>
    </div>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="page-container">
      <div id="page-content">{children}</div>
    </div>
  );
};

export default Layout;
