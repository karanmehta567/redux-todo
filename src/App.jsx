import Card from "./components/Card";
import "./index.css";
function App() {
  return (
    <div className="bg-slate-100 h-screen w-screen">
      <h1 className="text-3xl"></h1>
      <div className="container mx-auto flex items-center justify-center h-full">
        <Card />
      </div>
    </div>
  );
}

export default App;
