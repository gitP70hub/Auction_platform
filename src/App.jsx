import './App.css';
import './index.css';
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx"; 
import LogIn from "./pages/LogIn.jsx"; 
import AuctionListing from "./pages/AuctionListing.jsx"; 

import { useEffect, useState } from "react";
import axios from "axios"; 

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/sayhello")
       .then((res) => setMessage(res.data))
       .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
    <div>{message}</div>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/auctionlisting" element={<AuctionListing />} />
    </Routes>
    </>
  );
}

export default App;
