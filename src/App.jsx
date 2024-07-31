import "./App.css";
import Tag from "./components/Tag";
import Random from "./components/Random";

function App() {
  return (
  <div className="w-full min-h-screen  flex flex-col background  overflow-x-hidden items-center">
    <h1 className="bg-white rounded-md  text-center  mt-[40px] 
    ml-[15px] px-10 py-2 text-4xl w-11/12 font-bold">RANDOM GIFS</h1>
    <div className="flex flex-col">
      <Random/>
      <Tag/>
    </div>

  </div>
  );
}

export default App;
