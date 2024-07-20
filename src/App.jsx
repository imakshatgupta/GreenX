import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Drawer, Button } from 'antd';
import Navbar from "./Components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Wallet from "./Components/Wallet.jsx";
import CropForm from "./pages/CropForm.jsx"; 
import FarmerListing from "./pages/FarmerListing.jsx";
import user from "./Components/users.json";
import FarmerDashboard from "./pages/FarmerDashboard.jsx";
import Temp from "./pages/temp.jsx"

function App() {
  const [open, setOpen] = useState(false);
  const [userType, setUserType] = useState(null);

  const showDrawer = (type) => {
    setUserType(type);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setUserType(null);
  };

  const drawerHeaderStyle = {
    display: 'none' // Hide the header
  };

  const drawerBodyStyle = {
    padding: '0px', // Remove extra padding
    backgroundColor: '#000000', // Set your desired background color
  };

  const drawerContentWrapperStyle = {
    height: '70vh', // Set the height of the Drawer
    overflow: 'auto' // Add overflow to handle scrolling if necessary
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/home' element={<Hero showDrawer={showDrawer} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cropform" element={<CropForm />} /> {/* Add route for CropForm */}
          <Route path="/farmers" element={<FarmerListing />} />
          <Route path="/temp" element={<Temp />} />
          <Route path='/navbar' element = {<Navbar />} />
          <Route path='/home' element={<Hero/>} />
          <Route path='/farmerdashboard' element={<FarmerDashboard/>} />
        </Routes>
      </BrowserRouter>
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        width={360} // Set the width for a smaller drawer
        headerStyle={drawerHeaderStyle} // Hide the header
        bodyStyle={drawerBodyStyle} // Apply body styles
        contentWrapperStyle={drawerContentWrapperStyle} // Apply content wrapper styles
      >
        {userType === 'investor' && (
          <Wallet data={user.investor} />
        )}
        {userType === 'farmer' && (
          <Wallet data={user.farmer} />
        )}
      </Drawer>
    </React.Fragment>
  );
}

export default App;
