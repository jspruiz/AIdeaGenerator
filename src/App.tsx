import AI_Input_Search from "./components/AI_Input_Search";
import "./App.css";

function App() {

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center relative overflow-hidden p-6 ">
        {/* Dark Horizon Glow */}
        <div
          className="absolute top-0 left-0 w-screen h-screen z-0"
          style={{
            background: `radial-gradient(circle 500px at 50% 100px, #8b5cf666, transparent)`,
          }}
        />

        {/* Text Section */}
        <div className="z-10 flex flex-col items-center justify-center w-full text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">AIdea Generator</h1>
          <p className="text-xl text-violet-200">Genera ideas con IA</p>
        </div>

        {/* AI Input Section */}
          <AI_Input_Search />
      </div>
    </>
  );
}
export default App;
