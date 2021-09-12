// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// DataLayer
import { useStateProviderValue } from "./StateProvider";
// Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
// Styles
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateProviderValue();
  
  return (
    // BEM naming convention
    // app instead of App for class name
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/" element={<h1>Welcome</h1>} />
                <Route path="/room/:roomId" element={<Chat />} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
