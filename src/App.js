
import './App.css';
import MainPage from './MainPage';
import { BrowserRouter as Router,Switch,Route,Routes, Redirect} from "react-router-dom";
import { redirect } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Pages/Dashboard"
import Email from "./components/Pages/Analytics";
//import Login from "./components/Pages/Login"
import { createContext } from 'react';
import useLocalStorage from 'use-local-storage'
import Admin from "./components/Layouts/Admin";
import Login from "./components/Pages/About";
import Register from "./components/Pages/Register";



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
      <Router>
    
         {/* <Admin/> */}
         
         <Switch>
         
                
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register}/>
                {/* <Route path="/main" render={(props) => <MainPage {...props} />} /> */}
                {/* <Redirect from="/" to="/dash" /> */}
                {/* <Route path='/main' element={ <Redirect to="/login" /> }/> */}
                {/* <Redirect from="*" to="/register" /> */}
                <Route path="/main" component={MainPage } /> 
                <Redirect from="/" to="main/dash" /> 
                {/* <Redirect from="*" to="/dash"  component={MainPage}/> */}
                {/* <Route path="/dashboard" element={<MainPage/>}/>  */}
                {/* <Route path="/main" render={<MainPage />} /> */}
                {/* <Navigate from="/" to="/" /> */}
               
                
          
          </Switch>
         
          {/* <Sidebar>
              <Switch>
                
                <Route path="/dashboard" component={Dashboard}/>
                
                <Route path="/analytics" component={Email}/>
              </Switch>
          </Sidebar> */}
          
        </Router>
        </UserContext.Provider>
    </div>
  );
}

export default App;
