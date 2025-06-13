import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PasswordGenerator from "./PasswordGenerator";
import TodoList from "./TodoList";
import WeatherCard from "./components/WeatherCard";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Router>
      <div>
        

        <div>
          {/* Navigation Links (optional) */}
          <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg text-white px-6 py-4">
          <div className="container mx-auto flex justify-between items-center"> 
          <h1 className="text-2xl font-bold">Mushahid Buttar</h1>
          <ul className="flex space-x-6 text-lg">

           <li className="hover:text-yellow-300 transition duration-300 cursor-pointer"> <Link to="/WeatherCard">Weather</Link> </li> 
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer"> <Link to="/PasswordGenerator">PasswordGenerator</Link> </li> 
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer"> <Link to="/todo">Todo</Link> </li>
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer"> <Link to="/Quiz">Quiz </Link>  </li>

            </ul>
            </div>
          </nav>

          <Routes>


            <Route
              path="/WeatherCard"
              element={
                <div className="flex items-center flex-col  App h-screen bg-gradient-to-r bg-sky-300 ">
                  <h1 className="text-4xl font-extrabold pt-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text animate-pulse">
                    This Weather App
                  </h1>
                  <WeatherCard />
                </div>
              }
            />


            <Route
             path="/PasswordGenerator" element={<div className="App h-screen bg-gradient-to-r from-red-200 via-pink-200">
          <h1 className="text-3xl font-bold pt-16"> Password Genrator </h1>
          <PasswordGenerator />
        </div>} />


            <Route 
            path="/todo" element={<TodoList />} />

            <Route
              path="/Quiz"
              element={
                <div className=" App h-screen  flex flex-col items-center gap-8 bg-gradient-to-r from-green-500 via-teal-600">
                  <h1 className="text-3xl font-bold pt-20">Quiz By Buttar </h1>
                  <Quiz />
                </div>
              }
            />

            <Route
             path="/" element={<div className="font-bold bg-slate-100 text-center py-3">Welcome! Portfolio  Choose an app.</div>} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
