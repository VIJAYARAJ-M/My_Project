
import './App.css';
import MainPage from './MainPage';
import { BrowserRouter, Routes,Route  } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Pages/Dashboard"
import Email from "./components/Pages/Analytics";
import Login from "./components/Pages/Login"
import { createContext } from 'react';
import useLocalStorage from 'use-local-storage'



export  const UserContext=createContext();

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme)
    }


  return (
    <div className="Main">
      <UserContext.Provider value={{ theme: theme, color: switchTheme }}>
      <BrowserRouter>
          <Sidebar>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                {/* <Route path="/about" element={<Login/>}/> */}
                <Route path="/analytics" element={<Email/>}/>
              </Routes>
          </Sidebar>
        </BrowserRouter>
        </UserContext.Provider>
    </div>
  );
}

export default App;
