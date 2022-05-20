import './App.css';
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="App">
    <Header />
      <main>
        <SideMenu />
      </main>
    </div>
  );
}

export default App;
