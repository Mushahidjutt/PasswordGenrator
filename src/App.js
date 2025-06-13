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
          <nav>
            <Link to="/WeatherCard">Weather</Link> |
            <Link to="/PasswordGenerator">PasswordGenerator</Link> |
            <Link to="/todo">Todo</Link> |
            <Link to="/Quiz">Quiz </Link>
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
             path="/" element={<div className="font-bold bg-red-300">Welcome! Choose an app.</div>} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
