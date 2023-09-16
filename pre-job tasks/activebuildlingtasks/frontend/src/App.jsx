import React,{useState} from 'react';
import './App.css';
import InventoryForm from './components/InventoryForm';
import InventoryList from './components/InventoryList';

function App() {
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <div className="App w-full h-full">
      <InventoryForm toggleForm={toggleForm} setToggleForm={setToggleForm}/>
      <InventoryList toggleForm={toggleForm} setToggleForm={setToggleForm}/>
    </div>
  );
}

export default App;
