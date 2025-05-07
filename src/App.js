import './App.css';
import PasswordGenerator from './PasswordGenerator';
import ClickCount from './ClickCount';
import Test from './Test';
import TodoList from './TodoList';


function App() {
  return (

    <div>
      
      {/* <ClickCount/> */}
      {/* <Test/> */}
      {/* <TodoList/> */}
    
    
    <div className="App h-screen bg-gradient-to-r from-red-200 via-pink-200">
      <h1 className="text-3xl font-bold pt-16"> Password Genrator </h1>
      <PasswordGenerator/>
    </div>

    </div>
    
  );
}

export default App;
