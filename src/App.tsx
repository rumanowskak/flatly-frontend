import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { FlatsList } from './components/flats/FlatsList';
import { BookingsList } from './components/bookings/BookingsList';
import RegisterView from './components/registration/RegisterView';
import LoginView from './components/registration/LoginForm';
import Navbar from './components/common/Navbar';
import AddFlat from './components/flats/AddFlatView';
import EditFlat from './components/flats/EditFlatView';

function App() {
  const [currentTabName, setTabName] = useState("flatList");
  const [currentFlat, setCurrentFlat] = useState(null);

  const [currentTab, setTab] = useState(<FlatsList updateTab={updateTab} setCurrentFlat={setCurrentFlat} switchToEditTab={switchToEditTab}/>);

  function updateTab(e : any)
  {
    e.preventDefault();
    setTabName(e.target.value)
    console.log(e.target.value)
    switch (e.target.value)
    {
      case "flatsList":
        setTab(<FlatsList updateTab={updateTab} setCurrentFlat={setCurrentFlat} switchToEditTab={switchToEditTab}/>)
        break;
      case "bookingsList":
        setTab(<BookingsList/>)
        break;
      case "loginView":
        setTab(<LoginView/>)
        break;
      case "registrationView":
        setTab(<RegisterView/>)
        break;
      case "addFlat":
        setTab(<AddFlat/>)
        break;
      case "editFlat":
        setTab(<EditFlat initialFlat={currentFlat}/>)
        break;
    }
  }

  function switchToEditTab(flat : any) 
  {
        setTab(<EditFlat initialFlat={flat}/>);
  }

  return (
    <div className="App">
      <Navbar updateTab={updateTab}/>
      {currentTab}
    </div>
  );
}

export default App;
