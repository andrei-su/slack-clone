// Styles
import "./App.css";
// Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    // BEM naming convention
    // app instead of App for class name
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      {/* React-Router -> Chat screen */}
    </div>
  );
}

export default App;
