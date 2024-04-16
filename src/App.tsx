import "./App.css";
import Nav from "./components/Nav.tsx";

function App() {
  return (
    <div className=" w-full h-screen bg-blue-800 text-white text-4xl flex justify-center gap-2 content-center p-2">
      <div className="menu-model w-1/12">
        <Nav />
      </div>
      <div className="display w-8/12 bg-white h-full rounded-3xl"></div>
      <div className="info w-3/12 bg-white rounded-3xl"></div>
    </div>
  );
}

export default App;
