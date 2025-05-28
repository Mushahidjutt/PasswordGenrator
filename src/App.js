import "./App.css";
import PasswordGenerator from "./PasswordGenerator";
import ClickCount from "./ClickCount";
import Test from "./Test";
import TodoList from "./TodoList";
import Practicee from "./components/Practicee";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div>
      {/* <ClickCount/> */}
      {/* <Test/> */}
      <TodoList/>

      {/* <div className="flex items-center flex-col  App h-screen bg-gradient-to-r bg-sky-300 ">
       <h1 className="text-4xl font-extrabold pt-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text animate-pulse">This Weather App</h1>
        <WeatherCard />
      </div> */}

      {/* <div className="App h-screen bg-gradient-to-r from-red-200 via-pink-200">
      <h1 className="text-3xl font-bold pt-16"> Password Genrator </h1>
      <PasswordGenerator/>
      <Practicee/>

    </div> */}
    </div>
  );
}

export default App;
