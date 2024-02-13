import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>THEME</button>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
